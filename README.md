# @micazoyolli/foundation

Fundamentos compartidos no visuales para los proyectos de Micazoyolli.

`@micazoyolli/foundation` centraliza utilidades pequenas y estables que ya se repiten entre repos independientes: tokens SCSS base, mixins responsive, helpers TypeScript, accesibilidad ligera y utilidades SEO/build. No incluye React, componentes visuales, tokens de marca, layouts ni metadata especifica de ningun proyecto.

## Instalacion

```bash
yarn add @micazoyolli/foundation
```

## Entrypoints

TypeScript:

```ts
import { cx, getCanonicalUrl } from '@micazoyolli/foundation';
```

SCSS:

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

## Documentacion

### Primeros pasos

- [Getting Started](./docs/getting-started.md)
- [Installation](./docs/installation.md)

### SCSS

- [Breakpoints](./docs/scss/breakpoints.md)
- [Spacing](./docs/scss/spacing.md)
- [Motion](./docs/scss/motion.md)
- [Mixins](./docs/scss/mixins.md)

### TypeScript

- [DOM y accesibilidad](./docs/typescript/dom.md)
- [SEO y build](./docs/typescript/seo.md)
- [Utils](./docs/typescript/utils.md)

### Proyecto

- [Changelog](./docs/changelog.md)
- [Roadmap](./docs/roadmap.md)

## Que incluye

- Tokens SCSS base para spacing, radius, z-index, motion y breakpoints.
- Mixins SCSS para responsive y reduced motion.
- `cx` para composicion simple de clases.
- Guards TypeScript pequenos.
- Helpers DOM/a11y para targets, teclado y media protegida.
- Helpers DOM/a11y para foco, scroll lock, Escape y focus trap.
- Helpers SEO/build para escaping, canonical, sitemap, metadata DOM y HTML estatico.

## Que NO incluye

- Componentes React.
- Botones, cards, layouts o grids visuales.
- Tokens finales de marca, color o tipografia.
- Metadata especifica de proyectos.
- Logica de negocio.
- Dependencias UI pesadas.

## Scripts

```bash
yarn install
yarn build
yarn clean
yarn prepack
```

## Proyectos que ya lo consumen

- TeInvitaASu Invitaciones
- TeInvitaASu.Party
- Micazoyolli
- Estilo Natura
- OhMamaMXX
- WTFashion

## Autora

Una creacion de [`<micazoyolli />`](https://nadia.dev)
