---
layout: home

hero:
  name: '@micazoyolli/foundation'
  text: The technical foundation behind Nadia’s frontend ecosystem.
  tagline: SCSS tokens, TypeScript helpers, DOM primitives, accessibility and SEO/build utilities for real projects, with no React dependency, no brand data and no visual components.
  image:
    src: /foundation-mark.svg
    alt: Foundation mark
  actions:
    - theme: brand
      text: Get Started
      link: /en/getting-started/
    - theme: alt
      text: Read the docs
      link: /en/foundations/why-foundation

features:
  - title: Small
    details: Only foundations proven in real projects. No abstractions just in case.
    link: /en/foundations/philosophy
  - title: Agnostic
    details: Works with React, Vue, Angular, Astro, Vite, Next.js and Node scripts depending on the helper.
    link: /en/foundations/compatibility
  - title: Accessible
    details: DOM primitives for focus, Escape, scroll lock and selective protected media.
    link: /en/typescript/accessibility
  - title: Build-ready
    details: Canonical URLs, sitemaps, HTML metadata and static route output without knowing your brand.
    link: /en/typescript/seo
---

<p class="foundation-kicker">created by Nadia</p>

## What Foundation is

`@micazoyolli/foundation` is a non-visual foundation layer for keeping independent repositories consistent. It was born from repeated production needs: composing classes, sharing breakpoints, protecting media without blocking the whole page, handling metadata and generating static HTML/sitemaps.

```bash
yarn add @micazoyolli/foundation
```

```ts
import { cx, getCanonicalUrl, lockBodyScroll } from '@micazoyolli/foundation';
```

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

<div class="foundation-grid">
  <div class="foundation-card"><strong>Current version</strong><p><code>0.3.0</code></p></div>
  <div class="foundation-card"><strong>NPM</strong><p><a href="https://www.npmjs.com/package/@micazoyolli/foundation" target="_blank" rel="noreferrer">npmjs.com/package/@micazoyolli/foundation</a></p></div>
  <div class="foundation-card"><strong>GitHub</strong><p><a href="https://github.com/micazoyolli/foundation" target="_blank" rel="noreferrer">github.com/micazoyolli/foundation</a></p></div>
</div>

## Relationship with Nadia.dev

Foundation is part of Nadia’s technical ecosystem. It shares the same care for expressive interfaces and maintainable code, but its identity is a foundation library: focused, documented and ready for other projects.

- Portfolio: [nadia.dev](https://nadia.dev)
- GitHub: [github.com/micazoyolli](https://github.com/micazoyolli)
- NPM: [@micazoyolli/foundation](https://www.npmjs.com/package/@micazoyolli/foundation)
