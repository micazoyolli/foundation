# @micazoyolli/foundation

[![npm version](https://img.shields.io/npm/v/@micazoyolli/foundation.svg)](https://www.npmjs.com/package/@micazoyolli/foundation)
[![license](https://img.shields.io/npm/l/@micazoyolli/foundation.svg)](./LICENSE)

Fundamentos frontend no visuales para construir repos independientes con una base tecnica consistente.

Foundation centraliza mecanicas pequenas que se repiten entre proyectos: tokens SCSS base, mixins responsive, helpers TypeScript, primitivas DOM de accesibilidad y utilidades SEO/build. No incluye React, componentes visuales, tokens de marca, layouts ni metadata especifica.

## Documentacion

La documentacion completa esta en:

[https://foundation.nadia.dev](https://foundation.nadia.dev)

## Instalacion

```bash
yarn add @micazoyolli/foundation
```

## TypeScript

```ts
import { cx, getCanonicalUrl } from '@micazoyolli/foundation';

const className = cx('card', isActive && 'card--active');
const canonical = getCanonicalUrl('https://example.com', '/contacto');
```

## SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.section {
  padding-block: foundation.$space-6;

  @include foundation.down(foundation.$breakpoint-md) {
    padding-block: foundation.$space-4;
  }
}
```

## Caracteristicas

- Tokens SCSS base: spacing, radius, z-index, motion y breakpoints.
- Mixins SCSS para responsive y reduced motion.
- `cx` y guards TypeScript pequenos.
- Helpers DOM para metadata client-side.
- Primitivas de accesibilidad para focus, Escape, scroll lock y media protegida.
- Helpers SEO/build para canonical, sitemap, HTML estatico y escaping.
- Sin dependencias runtime pesadas y sin React.

## Compatibilidad

Foundation puede usarse con React, Next.js, Vue, Angular, Astro, Vite y scripts Node segun el tipo de helper. Los helpers DOM deben ejecutarse solo en navegador.

## Scripts

```bash
yarn build
yarn test
yarn docs:build
```

## Autoria

Una creacion de [`<micazoyolli />`](https://nadia.dev)
