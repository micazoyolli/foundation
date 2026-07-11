import { escapeXml } from './text.js';

export type SitemapEntry = {
  changefreq?: string;
  lastmod?: string;
  loc: string;
  priority?: string;
};

export type SitemapOptions = {
  lastmod?: string;
};

export const buildSitemapXml = (
  entries: readonly SitemapEntry[],
  options: SitemapOptions = {},
) => {
  const body = entries
    .map((entry) => {
      const lastmod = entry.lastmod ?? options.lastmod;
      const parts = [
        '  <url>',
        `    <loc>${escapeXml(entry.loc)}</loc>`,
      ];

      if (lastmod) parts.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
      if (entry.changefreq) parts.push(`    <changefreq>${escapeXml(entry.changefreq)}</changefreq>`);
      if (entry.priority) parts.push(`    <priority>${escapeXml(entry.priority)}</priority>`);

      parts.push('  </url>');

      return parts.join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};
