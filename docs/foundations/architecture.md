# Architecture

El paquete separa fundamentos SCSS, utilidades TypeScript, accesibilidad y SEO/build.

## Estructura

```txt
src/
  a11y/
  scss/
    mixins/
    tokens/
  seo/
  utils/
```

## Entry points públicos

TypeScript:

```ts
import { cx, buildSitemapXml } from '@micazoyolli/foundation';
```

SCSS:

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

## Exports

Los exports públicos viven en:

- [src/index.ts](https://github.com/micazoyolli/foundation/blob/master/src/index.ts)
- [src/scss/index.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/index.scss)

## Reglas internas

- No importar React.
- No leer variables de entorno.
- No conocer dominios o rutas de proyectos.
- No agregar estado global.
- Preferir funciones puras cuando sea posible.
- Aceptar `documentRef` en helpers DOM para testear y desacoplar.
