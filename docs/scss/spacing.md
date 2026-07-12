# SCSS: Spacing

La escala de spacing define pasos base para separar elementos sin acoplarse a una marca.

## Tokens

| Token | Valor |
| --- | --- |
| `$space-0` | `0` |
| `$space-1` | `0.25rem` |
| `$space-2` | `0.5rem` |
| `$space-3` | `0.75rem` |
| `$space-4` | `1rem` |
| `$space-5` | `1.5rem` |
| `$space-6` | `2rem` |
| `$space-7` | `3rem` |
| `$space-8` | `4rem` |
| `$space-9` | `6rem` |
| `$space-10` | `8rem` |

## Qué hace

Da nombres consistentes a medidas de separacion frecuentes.

## Cuándo usarlo

- Para padding, margin y gaps no específicos de marca.
- Para evitar escalas distintas entre repos.
- Para componentes internos que no dependen de una identidad visual concreta.

## Cuándo no usarlo

- Cuando el espaciado sea parte esencial del arte visual de una invitacion o sitio.
- Cuando un componente necesita una medida optica específica.
- Cuando aplicar la escala cambie el resultado visual actual sin justificacion.

## Parametros

No recibe parámetros.

## Valor de retorno

Valores SCSS compilados a CSS.

## Ejemplo

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.toolbar {
  display: flex;
  gap: foundation.$space-3;
  padding-block: foundation.$space-4;
}
```

## Resultado visual

<div class="visual-card">
  <div class="space-demo"><span>$space-1</span><div class="space-box" style="width: 0.25rem"></div></div>
  <div class="space-demo"><span>$space-2</span><div class="space-box" style="width: 0.5rem"></div></div>
  <div class="space-demo"><span>$space-4</span><div class="space-box" style="width: 1rem"></div></div>
  <div class="space-demo"><span>$space-6</span><div class="space-box" style="width: 2rem"></div></div>
  <div class="space-demo"><span>$space-8</span><div class="space-box" style="width: 4rem"></div></div>
</div>

## Tokens relacionados: radius

Los radius son parte del entrypoint SCSS y sirven para mantener radios base consistentes sin imponer componentes visuales.

| Token | Valor |
| --- | --- |
| `$radius-none` | `0` |
| `$radius-xs` | `4px` |
| `$radius-sm` | `6px` |
| `$radius-md` | `8px` |
| `$radius-lg` | `12px` |
| `$radius-xl` | `16px` |
| `$radius-pill` | `999px` |

### Cuándo usar radius

- En superficies, inputs o controles no específicos de marca.
- Cuando un proyecto ya usa valores equivalentes.

### Cuándo no usar radius

- Si el radio forma parte de la identidad visual de una marca concreta.
- Si cambiar el valor altera la silueta visible de un componente existente.

### Ejemplo

```scss
.panel {
  border-radius: foundation.$radius-md;
}
```

### Resultado visual

<div class="visual-grid">
  <div class="visual-card"><p><code>$radius-xs</code></p><div class="radius-sample" style="border-radius: 4px"></div></div>
  <div class="visual-card"><p><code>$radius-md</code></p><div class="radius-sample" style="border-radius: 8px"></div></div>
  <div class="visual-card"><p><code>$radius-xl</code></p><div class="radius-sample" style="border-radius: 16px"></div></div>
  <div class="visual-card"><p><code>$radius-pill</code></p><div class="radius-sample" style="border-radius: 999px"></div></div>
</div>

## Compatibilidad

Sass en proyectos que consumen `@micazoyolli/foundation/scss`.

## Tokens relacionados: z-index

Los z-index definen capas genericas para evitar números mágicos.

| Token | Valor |
| --- | --- |
| `$z-base` | `0` |
| `$z-raised` | `1` |
| `$z-sticky` | `10` |
| `$z-header` | `100` |
| `$z-overlay` | `1000` |
| `$z-modal` | `1100` |
| `$z-toast` | `1200` |

### Cuándo usar z-index

- Para headers, overlays, modales y toasts con jerarquiacomún.
- Para reducir conflictos entre capas.

### Cuándo no usar z-index

- Para solucionar rapidamente un bug de stacking sin entender el contexto.
- Si el componente vive dentro de un stacking context local que necesita una escala propia.

### Ejemplo

```scss
.drawerBackdrop {
  z-index: foundation.$z-overlay;
}
```
