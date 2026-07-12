---
layout: home

hero:
  name: '@micazoyolli/foundation'
  text: La base tecnica detras del ecosistema frontend de Nadia.
  tagline: Tokens SCSS, helpers TypeScript, primitivas DOM, accesibilidad y SEO/build para proyectos reales, sin React, sin marca y sin componentes visuales.
  image:
    src: /foundation-mark.svg
    alt: Foundation mark
  actions:
    - theme: brand
      text: Empezar
      link: /getting-started/
    - theme: alt
      text: Ver documentacion
      link: /foundations/why-foundation

features:
  - title: Pequena
    details: Incluye solo fundamentos probados en proyectos reales. Nada de abstracciones por si acaso.
    link: /foundations/philosophy
  - title: Agnostica
    details: Funciona con React, Vue, Angular, Astro, Vite, Next.js y scripts Node segun el tipo de helper.
    link: /foundations/compatibility
  - title: Accesible
    details: Incluye primitivas DOM para focus, Escape, scroll lock y media protegida selectiva.
    link: /typescript/accessibility
  - title: Lista para build
    details: Ayuda con canonical, sitemap, metadata HTML y rutas estaticas sin conocer tu marca.
    link: /typescript/seo
---

<p class="foundation-kicker">created by Nadia</p>

## Que es Foundation

`@micazoyolli/foundation` es una capa de fundamentos no visuales para mantener consistentes repos independientes. Nacio de necesidades repetidas en produccion: componer clases, compartir breakpoints, proteger media sin bloquear toda la pagina, manejar metadata y generar HTML/sitemaps estaticos.

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
    <strong>Version actual</strong>
    <p><code>0.3.0</code></p>
  </div>
  <div class="foundation-card">
    <strong>NPM</strong>
    <p><a href="https://www.npmjs.com/package/@micazoyolli/foundation" target="_blank" rel="noreferrer">npmjs.com/package/@micazoyolli/foundation</a></p>
  </div>
  <div class="foundation-card">
    <strong>GitHub</strong>
    <p><a href="https://github.com/micazoyolli/foundation" target="_blank" rel="noreferrer">github.com/micazoyolli/foundation</a></p>
  </div>
</div>

## Relacion con Nadia.dev

Foundation forma parte del ecosistema tecnico de Nadia. Comparte su cuidado por interfaces expresivas y codigo mantenible, pero su identidad es la de una libreria base: sobria, documentada y lista para otros proyectos.

- Portafolio: [nadia.dev](https://nadia.dev)
- GitHub: [github.com/micazoyolli](https://github.com/micazoyolli)
- NPM: [@micazoyolli/foundation](https://www.npmjs.com/package/@micazoyolli/foundation)
