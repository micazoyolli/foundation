import { cp, mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const DEFAULT_BUILD_DIR = 'dist';
const DEFAULT_DEPLOYMENT_BRANCH = 'gh-pages';
const DEFAULT_MESSAGE = 'build: dist actualizado correctamente';
const DEFAULT_REMOTE = 'origin';
const DEFAULT_SOURCE_BRANCH = 'main';
export class GithubPagesDeployError extends Error {
    constructor(message) {
        super(message);
        this.name = 'GithubPagesDeployError';
    }
}
const resolveOptions = (options = {}) => ({
    buildDir: options.buildDir ?? DEFAULT_BUILD_DIR,
    cwd: options.cwd ?? process.cwd(),
    deploymentBranch: options.deploymentBranch ?? DEFAULT_DEPLOYMENT_BRANCH,
    message: options.message ?? DEFAULT_MESSAGE,
    remote: options.remote ?? DEFAULT_REMOTE,
    sourceBranch: options.sourceBranch ?? DEFAULT_SOURCE_BRANCH,
});
const assertSafeGitRefPart = (value, label) => {
    if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(value) || value.includes('..') || value.endsWith('/')) {
        throw new GithubPagesDeployError(`Invalid ${label}: "${value}".`);
    }
};
const runGit = (args, cwd) => {
    const result = spawnSync('git', args, {
        cwd,
        encoding: 'utf8',
        env: {
            ...process.env,
            GIT_TERMINAL_PROMPT: '0',
        },
    });
    if (result.error) {
        throw new GithubPagesDeployError(`Failed to run git ${args.join(' ')}: ${result.error.message}`);
    }
    if (result.status !== 0) {
        const details = (result.stderr || result.stdout || '').trim();
        throw new GithubPagesDeployError(`Git command failed: git ${args.join(' ')}${details ? `\n${details}` : ''}`);
    }
    return {
        stderr: result.stderr.trim(),
        stdout: result.stdout.trim(),
    };
};
const getRemoteTrackingRef = (remote, branch) => `refs/remotes/${remote}/${branch}`;
const fetchRemoteBranch = (repositoryRoot, remote, branch) => {
    runGit(['fetch', remote, `+${branch}:${getRemoteTrackingRef(remote, branch)}`], repositoryRoot);
};
const getRepositoryRoot = (cwd) => {
    try {
        return runGit(['rev-parse', '--show-toplevel'], cwd).stdout;
    }
    catch {
        throw new GithubPagesDeployError('Current directory must be inside a Git repository.');
    }
};
const assertCleanWorkingTree = (repositoryRoot) => {
    const status = runGit(['status', '--porcelain'], repositoryRoot).stdout;
    if (status) {
        throw new GithubPagesDeployError(`Working tree must be clean before deploying.\n${status}`);
    }
};
const assertSyncedBranch = (repositoryRoot, sourceBranch, remote, deploymentBranch) => {
    const currentBranch = runGit(['branch', '--show-current'], repositoryRoot).stdout;
    if (currentBranch !== sourceBranch) {
        throw new GithubPagesDeployError(`Current branch must be "${sourceBranch}". Found "${currentBranch || 'detached HEAD'}".`);
    }
    fetchRemoteBranch(repositoryRoot, remote, sourceBranch);
    fetchRemoteBranch(repositoryRoot, remote, deploymentBranch);
    const localHead = runGit(['rev-parse', sourceBranch], repositoryRoot).stdout;
    const remoteHead = runGit(['rev-parse', `${remote}/${sourceBranch}`], repositoryRoot).stdout;
    if (localHead !== remoteHead) {
        throw new GithubPagesDeployError(`${sourceBranch} must be synchronized with ${remote}/${sourceBranch} before deploying.`);
    }
};
const assertDeploymentBranchExists = (repositoryRoot, deploymentRef) => {
    try {
        runGit(['rev-parse', '--verify', `${deploymentRef}^{commit}`], repositoryRoot);
    }
    catch {
        throw new GithubPagesDeployError(`Deployment branch "${deploymentRef}" must exist before deploying.`);
    }
};
const assertBuildDirectory = async (buildDirectory) => {
    let buildStat;
    try {
        buildStat = await stat(buildDirectory);
    }
    catch {
        throw new GithubPagesDeployError(`Build directory does not exist: ${buildDirectory}`);
    }
    if (!buildStat.isDirectory()) {
        throw new GithubPagesDeployError(`Build path must be a directory: ${buildDirectory}`);
    }
    const entries = await readdir(buildDirectory);
    if (entries.length === 0) {
        throw new GithubPagesDeployError(`Build directory is empty: ${buildDirectory}`);
    }
};
const clearWorktree = async (worktreePath) => {
    const entries = await readdir(worktreePath);
    await Promise.all(entries
        .filter((entry) => entry !== '.git')
        .map((entry) => rm(join(worktreePath, entry), {
        force: true,
        recursive: true,
    })));
};
const cleanupWorktree = async (repositoryRoot, worktreePath, tempRoot) => {
    try {
        runGit(['worktree', 'remove', '--force', worktreePath], repositoryRoot);
    }
    catch {
        await rm(worktreePath, {
            force: true,
            recursive: true,
        });
    }
    await rm(tempRoot, {
        force: true,
        recursive: true,
    });
};
export const deployGithubPages = async (options = {}) => {
    const resolved = resolveOptions(options);
    assertSafeGitRefPart(resolved.sourceBranch, 'source branch');
    assertSafeGitRefPart(resolved.remote, 'remote');
    assertSafeGitRefPart(resolved.deploymentBranch, 'deployment branch');
    const repositoryRoot = getRepositoryRoot(resolved.cwd);
    const buildDirectory = resolve(repositoryRoot, resolved.buildDir);
    const deploymentRef = `${resolved.remote}/${resolved.deploymentBranch}`;
    assertCleanWorkingTree(repositoryRoot);
    assertSyncedBranch(repositoryRoot, resolved.sourceBranch, resolved.remote, resolved.deploymentBranch);
    assertDeploymentBranchExists(repositoryRoot, deploymentRef);
    await assertBuildDirectory(buildDirectory);
    const tempRoot = await mkdtemp(join(tmpdir(), 'micazoyolli-gh-pages-'));
    const worktreePath = join(tempRoot, basename(repositoryRoot));
    try {
        runGit(['worktree', 'add', '--detach', worktreePath, deploymentRef], repositoryRoot);
        await clearWorktree(worktreePath);
        await cp(buildDirectory, worktreePath, {
            force: true,
            recursive: true,
        });
        const deploymentStatus = runGit(['status', '--porcelain'], worktreePath).stdout;
        if (!deploymentStatus) {
            return {
                deploymentBranch: resolved.deploymentBranch,
                pushed: false,
                reason: 'Deployment content is unchanged.',
                remote: resolved.remote,
                repositoryRoot,
            };
        }
        runGit(['add', '--all'], worktreePath);
        runGit(['commit', '-m', resolved.message], worktreePath);
        const commit = runGit(['rev-parse', '--short', 'HEAD'], worktreePath).stdout;
        runGit(['push', resolved.remote, `HEAD:${resolved.deploymentBranch}`], worktreePath);
        fetchRemoteBranch(repositoryRoot, resolved.remote, resolved.deploymentBranch);
        return {
            commit,
            deploymentBranch: resolved.deploymentBranch,
            pushed: true,
            remote: resolved.remote,
            repositoryRoot,
        };
    }
    finally {
        await cleanupWorktree(repositoryRoot, worktreePath, tempRoot);
    }
};
