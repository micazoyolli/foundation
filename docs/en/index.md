---
layout: home

hero:
  name: Foundation
  text: The technical foundation behind Nad’s frontend ecosystem.
  tagline: '@micazoyolli/foundation · SCSS tokens, TypeScript helpers, DOM primitives, accessibility and SEO/build utilities for real projects.'
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

<p class="foundation-kicker">@micazoyolli/foundation</p>

## What Foundation is

`@micazoyolli/foundation` is the shared base for building the ecosystem with one technical philosophy: small pieces, no brand assumptions and APIs extracted from real needs.

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
  <div class="foundation-card"><strong>Current version</strong><p><code>0.3.1</code></p></div>
  <div class="foundation-card"><strong>NPM</strong><p><a href="https://www.npmjs.com/package/@micazoyolli/foundation" target="_blank" rel="noreferrer">npmjs.com/package/@micazoyolli/foundation</a></p></div>
  <div class="foundation-card"><strong>License</strong><p><code>MIT</code></p></div>
  <div class="foundation-card"><strong>Compatibility</strong><p>SCSS, browser and Node scripts depending on the helper.</p></div>
  <div class="foundation-card"><strong>GitHub</strong><p><a href="https://github.com/micazoyolli/foundation" target="_blank" rel="noreferrer">github.com/micazoyolli/foundation</a></p></div>
</div>

## This is how the ecosystem is built

Foundation is part of Nad’s technical ecosystem. It does not compete with each brand or interface: it supports the repeatable layer so every project can focus on identity, content and experience.

- Portfolio: [nadia.dev](https://nadia.dev)
- GitHub: [github.com/micazoyolli](https://github.com/micazoyolli)
- NPM: [@micazoyolli/foundation](https://www.npmjs.com/package/@micazoyolli/foundation)
