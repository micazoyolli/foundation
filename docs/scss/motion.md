# SCSS: Motion

Los tokens de motion definen duraciones, easings y un mixin para `prefers-reduced-motion`.

## Tokens

| Token | Valor |
| --- | --- |
| `$duration-instant` | `75ms` |
| `$duration-fast` | `150ms` |
| `$duration-base` | `250ms` |
| `$duration-slow` | `400ms` |
| `$ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `$ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` |
| `$ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |

## Mixin `reduced-motion`

```scss
@include foundation.reduced-motion {
  animation: none;
}
```

### Qué hace

Envuelve reglas dentro de `@media (prefers-reduced-motion: reduce)`.

### Cuándo usarlo

- En animaciones decorativas.
- En transiciones largas.
- En efectos de entrada, parallax o desplazamientos.

### Cuándo no usarlo

- Para ocultar cambios de estado importantes.
- Para eliminar feedback esencial sin alternativa.
- Para animaciones ya controladas por JS con su propia capa de accesibilidad.

### Parametros

No recibe parámetros. Usa `@content`.

### Valor de retorno

Genera un media query CSS.

## Ejemplo real

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.card {
  transition: transform foundation.$duration-base foundation.$ease-standard;

  &:hover {
    transform: translateY(-2px);
  }

  @include foundation.reduced-motion {
    transition: none;
    transform: none;
  }
}
```

## Resultado visual

<div class="visual-card">
  <p>Pasa el cursor sobre el bloque. Si tu sistema usa movimiento reducido, el desplazamiento se cancela.</p>
  <div class="motion-demo"></div>
</div>

## Consideraciones

Respeta `prefers-reduced-motion`. No elimines feedback esencial sin una alternativa visible.
