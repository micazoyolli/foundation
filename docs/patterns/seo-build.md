# SEO build pattern

Foundation comparte la mecanica; cada proyecto conserva su registro de rutas y metadata.

## Flujo recomendado

1. El proyecto define `routes`.
2. El proyecto calcula canonical e imagenes.
3. Foundation genera sitemap o aplica metadata a HTML.
4. El build valida los archivos generados.

```ts
import {
  applyHtmlMetadata,
  buildSitemapXml,
  getCanonicalUrl,
} from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://example.com', '/categoria/boda');
const xml = buildSitemapXml([{ loc: canonical }]);
const html = applyHtmlMetadata(template, {
  canonical,
  title: 'Boda | Example',
});
```

Archivos relacionados:

- [src/seo/url.ts](https://github.com/micazoyolli/foundation/blob/master/src/seo/url.ts)
- [src/seo/sitemap.ts](https://github.com/micazoyolli/foundation/blob/master/src/seo/sitemap.ts)
- [src/seo/html.ts](https://github.com/micazoyolli/foundation/blob/master/src/seo/html.ts)

## No hacer

- No mover `SITE_URL` de un proyecto a foundation.
- No mover rutas reales a foundation.
- No generar imagenes OG desde foundation.
