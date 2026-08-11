# Installation

## Requirements

- Node `24.18.1`, with compatible range `>=24.18.1 <25`.
- Yarn `1.22.22`.
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
