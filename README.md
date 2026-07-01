# @micazoyolli/foundation

Paquete privado de fundamentos compartidos no visuales para los proyectos de Micazoyolli. Centraliza utilidades pequeñas y estables para mantener consistencia entre repos independientes sin introducir componentes visuales ni decisiones de marca.

## Características

- Tokens SCSS base para spacing, radius, z-index y motion
- Breakpoints y mixins responsive reutilizables
- Helper `cx` para composición segura de clases
- Guards TypeScript pequeños para validaciones comunes
- Utilidades básicas de accesibilidad y protección selectiva de media
- Exports separados para TypeScript y SCSS
- Consumo desde GitHub mediante tags versionados

## Tecnologías

- TypeScript
- SCSS
- Yarn 1
- GitHub tags

## Estructura

```txt
src/
├── a11y/
├── scss/
│   ├── mixins/
│   └── tokens/
├── utils/
└── index.ts

examples/
dist/
```

## Scripts

```bash
yarn install
yarn build
yarn clean
yarn prepack
```

## Instalación

Desde GitHub usando un tag estable:

```bash
yarn add git+ssh://git@github.com/micazoyolli/foundation.git#v0.1.0
```

Cuando exista un registry privado, el consumo podrá cambiar a:

```bash
yarn add @micazoyolli/foundation
```

## Uso

TypeScript:

```ts
import { cx, isElement } from '@micazoyolli/foundation';

const className = cx('button', isActive && 'button--active');

if (isElement(event.target)) {
  event.target.closest('[data-protected-media]');
}
```

SCSS:

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

## Buenas prácticas

- Mantener el paquete pequeño y estrictamente no visual
- Evitar tokens de marca, layouts, componentes React, SEO o tipografías finales
- Publicar cambios mediante tags versionados
- Exportar solo utilidades compartibles entre repos independientes
- Evitar dependencias UI pesadas
- Adoptar el paquete gradualmente en cada proyecto

## Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
