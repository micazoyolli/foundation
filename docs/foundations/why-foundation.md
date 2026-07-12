# Por qué Foundation

Foundation resuelve un problema muy específico: varios proyectos independientes estaban repitiendo la misma mecánica base con nombres, estilos y decisiones ligeramente distintas.

## Qué problema resuelve

- Breakpoints y escalas SCSS repetidas.
- Helpers pequeños como `cx` duplicados.
- Protección de media aplicada de formas inconsistentes.
- Metadata, canonical, sitemap y HTML estático resueltos varias veces.
- Primitivas de focus, Escape y scroll lock copiadas entre modales, drawers y overlays.

## Por qué nació

Nació después de validar esos patrones en proyectos reales. No empezó como una librería aspiracional; se extrajo cuando la repetición ya era clara y el costo de mantener cada copia era mayor que el costo de una API pequeña.

## Qué contiene

<div class="principle-grid">
  <div class="principle-card"><strong>SCSS base</strong><span>Spacing, radius, z-index, motion, breakpoints y mixins.</span></div>
  <div class="principle-card"><strong>TypeScript</strong><span><code>cx</code>, guards, DOM targets y teclado.</span></div>
  <div class="principle-card"><strong>Accessibility</strong><span>Focus, Escape, scroll lock, media protegida y selectors.</span></div>
  <div class="principle-card"><strong>SEO & Build</strong><span>Canonical, sitemap, HTML metadata y escaping.</span></div>
</div>

## Qué no intenta ser

Foundation no es un framework, no es un Design System visual y no es una librería de componentes. Tampoco conoce dominios, rutas, metadata específica, logos, colores finales o decisiones de negocio.

## Beneficio real

Ayuda a que cada proyecto tenga menos código accidental y más código propio. La marca, el contenido y la UI siguen viviendo en cada repo; Foundation solo sostiene la parte que ya demostró ser común.
