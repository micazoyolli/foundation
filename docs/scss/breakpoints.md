# SCSS: Breakpoints

Los breakpoints definen una escalacomún para responsive sin imponer layouts visuales.

## Tokens

| Token | Valor |
| --- | --- |
| `$breakpoint-xs` | `320px` |
| `$breakpoint-sm` | `425px` |
| `$breakpoint-md` | `768px` |
| `$breakpoint-lg` | `1024px` |
| `$breakpoint-xl` | `1280px` |

## Qué hacen

Centralizan puntos de corte base para mobile, tablet y desktop.

## Cuándo usarlos

- Cuando un proyecto necesita un breakpointcomún ya repetido.
- Cuando el componente no requiere un punto de corte específico por contenido.
- Cuando se quiere evitar valores mágicos como `768px` repetidos.

## Cuándo no usarlos

- Si el layout debe responder a su contenedor y conviene `container queries`.
- Si el breakpoint depende de una pieza visual única.
- Si el valor existe solo para corregir un bug puntual.

## Parametros

Los tokens no reciben parámetros. Se consumen como variables SCSS.

## Valor de retorno

No retornan valores en runtime. Compilan a valores CSS.

## Ejemplo

```scss
@use '@micazoyolli/foundation/scss' as foundation;

.gallery {
  grid-template-columns: repeat(3, 1fr);

  @include foundation.down(foundation.$breakpoint-md) {
    grid-template-columns: 1fr;
  }
}
```

## Resultado visual

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

El demo muestra la escala relativa. No implica que cada proyecto deba usar todos los cortes.

## Compatibilidad

Sass en proyectos Vite, Next.js, Vue, Angular y Astro.
