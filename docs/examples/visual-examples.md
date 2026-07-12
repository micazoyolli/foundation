# Ejemplos visuales

Estos ejemplos muestran el resultado esperado al usar las APIs reales de Foundation. No son componentes exportados.

## Spacing scale

Import:

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

<div class="visual-card">
  <div class="space-demo"><span>$space-1</span><div class="space-box" style="width: 0.25rem"></div></div>
  <div class="space-demo"><span>$space-2</span><div class="space-box" style="width: 0.5rem"></div></div>
  <div class="space-demo"><span>$space-4</span><div class="space-box" style="width: 1rem"></div></div>
  <div class="space-demo"><span>$space-6</span><div class="space-box" style="width: 2rem"></div></div>
  <div class="space-demo"><span>$space-8</span><div class="space-box" style="width: 4rem"></div></div>
</div>

Cuándo usarlo: gaps, padding y margins base. Cuándo no: ajustes opticos propios de una marca.

Archivo/export relacionado:
[src/scss/tokens/_spacing.scss](https://github.com/micazoyolli/foundation/blob/main/src/scss/tokens/_spacing.scss)

## Radius

<div class="visual-grid">
  <div class="visual-card"><p><code>$radius-xs</code></p><div class="radius-sample" style="border-radius: 4px"></div></div>
  <div class="visual-card"><p><code>$radius-md</code></p><div class="radius-sample" style="border-radius: 8px"></div></div>
  <div class="visual-card"><p><code>$radius-xl</code></p><div class="radius-sample" style="border-radius: 16px"></div></div>
  <div class="visual-card"><p><code>$radius-pill</code></p><div class="radius-sample" style="border-radius: 999px"></div></div>
</div>

Retorno: variables SCSS compiladas a CSS.

Archivo/export relacionado:
[src/scss/tokens/_radius.scss](https://github.com/micazoyolli/foundation/blob/main/src/scss/tokens/_radius.scss)

## Breakpoints

<div class="breakpoint-demo">
  <div class="breakpoint-track"></div>
  <div class="breakpoint-labels">
    <span>xs 320</span>
    <span>sm 425</span>
    <span>md 768</span>
    <span>lg 1024</span>
    <span>xl 1280</span>
  </div>
</div>

```scss
@include foundation.down(foundation.$breakpoint-md) {
  grid-template-columns: 1fr;
}
```

Compatibilidad: Sass en Vite, Next.js, Vue, Angular y Astro.

## Z-index

<div class="visual-card z-demo">
  <div class="z-layer base">$z-base</div>
  <div class="z-layer overlay">$z-overlay</div>
  <div class="z-layer modal">$z-modal</div>
</div>

Accesibilidad: z-index no debe ocultar contenido enfocable detras de overlays activos.

## Motion y reduced motion

<div class="visual-card">
  <p>Pasa el cursor sobre el bloque. Si tu sistema usa movimiento reducido, el desplazamiento se cancela.</p>
  <div class="motion-demo"></div>
</div>

```scss
.motion-demo {
  transition: transform foundation.$duration-base foundation.$ease-standard;

  @include foundation.reduced-motion {
    transition: none;
  }
}
```

## Focus visible

Foundation no exporta estilos globales de focus. Documenta el criterio: el proyecto debe mantener un foco visible y contrastado.

<div class="visual-card">
  <a class="focus-demo" href="#focus-visible">Enfocame con Tab</a>
</div>

## Visually hidden

Foundation no exporta una clase `.sr-only`; por ahora el patron queda documentado para proyectos que lo necesiten localmente.

<div class="visually-hidden-demo">
  <p><strong>Visible:</strong> boton con icono.</p>
  <p><strong>Oculto para vista, disponible para lector:</strong> texto descriptivo local.</p>
</div>

## Protected media

```ts
import { isProtectedMediaTarget } from '@micazoyolli/foundation';
```

<div class="visual-card protected-media-demo">
  <div class="protected-media-thumb" data-protected-media>IMG</div>
  <p>La proteccion se aplica al elemento marcado, no a toda la pagina.</p>
</div>

## Canonical y metadata

```ts
import { getCanonicalUrl, upsertMeta } from '@micazoyolli/foundation';

const canonical = getCanonicalUrl('https://nadia.dev', '/en/about');
upsertMeta('meta[name="description"]', {
  name: 'description',
  content: 'Frontend portfolio by Nadia.',
});
```

<div class="metadata-preview">
  <div class="metadata-preview-image">@micazoyolli/foundation</div>
  <div class="metadata-preview-body">
    <strong>Foundation documentation</strong>
    <p>Canonical, Open Graph y Twitter metadata siguen viviendo en cada proyecto.</p>
  </div>
</div>

## Sitemap generation

```ts
import { buildSitemapXml } from '@micazoyolli/foundation';

const xml = buildSitemapXml([
  { loc: 'https://foundation.nadia.dev/' },
]);
```

<div class="visual-card sitemap-demo">
  &lt;url&gt;<br />
  &nbsp;&nbsp;&lt;loc&gt;https://foundation.nadia.dev/&lt;/loc&gt;<br />
  &lt;/url&gt;
</div>

## Focus management y scroll lock

```ts
import {
  lockBodyScroll,
  restoreFocus,
  trapTabKey,
  unlockBodyScroll,
} from '@micazoyolli/foundation';
```

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel">
    <strong>Overlay demo</strong>
    <p>El patron conserva foco, bloquea scroll de fondo y permite Escape.</p>
    <button class="focus-demo">Cerrar</button>
  </div>
</div>
