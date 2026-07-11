# @micazoyolli/foundation

Paquete público de fundamentos compartidos no visuales para los proyectos de Micazoyolli. Centraliza utilidades pequeñas y estables para mantener consistencia entre repos independientes sin introducir componentes visuales ni decisiones de marca.

## Características

- Tokens SCSS base para spacing, radius, z-index y motion
- Breakpoints y mixins responsive reutilizables
- Helper `cx` para composición segura de clases
- Guards TypeScript pequeños para validaciones comunes
- Utilidades básicas de accesibilidad y protección selectiva de media
- Helpers SEO/build puros para HTML estático, canonical y sitemap
- Exports separados para TypeScript y SCSS
- Consumo desde npm sin credenciales especiales

## Tecnologías

- TypeScript
- SCSS
- Yarn 1
- npm

## Estructura

```txt
src/
├── a11y/
├── scss/
│   ├── mixins/
│   └── tokens/
├── seo/
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

SEO/build:

```ts
import {
  applyHtmlMetadata,
  buildSitemapXml,
  getCanonicalUrl,
} from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://example.com', '/contacto');
const html = applyHtmlMetadata(template, {
  canonical,
  title: 'Contacto',
  description: 'Hablemos de tu proyecto.',
});
const sitemap = buildSitemapXml([{ loc: canonical, priority: '0.8' }]);
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
- Evitar tokens de marca, layouts, componentes React, metadata específica o tipografías finales
- Publicar cambios mediante versiones semánticas
- Exportar solo utilidades compartibles entre repos independientes
- Evitar dependencias UI pesadas
- Adoptar el paquete gradualmente en cada proyecto

## Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
