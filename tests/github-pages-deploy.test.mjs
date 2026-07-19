import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { deployGithubPages } from '../dist/git/githubPagesDeploy.js';

const git = (cwd, args) => {
  const result = spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: '0',
    },
  });

  if (result.status !== 0) {
    throw new Error(`git ${args.join(' ')} failed\n${result.stderr || result.stdout}`);
  }

  return result.stdout.trim();
};

const setupRepository = async ({
  buildDir = 'dist',
  createDeploymentBranch = true,
  trackBuildDir = false,
} = {}) => {
  const tempRoot = await mkdtemp(join(tmpdir(), 'foundation-gh-pages-test-'));
  const remotePath = join(tempRoot, 'remote.git');
  const repoPath = join(tempRoot, 'repo');
  const checkoutPath = join(tempRoot, 'checkout');
  const buildPath = join(repoPath, buildDir);

  git(tempRoot, ['init', '--bare', remotePath]);
  git(tempRoot, ['clone', remotePath, repoPath]);
  git(repoPath, ['config', 'user.email', 'test@example.com']);
  git(repoPath, ['config', 'user.name', 'Foundation Test']);
  git(repoPath, ['switch', '-c', 'main']);
  await writeFile(join(repoPath, '.gitignore'), `${buildDir}\n`);
  await writeFile(join(repoPath, 'README.md'), 'source\n');
  await mkdir(buildPath, { recursive: true });

  if (trackBuildDir) {
    await writeFile(join(buildPath, 'index.html'), 'tracked build\n');
  }

  git(repoPath, ['add', '.gitignore', 'README.md']);

  if (trackBuildDir) {
    git(repoPath, ['add', '--force', buildDir]);
  }

  git(repoPath, ['commit', '-m', 'source']);
  git(repoPath, ['push', '-u', 'origin', 'main']);

  if (createDeploymentBranch) {
    git(repoPath, ['switch', '--orphan', 'gh-pages']);
    await rm(join(repoPath, '.gitignore'), { force: true });
    await rm(join(repoPath, 'README.md'), { force: true });
    await rm(buildPath, { force: true, recursive: true });
    await writeFile(join(repoPath, 'index.html'), 'old\n');
    git(repoPath, ['add', '--all']);
    git(repoPath, ['commit', '-m', 'initial deploy']);
    git(repoPath, ['push', '-u', 'origin', 'gh-pages']);
    git(repoPath, ['switch', 'main']);
  }

  git(repoPath, ['fetch', 'origin']);
  await mkdir(buildPath, { recursive: true });
  await writeFile(join(buildPath, '.gitkeep'), 'asset\n');
  await writeFile(join(buildPath, 'index.html'), 'new\n');

  return {
    buildDir,
    checkoutPath,
    remotePath,
    repoPath,
    tempRoot,
  };
};

test('deploys dist to gh-pages without committing on main', async () => {
  const fixture = await setupRepository();

  try {
    assert.equal(git(fixture.repoPath, ['ls-files', '--', fixture.buildDir]), '');

    const mainBefore = git(fixture.repoPath, ['rev-parse', 'main']);
    const result = await deployGithubPages({ cwd: fixture.repoPath });
    const mainAfter = git(fixture.repoPath, ['rev-parse', 'main']);
    const status = git(fixture.repoPath, ['status', '--porcelain']);

    assert.equal(result.pushed, true);
    assert.equal(result.initialDeployment, false);
    assert.equal(mainAfter, mainBefore);
    assert.equal(status, '');

    git(fixture.tempRoot, ['clone', '--branch', 'gh-pages', fixture.remotePath, fixture.checkoutPath]);
    assert.equal(await readFile(join(fixture.checkoutPath, 'index.html'), 'utf8'), 'new\n');
    assert.equal(await readFile(join(fixture.checkoutPath, '.gitkeep'), 'utf8'), 'asset\n');
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});

test('fails clearly when build directory is ignored but still tracked', async () => {
  const fixture = await setupRepository({ trackBuildDir: true });

  try {
    await assert.rejects(
      deployGithubPages({ cwd: fixture.repoPath }),
      /Build directory "dist" must not be tracked by Git\.\nRemove it from main with: git rm -r --cached dist\nKeep "dist\/" ignored in \.gitignore before deploying\./,
    );
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});

test('fails on unrelated working tree changes after build directory validation passes', async () => {
  const fixture = await setupRepository();

  try {
    await writeFile(join(fixture.repoPath, 'README.md'), 'dirty source\n');

    await assert.rejects(
      deployGithubPages({ cwd: fixture.repoPath }),
      /Working tree must be clean before deploying\.\nM README\.md/,
    );
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});

test('deploys a custom build directory', async () => {
  const fixture = await setupRepository({ buildDir: 'build-output' });

  try {
    const result = await deployGithubPages({
      buildDir: 'build-output',
      cwd: fixture.repoPath,
    });

    assert.equal(result.pushed, true);

    git(fixture.tempRoot, ['clone', '--branch', 'gh-pages', fixture.remotePath, fixture.checkoutPath]);
    assert.equal(await readFile(join(fixture.checkoutPath, 'index.html'), 'utf8'), 'new\n');
    assert.equal(await readFile(join(fixture.checkoutPath, '.gitkeep'), 'utf8'), 'asset\n');
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});

test('creates gh-pages on first deployment when the remote branch does not exist', async () => {
  const fixture = await setupRepository({ createDeploymentBranch: false });

  try {
    const result = await deployGithubPages({ cwd: fixture.repoPath });

    assert.equal(result.pushed, true);
    assert.equal(result.initialDeployment, true);

    git(fixture.tempRoot, ['clone', '--branch', 'gh-pages', fixture.remotePath, fixture.checkoutPath]);
    assert.equal(await readFile(join(fixture.checkoutPath, 'index.html'), 'utf8'), 'new\n');
    assert.equal(await readFile(join(fixture.checkoutPath, '.gitkeep'), 'utf8'), 'asset\n');
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});

test('skips deployment commit when dist matches gh-pages', async () => {
  const fixture = await setupRepository();

  try {
    const first = await deployGithubPages({ cwd: fixture.repoPath });
    const ghPagesAfterFirstDeploy = git(fixture.repoPath, ['rev-parse', 'origin/gh-pages']);
    const second = await deployGithubPages({ cwd: fixture.repoPath });
    const ghPagesAfterSecondDeploy = git(fixture.repoPath, ['rev-parse', 'origin/gh-pages']);

    assert.equal(first.pushed, true);
    assert.equal(second.pushed, false);
    assert.equal(second.initialDeployment, false);
    assert.equal(second.reason, 'Deployment content is unchanged.');
    assert.equal(ghPagesAfterSecondDeploy, ghPagesAfterFirstDeploy);
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});
