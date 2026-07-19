# GitHub Pages deploy

`micazoyolli-gh-pages-deploy` publishes a consumer project's `dist` directory to `origin/gh-pages` without creating commits on `main`.

This command belongs to Foundation's build/deploy tooling layer. It is not exported from `src/index.ts` because it is not browser runtime code and should not be imported by applications.

## What It Does

1. Validates that the current directory belongs to a Git repository.
2. Confirms that the current branch is `main`.
3. Confirms that the working tree is clean.
4. Confirms that `main` is synchronized with `origin/main`.
5. Verifies that `dist` exists and is not empty.
6. Verifies that `dist` is not tracked by Git.
7. Reuses `origin/gh-pages` when it exists or prepares a first deployment when it does not.
8. Replaces the worktree contents with `dist`.
9. Creates the commit only inside the temporary worktree.
10. Publishes the commit to `origin/gh-pages`.
11. Cleans up the temporary worktree even when an error occurs.

## Prerequisites

- Git available in the shell.
- Source branch `main`.
- Remote `origin`.
- Build output in `dist`.
- `dist/` ignored in `.gitignore` and not tracked by Git.
- Clean working tree.
- `main` synchronized with `origin/main`.

If `dist/` was already committed on the source branch, remove it from the index before using the CLI:

```bash
git rm -r --cached dist
```

The CLI does not run this command automatically because it does not modify `main`.

## Consumer Usage

```json
{
  "scripts": {
    "deploy": "yarn build && find dist -name .DS_Store -delete && yarn deploy:dist",
    "deploy:dist": "micazoyolli-gh-pages-deploy"
  }
}
```

The command resolves the consumer repository from `process.cwd()`. Defaults:

- source branch: `main`;
- remote: `origin`;
- deployment branch: `gh-pages`;
- build directory: `dist`.

`origin/gh-pages` does not need to exist for the first deployment. When it is missing, the command creates the branch during the normal push.

## Failure Behavior

The command fails before modifying the deployment when the repository does not satisfy the prerequisites. Error messages are intentionally actionable to avoid publishing from the wrong branch, with local changes, or with an incomplete build.

If the generated content is identical to what is already published, no commit is created and the command exits successfully.

In GitHub Actions, use this CLI only when checkout leaves a clean local `main` branch synchronized with the remote. For fully automated CI deployments, GitHub Pages' official artifact workflow may be more appropriate.

## Why It Is Not Runtime

This CLI uses Node, Git and the filesystem. It should not be imported by applications or exposed as part of Foundation's runtime API. Runtime helpers stay in `@micazoyolli/foundation`; this command is consumed as a package binary.
