# Architecture

The package separates SCSS foundations, TypeScript utilities, accessibility and SEO/build helpers.

```txt
src/
  a11y/
  scss/
    mixins/
    tokens/
  seo/
  utils/
```

## Public entry points

```ts
import { cx, buildSitemapXml } from '@micazoyolli/foundation';
```

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

## Internal rules

- Do not import React.
- Do not read environment variables.
- Do not know project domains or routes.
- Do not add global state.
- Prefer pure functions when possible.
- Accept `documentRef` in DOM helpers for tests and decoupling.

Related exports:
[src/index.ts](https://github.com/micazoyolli/foundation/blob/main/src/index.ts) and [src/scss/index.scss](https://github.com/micazoyolli/foundation/blob/main/src/scss/index.scss)
