# Filosofia

Foundation comparte lo que ya demostro ser comun entre proyectos independientes. Su valor esta en ser pequeño, predecible y facil de quitar si algun proyecto deja de necesitarlo.

<div class="principle-grid">
  <div class="principle-card"><strong>Small</strong><span>La API crece solo cuando una necesidad aparece en varios repos reales.</span></div>
  <div class="principle-card"><strong>Composable</strong><span>Las utilidades se pueden usar solas, sin adoptar una arquitectura completa.</span></div>
  <div class="principle-card"><strong>Framework-agnostic</strong><span>No depende de React ni de un runtime visual.</span></div>
  <div class="principle-card"><strong>Accessible</strong><span>Incluye primitivas para teclado, foco y movimiento reducido cuando el patron se repite.</span></div>
  <div class="principle-card"><strong>Predictable</strong><span>Funciones pequeñas, nombres directos y comportamiento documentado.</span></div>
  <div class="principle-card"><strong>No brand assumptions</strong><span>No contiene colores finales, logos, copy, rutas ni metadata de proyectos.</span></div>
  <div class="principle-card"><strong>Built from production</strong><span>Se extrae de necesidades reales, no de componentes imaginados.</span></div>
</div>

## Pertenece a Foundation

- Tokens base: spacing, radius, z-index, motion y breakpoints.
- Mixins SCSS pequeños.
- Helpers TypeScript sin framework.
- Primitivas DOM/a11y.
- Helpers SEO/build sin datos de marca.

## No pertenece a Foundation

- Componentes React visuales.
- Botones, cards, layouts, grids o formularios finales.
- Colores, tipografia o estilos especificos de una marca.
- Metadata, rutas, imagenes OG o dominios de proyectos.
- Reglas de negocio.
- Helpers usados por un solo proyecto.

## Criterio de entrada

Una utilidad nueva debe repetirse en varios proyectos, poder documentarse con claridad y no cambiar por decisiones visuales.
