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

const setupRepository = async () => {
  const tempRoot = await mkdtemp(join(tmpdir(), 'foundation-gh-pages-test-'));
  const remotePath = join(tempRoot, 'remote.git');
  const repoPath = join(tempRoot, 'repo');
  const checkoutPath = join(tempRoot, 'checkout');

  git(tempRoot, ['init', '--bare', remotePath]);
  git(tempRoot, ['clone', remotePath, repoPath]);
  git(repoPath, ['config', 'user.email', 'test@example.com']);
  git(repoPath, ['config', 'user.name', 'Foundation Test']);
  git(repoPath, ['switch', '-c', 'main']);
  await writeFile(join(repoPath, '.gitignore'), 'dist\n');
  await writeFile(join(repoPath, 'README.md'), 'source\n');
  git(repoPath, ['add', '.gitignore', 'README.md']);
  git(repoPath, ['commit', '-m', 'source']);
  git(repoPath, ['push', '-u', 'origin', 'main']);
  git(repoPath, ['switch', '--orphan', 'gh-pages']);
  await rm(join(repoPath, '.gitignore'), { force: true });
  await rm(join(repoPath, 'README.md'), { force: true });
  await writeFile(join(repoPath, 'index.html'), 'old\n');
  git(repoPath, ['add', 'index.html']);
  git(repoPath, ['commit', '-m', 'initial deploy']);
  git(repoPath, ['push', '-u', 'origin', 'gh-pages']);
  git(repoPath, ['switch', 'main']);
  git(repoPath, ['fetch', 'origin']);
  await mkdir(join(repoPath, 'dist'), { recursive: true });
  await writeFile(join(repoPath, 'dist', '.gitkeep'), 'asset\n');
  await writeFile(join(repoPath, 'dist', 'index.html'), 'new\n');

  return {
    checkoutPath,
    remotePath,
    repoPath,
    tempRoot,
  };
};

test('deploys dist to gh-pages without committing on main', async () => {
  const fixture = await setupRepository();

  try {
    const mainBefore = git(fixture.repoPath, ['rev-parse', 'main']);
    const result = await deployGithubPages({ cwd: fixture.repoPath });
    const mainAfter = git(fixture.repoPath, ['rev-parse', 'main']);
    const status = git(fixture.repoPath, ['status', '--porcelain']);

    assert.equal(result.pushed, true);
    assert.equal(mainAfter, mainBefore);
    assert.equal(status, '');

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
    assert.equal(second.reason, 'Deployment content is unchanged.');
    assert.equal(ghPagesAfterSecondDeploy, ghPagesAfterFirstDeploy);
  } finally {
    await rm(fixture.tempRoot, { force: true, recursive: true });
  }
});
