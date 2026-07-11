export { applyHtmlMetadata, getAlternateLinkTags, getStaticRouteOutputPath, removeAlternateLinks, upsertLinkTag, upsertMetaTag, } from './html.js';
export type { AlternateLink, HtmlMetadata } from './html.js';
export { buildSitemapXml } from './sitemap.js';
export type { SitemapEntry, SitemapOptions } from './sitemap.js';
export { escapeHtml, escapeXml } from './text.js';
export { getAbsoluteUrl, getCanonicalUrl, isAbsoluteUrl, normalizeBaseUrl, normalizeRoutePath, } from './url.js';
export type { CanonicalUrlOptions } from './url.js';
