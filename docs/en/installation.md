# Installation

## Requirements

- Node `24.x` recommended for the docs site and current ecosystem builds.
- Yarn 1 in the current repositories.
- Sass if you consume the SCSS entry point.

## Install

```bash
yarn add @micazoyolli/foundation
```

## TypeScript import

```ts
import { cx, getCanonicalUrl } from '@micazoyolli/foundation';
```

The package has no runtime dependencies and does not include React.

## SCSS import

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

The SCSS entry point exposes tokens and mixins through `@forward`.

## Minimal validation

```bash
yarn install
yarn build
yarn smoke
```
