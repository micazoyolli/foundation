# Getting Started

`@micazoyolli/foundation` es la base no visual del ecosistema Micazoyolli. Su objetivo es compartir fundamentos pequenos, estables y reutilizables entre repos independientes sin introducir componentes React, estilos de marca ni decisiones de producto.

## Que incluye

- Tokens SCSS base: breakpoints, spacing, radius, z-index y motion.
- Mixins SCSS pequenos para responsive y reduced motion.
- Helpers TypeScript para clases, DOM, teclado, media protegida y guards.
- Helpers SEO/build para sitemap, canonical, HTML estatico y escaping.

## Cuando usar foundation

Usalo cuando una utilidad:

- ya se repite entre varios proyectos;
- no depende de una marca, layout o componente especifico;
- puede documentarse con reglas claras;
- reduce deuda tecnica sin ocultar comportamiento importante;
- es estable y dificilmente cambiara por una decision visual.

## Cuando NO usar foundation

No lo uses para:

- componentes React visuales;
- botones, cards, layouts o grids de marca;
- tokens de color o tipografia finales;
- metadata especifica de un sitio;
- reglas de negocio;
- helpers usados en un solo proyecto;
- abstracciones que hagan mas dificil leer el codigo local.

## Instalacion rapida

```bash
yarn add @micazoyolli/foundation
```

## Uso TypeScript

```ts
import { cx, isElement } from '@micazoyolli/foundation';

const className = cx('button', isActive && 'button--active');

if (isElement(event.target)) {
  event.target.closest('[data-protected-media]');
}
```

## Uso SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.section {
  padding: foundation.$space-6;

  @include foundation.down(foundation.$breakpoint-md) {
    padding: foundation.$space-4;
  }
}
```

## Proyectos que ya lo usan

- TeInvitaASu Invitaciones
- TeInvitaASu.Party
- Micazoyolli
- Estilo Natura
- OhMamaMXX
- WTFashion

## Siguiente lectura

- [Installation](./installation.md)
- [SCSS: breakpoints](./scss/breakpoints.md)
- [TypeScript: SEO/build](./typescript/seo.md)
- [Roadmap](./roadmap.md)
