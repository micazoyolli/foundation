import assert from 'node:assert/strict';
import test from 'node:test';
import {
  applyHtmlMetadata,
  buildSitemapXml,
  getAlternateLinkTags,
  getCanonicalUrl,
  getStaticRouteOutputPath,
  upsertLinkTag,
  upsertMetaTag,
} from '../dist/index.js';

const template = [
  '<!doctype html>',
  '<html lang="es">',
  '  <head>',
  '    <title>Old title</title>',
  '    <meta name="description" content="Old description" />',
  '  </head>',
  '  <body></body>',
  '</html>',
].join('\n');

test('applies route metadata and escapes text values', () => {
  const html = applyHtmlMetadata(template, {
    canonical: 'https://example.com/categoria/boda?ref="social"',
    description: 'Invitaciones <digitales> & diseño',
    image: 'https://example.com/og.png?name="boda"',
    lang: 'es-MX',
    siteName: '<micazoyolli />',
    title: 'Bodas & fiestas "premium"',
    twitterCard: 'summary_large_image',
  });

  assert.match(html, /<html lang="es-MX">/);
  assert.match(html, /<title>Bodas &amp; fiestas &quot;premium&quot;<\/title>/);
  assert.match(html, /<meta name="description" content="Invitaciones &lt;digitales&gt; &amp; diseño" \/>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/example.com\/categoria\/boda\?ref=&quot;social&quot;" \/>/);
  assert.match(html, /<meta property="og:site_name" content="&lt;micazoyolli \/&gt;" \/>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/);
});

test('generates alternate link tags with escaped attributes', () => {
  const tags = getAlternateLinkTags([
    {
      hreflang: 'es-MX',
      href: 'https://example.com/sobre-mi?ref="nav"',
    },
  ]);

  assert.equal(
    tags,
    '<link rel="alternate" hreflang="es-MX" href="https://example.com/sobre-mi?ref=&quot;nav&quot;" />',
  );
});

test('upserts meta and link tags in existing HTML', () => {
  const withMeta = upsertMetaTag(
    template,
    'name="description"',
    '<meta name="description" content="Nueva descripcion" />',
  );
  const withLink = upsertLinkTag(
    withMeta,
    'rel="canonical"',
    '<link rel="canonical" href="https://example.com/" />',
  );

  assert.match(withMeta, /content="Nueva descripcion"/);
  assert.match(withLink, /<link rel="canonical" href="https:\/\/example.com\/" \/>/);
});

test('builds canonical URLs and static output paths', () => {
  assert.equal(
    getCanonicalUrl('https://example.com/', '/coleccion/todos/', {
      trailingSlash: true,
    }),
    'https://example.com/coleccion/todos/',
  );
  assert.equal(getCanonicalUrl('https://example.com/', '/', {}), 'https://example.com');
  assert.equal(getStaticRouteOutputPath('/categoria/boda'), 'categoria/boda/index.html');
  assert.equal(getStaticRouteOutputPath('/'), 'index.html');
});

test('builds sitemap XML with escaped values', () => {
  const xml = buildSitemapXml([
    {
      changefreq: 'monthly',
      loc: 'https://example.com/categoria/boda?ref=brand&source=web',
      priority: '0.8',
    },
  ], {
    lastmod: '2026-07-12',
  });

  assert.match(xml, /^<\?xml version="1.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<loc>https:\/\/example.com\/categoria\/boda\?ref=brand&amp;source=web<\/loc>/);
  assert.match(xml, /<lastmod>2026-07-12<\/lastmod>/);
  assert.match(xml, /<changefreq>monthly<\/changefreq>/);
  assert.match(xml, /<priority>0.8<\/priority>/);
});
