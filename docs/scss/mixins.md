# SCSS: Mixins

Foundation expone mixins pequeños para responsive y motion. No incluyen estilos visuales.

## `down($breakpoint)`

### Qué hace

Genera `@media (max-width: $breakpoint)`.

### Cuándo usarlo

Para ajustes mobile/tablet donde el layout cambia por debajo de un ancho.

### Cuándo no usarlo

Cuando el componente deberia responder al tamano de su contenedor.

### Parametros

- `$breakpoint`: ancho maximo CSS, normalmente un token como `$breakpoint-md`.

### Valor de retorno

Un media query con el bloque `@content`.

### Ejemplo

```scss
@include foundation.down(foundation.$breakpoint-md) {
  display: block;
}
```

## `up($breakpoint)`

### Qué hace

Genera `@media (min-width: $breakpoint)`.

### Cuándo usarlo

Para progressive enhancement desde mobile hacia desktop.

### Cuándo no usarlo

Cuando un estilo base simple ya resuelve el caso sin media query.

### Parametros

- `$breakpoint`: ancho mínimo CSS.

### Valor de retorno

Un media query con el bloque `@content`.

### Ejemplo

```scss
@include foundation.up(foundation.$breakpoint-lg) {
  max-width: 1120px;
}
```

## `between($min-breakpoint, $max-breakpoint)`

### Qué hace

Genera un media query entre dos anchos.

### Cuándo usarlo

Para ajustes específicos de tablet o rangos intermedios.

### Cuándo no usarlo

Cuando se puede resolver con estilos fluidos, `clamp()` o grid responsive.

### Parametros

- `$min-breakpoint`: ancho mínimo.
- `$max-breakpoint`: ancho maximo.

### Valor de retorno

Un media query con el bloque `@content`.

### Ejemplo

```scss
@include foundation.between(foundation.$breakpoint-md, foundation.$breakpoint-lg) {
  grid-template-columns: repeat(2, 1fr);
}
```

## `reduced-motion`

Documentado en [motion](./motion.md).

## Uso en producción

Foundation se utiliza como base compartida en sitios de producción, aplicaciones de negocio y experiencias interactivas.
