# Start a New Project

This guide helps start a project with Foundation without mixing shared foundations with brand decisions.

## 1. Install Foundation

```bash
yarn add @micazoyolli/foundation
```

## 2. Create a clear local structure

```txt
src/
  styles/
    tokens/
      _brand.scss
      _typography.scss
    main.scss
  seo/
    routes.ts
    build-sitemap.ts
  utils/
  components/
```

Foundation lives in imports. Your brand lives in your project.

## 3. Configure SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;
@use './tokens/brand' as brand;

.section {
  padding-block: foundation.$space-6;
  color: brand.$color-text;
}
```

## 4. Keep brand tokens local

```scss
$color-primary: #884ea0;
$font-title: 'Barriecito', cursive;
```

Final colors, logos, fonts and brand shadows do not belong in Foundation.

## 5. Accessibility baseline

```ts
import { createEscapeKeyHandler, lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';
```

Use these primitives only when you have real overlays, drawers, modals or global interactions.

## 6. Metadata and sitemap

```ts
import { buildSitemapXml, getCanonicalUrl } from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://example.com', '/faq');
const sitemap = buildSitemapXml([{ loc: canonical }]);
```

The project keeps `SITE_URL`, routes, titles, descriptions, OG images and robots rules.

## 7. Favicons and PWA assets

Keep these resources separate: favicon, apple-touch-icon, manifest icons and maskable icons. Do not reuse a manifest icon as favicon when it changes the original appearance.

## Framework notes

- React + Vite: use TS utilities in components and SCSS tokens in Sass.
- Next.js: DOM helpers only in client components.
- Vue + Vite: use TS utilities in computed state or event handlers.
- Angular: use TS/SCSS utilities, no Angular services are exported.
- Astro: SEO/build in frontmatter or scripts; DOM helpers only client-side.
- Node/build scripts: use SEO/build helpers and guards, not browser DOM helpers.
