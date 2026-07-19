import { cp, mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { spawnSync } from 'node:child_process';

export type GithubPagesDeployOptions = {
  buildDir?: string;
  deploymentBranch?: string;
  message?: string;
  remote?: string;
  sourceBranch?: string;
  cwd?: string;
};

export type GithubPagesDeployResult = {
  commit?: string;
  deploymentBranch: string;
  initialDeployment: boolean;
  pushed: boolean;
  reason?: string;
  remote: string;
  repositoryRoot: string;
};

type GitResult = {
  stderr: string;
  stdout: string;
};

type ResolvedOptions = {
  buildDir: string;
  deploymentBranch: string;
  message: string;
  remote: string;
  sourceBranch: string;
  cwd: string;
};

const DEFAULT_BUILD_DIR = 'dist';
const DEFAULT_DEPLOYMENT_BRANCH = 'gh-pages';
const DEFAULT_MESSAGE = 'build: dist actualizado correctamente';
const DEFAULT_REMOTE = 'origin';
const DEFAULT_SOURCE_BRANCH = 'main';

export class GithubPagesDeployError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GithubPagesDeployError';
  }
}

const resolveOptions = (options: GithubPagesDeployOptions = {}): ResolvedOptions => ({
  buildDir: options.buildDir ?? DEFAULT_BUILD_DIR,
  cwd: options.cwd ?? process.cwd(),
  deploymentBranch: options.deploymentBranch ?? DEFAULT_DEPLOYMENT_BRANCH,
  message: options.message ?? DEFAULT_MESSAGE,
  remote: options.remote ?? DEFAULT_REMOTE,
  sourceBranch: options.sourceBranch ?? DEFAULT_SOURCE_BRANCH,
});

const assertSafeGitRefPart = (value: string, label: string) => {
  if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(value) || value.includes('..') || value.endsWith('/')) {
    throw new GithubPagesDeployError(`Invalid ${label}: "${value}".`);
  }
};

const runGit = (args: string[], cwd: string): GitResult => {
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

const getRemoteTrackingRef = (remote: string, branch: string) => `refs/remotes/${remote}/${branch}`;

const fetchRemoteBranch = (repositoryRoot: string, remote: string, branch: string) => {
  runGit(['fetch', remote, `+${branch}:${getRemoteTrackingRef(remote, branch)}`], repositoryRoot);
};

const remoteBranchExists = (repositoryRoot: string, remote: string, branch: string) => {
  const result = spawnSync('git', ['ls-remote', '--exit-code', '--heads', remote, branch], {
    cwd: repositoryRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0',
    },
  });

  if (result.error) {
    throw new GithubPagesDeployError(`Failed to check ${remote}/${branch}: ${result.error.message}`);
  }

  if (result.status === 0) {
    return true;
  }

  if (result.status === 2) {
    return false;
  }

  const details = (result.stderr || result.stdout || '').trim();
  throw new GithubPagesDeployError(`Git command failed: git ls-remote --exit-code --heads ${remote} ${branch}${details ? `\n${details}` : ''}`);
};

const getRepositoryRoot = (cwd: string) => {
  try {
    return runGit(['rev-parse', '--show-toplevel'], cwd).stdout;
  } catch {
    throw new GithubPagesDeployError('Current directory must be inside a Git repository.');
  }
};

const toGitPath = (path: string) => path.split(sep).join('/');

const getBuildDirectoryPathspec = (repositoryRoot: string, buildDirectory: string) => {
  const relativeBuildDirectory = relative(repositoryRoot, buildDirectory);

  if (!relativeBuildDirectory || relativeBuildDirectory === '..' || relativeBuildDirectory.startsWith(`..${sep}`) || isAbsolute(relativeBuildDirectory)) {
    throw new GithubPagesDeployError(`Build directory must be inside the repository: ${buildDirectory}`);
  }

  return toGitPath(relativeBuildDirectory);
};

const assertBuildDirectoryIsUntracked = (
  repositoryRoot: string,
  buildDirectoryPathspec: string,
  sourceBranch: string,
) => {
  const trackedFiles = runGit(['ls-files', '--', buildDirectoryPathspec], repositoryRoot).stdout;

  if (trackedFiles) {
    throw new GithubPagesDeployError([
      `Build directory "${buildDirectoryPathspec}" must not be tracked by Git.`,
      `Remove it from ${sourceBranch} with: git rm -r --cached ${buildDirectoryPathspec}`,
      `Keep "${buildDirectoryPathspec}/" ignored in .gitignore before deploying.`,
    ].join('\n'));
  }
};

const assertCleanWorkingTree = (repositoryRoot: string) => {
  const status = runGit(['status', '--porcelain'], repositoryRoot).stdout;

  if (status) {
    throw new GithubPagesDeployError(`Working tree must be clean before deploying.\n${status}`);
  }
};

const assertSyncedBranch = (
  repositoryRoot: string,
  sourceBranch: string,
  remote: string,
) => {
  const currentBranch = runGit(['branch', '--show-current'], repositoryRoot).stdout;

  if (currentBranch !== sourceBranch) {
    throw new GithubPagesDeployError(`Current branch must be "${sourceBranch}". Found "${currentBranch || 'detached HEAD'}".`);
  }

  fetchRemoteBranch(repositoryRoot, remote, sourceBranch);

  const localHead = runGit(['rev-parse', sourceBranch], repositoryRoot).stdout;
  const remoteHead = runGit(['rev-parse', `${remote}/${sourceBranch}`], repositoryRoot).stdout;

  if (localHead !== remoteHead) {
    throw new GithubPagesDeployError(`${sourceBranch} must be synchronized with ${remote}/${sourceBranch} before deploying.`);
  }
};

const assertBuildDirectory = async (buildDirectory: string) => {
  let buildStat;

  try {
    buildStat = await stat(buildDirectory);
  } catch {
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

const clearWorktree = async (worktreePath: string) => {
  const entries = await readdir(worktreePath);

  await Promise.all(entries
    .filter((entry) => entry !== '.git')
    .map((entry) => rm(join(worktreePath, entry), {
      force: true,
      recursive: true,
    })));
};

const cleanupWorktree = async (repositoryRoot: string, worktreePath: string, tempRoot: string) => {
  try {
    runGit(['worktree', 'remove', '--force', worktreePath], repositoryRoot);
  } catch {
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

export const deployGithubPages = async (
  options: GithubPagesDeployOptions = {},
): Promise<GithubPagesDeployResult> => {
  const resolved = resolveOptions(options);

  assertSafeGitRefPart(resolved.sourceBranch, 'source branch');
  assertSafeGitRefPart(resolved.remote, 'remote');
  assertSafeGitRefPart(resolved.deploymentBranch, 'deployment branch');

  const repositoryRoot = getRepositoryRoot(resolved.cwd);
  const buildDirectory = resolve(repositoryRoot, resolved.buildDir);
  const buildDirectoryPathspec = getBuildDirectoryPathspec(repositoryRoot, buildDirectory);
  const deploymentRef = `${resolved.remote}/${resolved.deploymentBranch}`;

  assertBuildDirectoryIsUntracked(repositoryRoot, buildDirectoryPathspec, resolved.sourceBranch);
  assertCleanWorkingTree(repositoryRoot);
  assertSyncedBranch(
    repositoryRoot,
    resolved.sourceBranch,
    resolved.remote,
  );
  const deploymentBranchExists = remoteBranchExists(repositoryRoot, resolved.remote, resolved.deploymentBranch);

  if (deploymentBranchExists) {
    fetchRemoteBranch(repositoryRoot, resolved.remote, resolved.deploymentBranch);
  }

  await assertBuildDirectory(buildDirectory);

  const tempRoot = await mkdtemp(join(tmpdir(), 'micazoyolli-gh-pages-'));
  const worktreePath = join(tempRoot, basename(repositoryRoot));

  try {
    runGit(['worktree', 'add', '--detach', worktreePath, deploymentBranchExists ? deploymentRef : resolved.sourceBranch], repositoryRoot);

    if (!deploymentBranchExists) {
      runGit(['checkout', '--orphan', resolved.deploymentBranch], worktreePath);
    }

    await clearWorktree(worktreePath);
    await cp(buildDirectory, worktreePath, {
      force: true,
      recursive: true,
    });

    const deploymentStatus = runGit(['status', '--porcelain'], worktreePath).stdout;

    if (!deploymentStatus) {
      return {
        deploymentBranch: resolved.deploymentBranch,
        initialDeployment: false,
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
      initialDeployment: !deploymentBranchExists,
      pushed: true,
      remote: resolved.remote,
      repositoryRoot,
    };
  } finally {
    await cleanupWorktree(repositoryRoot, worktreePath, tempRoot);
  }
};
