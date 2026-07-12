---
layout: home

hero:
  name: '@micazoyolli/foundation'
  text: Fundamentos no visuales para el ecosistema Micazoyolli.
  tagline: Tokens base, helpers SCSS, utilidades TypeScript, accesibilidad y SEO/build sin React ni datos de marca.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started/
    - theme: alt
      text: Start a new project
      link: /getting-started/start-a-new-project

features:
  - title: Foundations
    details: Filosofia, arquitectura, versionado, naming y limites claros del paquete.
    link: /foundations/philosophy
  - title: Utilities
    details: cx, guards, DOM, accesibilidad, SEO/build y helpers client-side.
    link: /utilities/typescript
  - title: Patterns
    details: Patrones correctos para adoptar foundation sin sobreabstraer.
    link: /patterns/dos-and-donts
  - title: Examples
    details: Ejemplos visuales de spacing, radius, breakpoints, motion y focus states.
    link: /examples/visual-examples
---

## Que es

`@micazoyolli/foundation` es una base compartida no visual. Vive fuera de los proyectos consumidores para que repos independientes puedan reutilizar fundamentos estables sin compartir componentes de marca.

## Que no es

No es una libreria UI, no contiene componentes React, no define identidad visual final y no guarda metadata especifica de ningun proyecto.

## Entry points

```ts
import { cx, getCanonicalUrl } from '@micazoyolli/foundation';
```

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```
