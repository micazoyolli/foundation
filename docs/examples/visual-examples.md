# Visual examples

Estos ejemplos muestran como se comportan los tokens base. No son componentes exportados por foundation.

## Spacing

Archivo/export relacionado:
[src/scss/tokens/_spacing.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/tokens/_spacing.scss)

<div class="visual-card">
  <div class="space-demo"><span>$space-1</span><div class="space-box" style="width: 0.25rem"></div></div>
  <div class="space-demo"><span>$space-2</span><div class="space-box" style="width: 0.5rem"></div></div>
  <div class="space-demo"><span>$space-4</span><div class="space-box" style="width: 1rem"></div></div>
  <div class="space-demo"><span>$space-6</span><div class="space-box" style="width: 2rem"></div></div>
  <div class="space-demo"><span>$space-8</span><div class="space-box" style="width: 4rem"></div></div>
</div>

## Radius

Archivo/export relacionado:
[src/scss/tokens/_radius.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/tokens/_radius.scss)

<div class="visual-grid">
  <div class="visual-card"><p><code>$radius-xs</code></p><div class="radius-sample" style="border-radius: 4px"></div></div>
  <div class="visual-card"><p><code>$radius-md</code></p><div class="radius-sample" style="border-radius: 8px"></div></div>
  <div class="visual-card"><p><code>$radius-xl</code></p><div class="radius-sample" style="border-radius: 16px"></div></div>
  <div class="visual-card"><p><code>$radius-pill</code></p><div class="radius-sample" style="border-radius: 999px"></div></div>
</div>

## Breakpoints

Archivo/export relacionado:
[src/scss/tokens/_breakpoints.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/tokens/_breakpoints.scss)

<div class="visual-card">
  <div class="breakpoint-bar"></div>
</div>

## Motion

Archivo/export relacionado:
[src/scss/tokens/_motion.scss](https://github.com/micazoyolli/foundation/blob/master/src/scss/tokens/_motion.scss)

<div class="visual-card">
  <p>Pasa el cursor sobre el bloque.</p>
  <div class="motion-demo"></div>
</div>

```scss
.motion-demo {
  transition: transform foundation.$duration-base foundation.$ease-standard;
}
```

## Focus states

Archivo/export relacionado:
[src/a11y/focus.ts](https://github.com/micazoyolli/foundation/blob/master/src/a11y/focus.ts)

<div class="visual-card">
  <a class="focus-demo" href="#focus-states">Enfocame con Tab</a>
</div>

```css
:focus-visible {
  outline: 3px solid #ffb703;
  outline-offset: 3px;
}
```

Foundation no exporta estilos de focus; el ejemplo documenta el criterio esperado para proyectos consumidores.
