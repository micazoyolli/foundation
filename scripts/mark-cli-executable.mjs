import { chmod } from 'node:fs/promises';

await chmod(new URL('../dist/cli/deploy-github-pages.js', import.meta.url), 0o755);
