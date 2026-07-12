# TypeScript: Utils

## `cx(...classes)`

### Qué hace

Compone clases CSS filtrando valores falsy.

### Cuándo usarlo

- Para clases condicionales simples.
- Para evitar arrays manuales con `.filter(Boolean).join(' ')`.
- En proyectos donde no se quiere agregar una dependencia como `clsx`.

### Cuándo no usarlo

- Si necesitas objetos `{ active: true }`.
- Si necesitas deduplicación de clases Tailwind.
- Si la expresión se vuelve difícil de leer.

### Parametros

- `...classes: Array<string | false | null | undefined>`

### Valor de retorno

`string`

### Ejemplo real

```ts
import { cx } from '@micazoyolli/foundation';

const className = cx(
  'menuItem',
  isActive && 'menuItemActive',
  isDisabled && 'menuItemDisabled',
);
```

## `ClassValue`

Tipo de entrada aceptado por `cx`.

```ts
type ClassValue = string | false | null | undefined;
```

## `isNonEmptyString(value)`

### Qué hace

Verifica que un valor sea string y que `trim()` tenga contenido.

### Cuándo usarlo

- Para validar valores opcionales simples.
- Antes de construir atributos o rutas con strings externos.

### Cuándo no usarlo

- Para validar formularios complejos.
- Para validaciónes con mensajes de error de usuario.
- Para normalizar contenido con reglas de negocio.

### Parametros

- `value: unknown`

### Valor de retorno

`value is string`

### Ejemplo

```ts
import { isNonEmptyString } from '@micazoyolli/foundation';

function getLabel(value: unknown) {
  return isNonEmptyString(value) ? value.trim() : 'Sin titulo';
}
```

## Uso en producción

Foundation se utiliza como base compartida en sitios de producción, aplicaciones de negocio y experiencias interactivas.
