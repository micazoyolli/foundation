# SCSS: Z-index

La escala de z-index evita numeros magicos en capas comunes como headers, overlays, modales y toasts.

| Token | Valor | Uso esperado |
| --- | --- | --- |
| `$z-base` | `0` | Capa normal |
| `$z-raised` | `1` | Elementos elevados locales |
| `$z-sticky` | `10` | Sticky dentro de layout |
| `$z-header` | `100` | Headers o navegacion fija |
| `$z-overlay` | `1000` | Backdrops y overlays |
| `$z-modal` | `1100` | Modales y drawers |
| `$z-toast` | `1200` | Mensajes temporales |

## Resultado visual

<div class="visual-card z-demo">
  <div class="z-layer base">$z-base</div>
  <div class="z-layer overlay">$z-overlay</div>
  <div class="z-layer modal">$z-modal</div>
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

- Cuando la capa es comun y semantica.
- Cuando quieres evitar `999999`.
- Cuando el componente no vive dentro de un stacking context especial.

## Cuándo no usarlo

- Para tapar bugs sin revisar `position`, `transform` u `overflow`.
- Para componentes con una escala local propia.

Archivo/export relacionado:
[src/scss/tokens/_z-index.scss](https://github.com/micazoyolli/foundation/blob/main/src/scss/tokens/_z-index.scss)
