---
layout: home
markdownStyles: false

hero:
  name: Foundation
  text: La base técnica detrás del ecosistema frontend de Nad.
  tagline: '@micazoyolli/foundation · Tokens SCSS, helpers TypeScript, primitivas DOM, accesibilidad y SEO/build para proyectos reales.'
  image:
    src: /foundation-logo.svg
    alt: Logo de Foundation
  actions:
    - theme: brand
      text: Empezar
      link: /getting-started/
    - theme: alt
      text: Documentación
      link: /foundations/why-foundation

features:
  - title: Pequeña
    details: Incluye solo fundamentos probados en proyectos reales. Nada de abstracciones por si acaso.
    link: /foundations/philosophy
  - title: Agnóstica
    details: Funciona con React, Vue, Angular, Astro, Vite, Next.js y scripts Node según el tipo de helper.
    link: /foundations/compatibility
  - title: Accesible
    details: Incluye primitivas DOM para focus, Escape, scroll lock y media protegida selectiva.
    link: /typescript/accessibility
  - title: Lista para build
    details: Ayuda con canonical, sitemap, metadata HTML y rutas estáticas sin conocer tu marca.
    link: /typescript/seo
---

## Qué es Foundation

`@micazoyolli/foundation` es la base compartida para construir el ecosistema con una misma filosofía técnica: piezas pequeñas, agnósticas a marca y extraidas de necesidades reales.

```bash
yarn add @micazoyolli/foundation
```

```ts
import { cx, getCanonicalUrl, lockBodyScroll } from '@micazoyolli/foundation';
```

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

<div class="foundation-grid">
  <div class="foundation-card">
    <strong>Versión actual</strong>
    <p><code>0.3.2</code></p>
  </div>
  <div class="foundation-card">
    <strong>NPM</strong>
    <p><a href="https://www.npmjs.com/package/@micazoyolli/foundation" target="_blank" rel="noreferrer">npmjs.com/package/@micazoyolli/foundation</a></p>
  </div>
  <div class="foundation-card">
    <strong>Licencia</strong>
    <p><code>MIT</code></p>
  </div>
  <div class="foundation-card">
    <strong>Compatibilidad</strong>
    <p>SCSS, navegador y scripts Node según el helper.</p>
  </div>
  <div class="foundation-card">
    <strong>GitHub</strong>
    <p><a href="https://github.com/micazoyolli/foundation" target="_blank" rel="noreferrer">github.com/micazoyolli/foundation</a></p>
  </div>
</div>

## Asi se construye el ecosistema

Foundation forma parte del ecosistema técnico de Nad. No compite con cada marca ni con cada interfaz: sostiene lo repetible para que cada proyecto pueda concentrarse en su identidad, contenido y experiencia.

- Portafolio: [nadia.dev](https://nadia.dev)
- GitHub: [github.com/micazoyolli](https://github.com/micazoyolli)
- NPM: [@micazoyolli/foundation](https://www.npmjs.com/package/@micazoyolli/foundation)
