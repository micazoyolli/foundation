# SCSS: Mixins

Foundation expone mixins pequenos para responsive y motion. No incluyen estilos visuales.

## `down($breakpoint)`

### Que hace

Genera `@media (max-width: $breakpoint)`.

### Cuando usarlo

Para ajustes mobile/tablet donde el layout cambia por debajo de un ancho.

### Cuando NO usarlo

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

### Que hace

Genera `@media (min-width: $breakpoint)`.

### Cuando usarlo

Para progressive enhancement desde mobile hacia desktop.

### Cuando NO usarlo

Cuando un estilo base simple ya resuelve el caso sin media query.

### Parametros

- `$breakpoint`: ancho minimo CSS.

### Valor de retorno

Un media query con el bloque `@content`.

### Ejemplo

```scss
@include foundation.up(foundation.$breakpoint-lg) {
  max-width: 1120px;
}
```

## `between($min-breakpoint, $max-breakpoint)`

### Que hace

Genera un media query entre dos anchos.

### Cuando usarlo

Para ajustes especificos de tablet o rangos intermedios.

### Cuando NO usarlo

Cuando se puede resolver con estilos fluidos, `clamp()` o grid responsive.

### Parametros

- `$min-breakpoint`: ancho minimo.
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

## Proyectos que ya los usan

- TeInvitaASu Invitaciones.
- TeInvitaASu.Party.
- Micazoyolli.
- Estilo Natura.
- OhMamaMXX.
