# Por que Foundation

Foundation resuelve un problema muy especifico: varios proyectos independientes estaban repitiendo la misma mecanica base con nombres, estilos y decisiones ligeramente distintas.

## Que problema resuelve

- Breakpoints y escalas SCSS repetidas.
- Helpers pequeños como `cx` duplicados.
- Proteccion de media aplicada de formas inconsistentes.
- Metadata, canonical, sitemap y HTML estatico resueltos varias veces.
- Primitivas de focus, Escape y scroll lock copiadas entre modales, drawers y overlays.

## Por que nacio

Nacio despues de validar esos patrones en proyectos reales. No empezo como una libreria aspiracional; se extrajo cuando la repeticion ya era clara y el costo de mantener cada copia era mayor que el costo de una API pequeña.

## Que contiene

<div class="principle-grid">
  <div class="principle-card"><strong>SCSS base</strong><span>Spacing, radius, z-index, motion, breakpoints y mixins.</span></div>
  <div class="principle-card"><strong>TypeScript</strong><span><code>cx</code>, guards, DOM targets y teclado.</span></div>
  <div class="principle-card"><strong>Accessibility</strong><span>Focus, Escape, scroll lock, media protegida y selectors.</span></div>
  <div class="principle-card"><strong>SEO & Build</strong><span>Canonical, sitemap, HTML metadata y escaping.</span></div>
</div>

## Que no intenta ser

Foundation no es un framework, no es un Design System visual y no es una libreria de componentes. Tampoco conoce dominios, rutas, metadata especifica, logos, colores finales o decisiones de negocio.

## Beneficio real

Ayuda a que cada proyecto tenga menos codigo accidental y mas codigo propio. La marca, el contenido y la UI siguen viviendo en cada repo; Foundation solo sostiene la parte que ya demostro ser comun.
