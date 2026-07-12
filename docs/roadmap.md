# Roadmap

Foundation se mantiene como una base no visual. El roadmap evita crecer por inercia.

## Completado

<div class="principle-grid">
  <div class="principle-card"><strong>Foundation Core</strong><span>Entrypoints TypeScript y SCSS publicados en npm.</span></div>
  <div class="principle-card"><strong>SCSS tokens and mixins</strong><span>Spacing, radius, z-index, motion, breakpoints y responsive.</span></div>
  <div class="principle-card"><strong>TypeScript utilities</strong><span><code>cx</code>, guards y helpers pequeños.</span></div>
  <div class="principle-card"><strong>Accessibility primitives</strong><span>Focus, Escape, scroll lock, keyboard y protected media.</span></div>
  <div class="principle-card"><strong>DOM helpers</strong><span>Title, meta, canonical y alternates client-side.</span></div>
  <div class="principle-card"><strong>SEO/build helpers</strong><span>Escaping, canonical, sitemap y metadata HTML estatica.</span></div>
  <div class="principle-card"><strong>Documentation</strong><span>Sitio VitePress bilingue preparado para Render.</span></div>
</div>

## Futuro

- Atomic UI, si nace de componentes reales compartidos.
- Project generator / CLI.
- Templates de adopcion por framework.
- Mas ejemplos interactivos.

## Fuera de alcance por ahora

- Componentes React en Foundation Core.
- Tokens de marca.
- Botones, cards, layouts o grids visuales.
- SEO metadata especifica de proyectos.
- Smoke harness compartido.
- Binder de proteccion de media.
- Dependencias UI pesadas.

## Criterio para aceptar nuevos helpers

Un helper nuevo debe cumplir al menos cuatro puntos:

- se repite en varios proyectos;
- no depende de marca;
- no cambia resultado visual por si mismo;
- tiene una API facil de documentar;
- reduce codigo local;
- no agrega dependencia runtime;
- puede validarse con build o tests pequeños.
