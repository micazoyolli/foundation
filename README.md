# @micazoyolli/foundation

[![npm version](https://img.shields.io/npm/v/@micazoyolli/foundation.svg)](https://www.npmjs.com/package/@micazoyolli/foundation)
[![license](https://img.shields.io/npm/l/@micazoyolli/foundation.svg)](./LICENSE)

Fundamentos frontend no visuales para construir repos independientes con una base técnica consistente.

Foundation centraliza mecánicas pequeñas que se repiten entre proyectos: tokens SCSS base, mixins responsive, helpers TypeScript, primitivas DOM de accesibilidad y helpers para SEO/build. No incluye React, componentes visuales, tokens de marca, layouts ni metadata específica.

## Documentación

La documentación principal vive en [foundation.nadia.dev](https://foundation.nadia.dev). Ahí está la guía completa, arquitectura, ejemplos, compatibilidad y referencia de la API.

## Características

- Tokens SCSS base: spacing, radius, z-index, motion y breakpoints.
- Mixins SCSS para responsive y reduced motion.
- `cx` y guards TypeScript pequeños.
- Helpers DOM para metadata client-side.
- Primitivas de accesibilidad para focus, Escape, scroll lock y media protegida.
- Helpers SEO/build para canonical, sitemap, HTML estático y escaping.
- CLI de build para publicar `dist` en GitHub Pages sin crear commits en la rama fuente.
- Sin dependencias runtime pesadas y sin React.

## Instalación

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

## Compatibilidad

Foundation es independiente del framework y puede usarse con React, Next.js, Vue, Angular, Astro, Vite y Node según el helper utilizado.

## Recursos

- Documentación: [foundation.nadia.dev](https://foundation.nadia.dev)
- GitHub: [github.com/micazoyolli/foundation](https://github.com/micazoyolli/foundation)
- npm: [npmjs.com/package/@micazoyolli/foundation](https://www.npmjs.com/package/@micazoyolli/foundation)

## Ecosistema

Foundation forma parte del ecosistema técnico de [`<micazoyolli />`](https://nadia.dev). La librería sostiene las piezas repetibles para que cada proyecto pueda conservar su propia identidad visual, contenido y experiencia.

## Scripts

```bash
yarn build
yarn test
yarn docs:build
```

## CLI

```bash
micazoyolli-gh-pages-deploy
```

El CLI publica `dist` en `origin/gh-pages` desde un worktree temporal. Es tooling de build/deploy, no un export runtime.

## Autoría

Una creación de [`<micazoyolli />`](https://nadia.dev)

## Licencia

MIT
