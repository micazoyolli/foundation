import { readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSitemapXml, getCanonicalUrl } from '../dist/index.js';

const SITE_URL = 'https://foundation.nadia.dev';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const PUBLIC_DIR = path.join(DOCS_DIR, 'public');

const EXCLUDED_DIRS = new Set(['.vitepress', 'public']);

function getMarkdownFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const entryPath = path.join(dir, entry);
    const stats = statSync(entryPath);

    if (stats.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry)) return [];
      return getMarkdownFiles(entryPath);
    }

    return entry.endsWith('.md') ? [entryPath] : [];
  });
}

function getRoutePath(filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath).replaceAll(path.sep, '/');
  const route = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '');

  return route === '' ? '/' : `/${route}`;
}

function getPriority(routePath) {
  if (routePath === '/') return '1.0';
  if (routePath === '/en/') return '0.9';
  if (routePath.includes('getting-started') || routePath.includes('installation')) return '0.8';
  return '0.6';
}

const entries = getMarkdownFiles(DOCS_DIR)
  .map(getRoutePath)
  .sort((a, b) => a.localeCompare(b))
  .map((routePath) => ({
    loc: getCanonicalUrl(SITE_URL, routePath, {
      rootTrailingSlash: true,
      trailingSlash: routePath.endsWith('/'),
    }),
    changefreq: 'monthly',
    priority: getPriority(routePath),
  }));

writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), buildSitemapXml(entries), 'utf8');
writeFileSync(
  path.join(PUBLIC_DIR, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  'utf8',
);

console.log(`Docs SEO generado: ${entries.length} URLs`);
