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
    .map(({ href, hreflang }) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
    .join('\n    ');

export const applyHtmlMetadata = (
  html: string,
  metadata: HtmlMetadata,
  alternates: readonly AlternateLink[] = [],
) => {
  let next = html;

  if (metadata.lang) {
    next = next.replace(/<html\s+lang="[^"]*">/, `<html lang="${metadata.lang}">`);
  }

  if (metadata.title) {
    next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${metadata.title}</title>`);
    next = upsertMetaTag(next, 'name="title"', `<meta name="title" content="${metadata.title}" />`);
    next = upsertMetaTag(next, 'property="og:title"', `<meta property="og:title" content="${metadata.title}" />`);
    next = upsertMetaTag(next, 'name="twitter:title"', `<meta name="twitter:title" content="${metadata.title}" />`);
  }

  if (metadata.description) {
    next = upsertMetaTag(next, 'name="description"', `<meta name="description" content="${metadata.description}" />`);
    next = upsertMetaTag(next, 'property="og:description"', `<meta property="og:description" content="${metadata.description}" />`);
    next = upsertMetaTag(next, 'name="twitter:description"', `<meta name="twitter:description" content="${metadata.description}" />`);
  }

  if (metadata.canonical) {
    next = upsertMetaTag(next, 'property="og:url"', `<meta property="og:url" content="${metadata.canonical}" />`);
    next = upsertLinkTag(next, 'rel="canonical"', `<link rel="canonical" href="${metadata.canonical}" />`);
  }

  if (metadata.image) {
    next = upsertMetaTag(next, 'property="og:image"', `<meta property="og:image" content="${metadata.image}" />`);
    next = upsertMetaTag(next, 'name="twitter:image"', `<meta name="twitter:image" content="${metadata.image}" />`);
  }

  if (metadata.robots) {
    next = upsertMetaTag(next, 'name="robots"', `<meta name="robots" content="${metadata.robots}" />`);
  }

  if (metadata.siteName) {
    next = upsertMetaTag(next, 'property="og:site_name"', `<meta property="og:site_name" content="${metadata.siteName}" />`);
  }

  if (metadata.ogImageWidth) {
    next = upsertMetaTag(next, 'property="og:image:width"', `<meta property="og:image:width" content="${metadata.ogImageWidth}" />`);
  }

  if (metadata.ogImageHeight) {
    next = upsertMetaTag(next, 'property="og:image:height"', `<meta property="og:image:height" content="${metadata.ogImageHeight}" />`);
  }

  if (metadata.twitterCard) {
    next = upsertMetaTag(next, 'name="twitter:card"', `<meta name="twitter:card" content="${metadata.twitterCard}" />`);
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
