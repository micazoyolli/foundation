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

<div class="metadata-preview">
  <div class="metadata-preview-image">@micazoyolli/foundation</div>
  <div class="metadata-preview-body"><strong>Foundation documentation</strong><p>Canonical, Open Graph and Twitter metadata stay in each project.</p></div>
</div>

## Sitemap

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

const xml = buildSitemapXml([{ loc: 'https://foundation.nadia.dev/' }]);
```

<div class="visual-card sitemap-demo">
  &lt;url&gt;<br />
  &nbsp;&nbsp;&lt;loc&gt;https://foundation.nadia.dev/&lt;/loc&gt;<br />
  &lt;/url&gt;
</div>

Do not move `SITE_URL`, routes, OG images or project metadata into Foundation.
