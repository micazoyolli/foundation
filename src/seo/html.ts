import { escapeHtml } from './text.js';

export type HtmlMetadata = {
  canonical?: string;
  description?: string;
  image?: string;
  lang?: string;
  ogImageHeight?: number | string;
  ogImageWidth?: number | string;
  robots?: string;
  siteName?: string;
  title?: string;
  twitterCard?: string;
};

export type AlternateLink = {
  href: string;
  hreflang: string;
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const insertBeforeHeadEnd = (html: string, tag: string) =>
  html.includes('</head>') ? html.replace('</head>', `    ${tag}\n  </head>`) : html;

const getMetaTag = (name: string, content: string) =>
  `<meta name="${name}" content="${escapeHtml(content)}" />`;

const getPropertyMetaTag = (property: string, content: string) =>
  `<meta property="${property}" content="${escapeHtml(content)}" />`;

const getLinkTag = (rel: string, href: string, attributes = '') =>
  `<link rel="${rel}"${attributes} href="${escapeHtml(href)}" />`;

export const upsertMetaTag = (
  html: string,
  selector: string,
  tag: string,
) => {
  const pattern = new RegExp(`<meta\\s+${escapeRegExp(selector)}[^>]*>`);

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return insertBeforeHeadEnd(html, tag);
};

export const upsertLinkTag = (
  html: string,
  selector: string,
  tag: string,
) => {
  const pattern = new RegExp(`<link\\s+${escapeRegExp(selector)}[^>]*>`);

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return insertBeforeHeadEnd(html, tag);
};

export const removeAlternateLinks = (html: string) =>
  html.replace(/\s*<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"\s*\/?>\n?/g, '');

export const getAlternateLinkTags = (alternates: readonly AlternateLink[]) =>
  alternates
    .map(({ href, hreflang }) => getLinkTag('alternate', href, ` hreflang="${escapeHtml(hreflang)}"`))
    .join('\n    ');

export const applyHtmlMetadata = (
  html: string,
  metadata: HtmlMetadata,
  alternates: readonly AlternateLink[] = [],
) => {
  let next = html;

  if (metadata.lang) {
    next = next.replace(/<html\s+lang="[^"]*">/, `<html lang="${escapeHtml(metadata.lang)}">`);
  }

  if (metadata.title) {
    next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(metadata.title)}</title>`);
    next = upsertMetaTag(next, 'name="title"', getMetaTag('title', metadata.title));
    next = upsertMetaTag(next, 'property="og:title"', getPropertyMetaTag('og:title', metadata.title));
    next = upsertMetaTag(next, 'name="twitter:title"', getMetaTag('twitter:title', metadata.title));
  }

  if (metadata.description) {
    next = upsertMetaTag(next, 'name="description"', getMetaTag('description', metadata.description));
    next = upsertMetaTag(next, 'property="og:description"', getPropertyMetaTag('og:description', metadata.description));
    next = upsertMetaTag(next, 'name="twitter:description"', getMetaTag('twitter:description', metadata.description));
  }

  if (metadata.canonical) {
    next = upsertMetaTag(next, 'property="og:url"', getPropertyMetaTag('og:url', metadata.canonical));
    next = upsertLinkTag(next, 'rel="canonical"', getLinkTag('canonical', metadata.canonical));
  }

  if (metadata.image) {
    next = upsertMetaTag(next, 'property="og:image"', getPropertyMetaTag('og:image', metadata.image));
    next = upsertMetaTag(next, 'name="twitter:image"', getMetaTag('twitter:image', metadata.image));
  }

  if (metadata.robots) {
    next = upsertMetaTag(next, 'name="robots"', getMetaTag('robots', metadata.robots));
  }

  if (metadata.siteName) {
    next = upsertMetaTag(next, 'property="og:site_name"', getPropertyMetaTag('og:site_name', metadata.siteName));
  }

  if (metadata.ogImageWidth) {
    next = upsertMetaTag(next, 'property="og:image:width"', getPropertyMetaTag('og:image:width', String(metadata.ogImageWidth)));
  }

  if (metadata.ogImageHeight) {
    next = upsertMetaTag(next, 'property="og:image:height"', getPropertyMetaTag('og:image:height', String(metadata.ogImageHeight)));
  }

  if (metadata.twitterCard) {
    next = upsertMetaTag(next, 'name="twitter:card"', getMetaTag('twitter:card', metadata.twitterCard));
  }

  if (alternates.length > 0) {
    next = removeAlternateLinks(next);
    next = insertBeforeHeadEnd(next, getAlternateLinkTags(alternates));
  }

  return next;
};

export const getStaticRouteOutputPath = (routePath: string) => {
  const normalized = routePath === '' ? '/' : routePath;

  if (normalized === '/') return 'index.html';

  return `${normalized.replace(/^\/+/, '').replace(/\/+$/, '')}/index.html`;
};
