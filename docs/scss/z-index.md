# SCSS: Z-index

La escala de z-index evita números mágicos en capascomúnes como headers, overlays, modales y toasts.

| Token | Valor | Uso esperado |
| --- | --- | --- |
| `$z-base` | `0` | Capa normal |
| `$z-raised` | `1` | Elementos elevados locales |
| `$z-sticky` | `10` | Sticky dentro de layout |
| `$z-header` | `100` | Headers o navegación fija |
| `$z-overlay` | `1000` | Backdrops y overlays |
| `$z-modal` | `1100` | Modales y drawers |
| `$z-toast` | `1200` | Mensajes temporales |

## Resultado visual

<div class="visual-card">
  <div class="z-scale-demo">
    <div class="z-scale-row"><span class="z-scale-chip">$z-base · 0</span><span class="z-scale-level"></span><span class="z-scale-note">contenido base</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-raised · 1</span><span class="z-scale-level"></span><span class="z-scale-note">contenido elevado</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-header · 100</span><span class="z-scale-level"></span><span class="z-scale-note">header/sticky</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-overlay · 1000</span><span class="z-scale-level"></span><span class="z-scale-note">overlay</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-modal · 1100</span><span class="z-scale-level"></span><span class="z-scale-note">modal/drawer</span></div>
    <div class="z-scale-row"><span class="z-scale-chip">$z-toast · 1200</span><span class="z-scale-level"></span><span class="z-scale-note">toast</span></div>
  </div>
</div>

## Import

```scss
@use '@micazoyolli/foundation/scss' as foundation;
```

## Uso correcto

```scss
.modal {
  z-index: foundation.$z-modal;
}
```

## Cuándo usarlo

- Cuando la capa escomún y semántica.
- Cuando quieres evitar `999999`.
- Cuando el componente no vive dentro de un stacking context especial.

## Cuándo no usarlo

- Para tapar bugs sin revisar `position`, `transform` u `overflow`.
- Para componentes con una escala local propia.

Archivo/export relacionado:
[src/scss/tokens/_z-index.scss](https://github.com/micazoyolli/foundation/blob/main/src/scss/tokens/_z-index.scss)
