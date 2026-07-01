# @micazoyolli/foundation

Fundamentos compartidos no visuales para los proyectos de Micazoyolli.

Este paquete contiene primitives pequeñas y estables: tokens SCSS base, mixins responsive, helpers TypeScript mínimos y utilidades básicas de accesibilidad. No incluye componentes React, tokens de marca, layouts, botones, cards, tipografías finales ni SEO.

## Instalacion

Desde GitHub, usando un tag:

```bash
yarn add git+ssh://git@github.com/micazoyolli/foundation.git#v0.1.0
```

Cuando el paquete se publique en un registry privado:

```bash
yarn add @micazoyolli/foundation
```

## Uso en TypeScript

```ts
import { cx, isElement } from '@micazoyolli/foundation';

const className = cx('button', isActive && 'button--active');

if (isElement(event.target)) {
  event.target.closest('[data-protected-media]');
}
```

## Uso en SCSS

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.section {
  padding: foundation.$space-6;
  border-radius: foundation.$radius-md;

  @include foundation.down(foundation.$breakpoint-md) {
    padding: foundation.$space-4;
  }
}
```

## Principios

- Mantener el paquete pequeno y no visual.
- Evitar nombres ligados a una marca o aplicacion concreta.
- Exportar primitives estables que puedan usarse en repos independientes.
- No introducir dependencias UI pesadas.
