# TypeScript: SEO & Build

These helpers are pure and do not know project routes, domains, brands or specific metadata.

## URLs

```ts
import { getCanonicalUrl, getAbsoluteUrl } from '@micazoyolli/foundation';

getCanonicalUrl('https://nadia.dev/', '/en/about/');
getAbsoluteUrl('/meta.jpg', 'https://nadia.dev');
```

## HTML metadata

```ts
import { applyHtmlMetadata } from '@micazoyolli/foundation';

const html = applyHtmlMetadata(template, {
  canonical: 'https://foundation.nadia.dev',
  title: 'Foundation',
  description: 'Frontend foundations.',
});
```

## Sitemap

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

const xml = buildSitemapXml([{ loc: 'https://foundation.nadia.dev/' }]);
```

Do not move `SITE_URL`, routes, OG images or project metadata into Foundation.
