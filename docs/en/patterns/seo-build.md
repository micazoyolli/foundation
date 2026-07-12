# SEO build pattern

Foundation shares mechanics; each project keeps its own route and metadata registry.

```ts
import {
  applyHtmlMetadata,
  buildSitemapXml,
  getCanonicalUrl,
} from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://example.com', '/category/wedding');
const xml = buildSitemapXml([{ loc: canonical }]);
const html = applyHtmlMetadata(template, {
  canonical,
  title: 'Wedding | Example',
});
```

Do not move project URLs, route registries or OG image generation into Foundation.
