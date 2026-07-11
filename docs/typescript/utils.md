# TypeScript: Utils

## `cx(...classes)`

### Que hace

Compone clases CSS filtrando valores falsy.

### Cuando usarlo

- Para clases condicionales simples.
- Para evitar arrays manuales con `.filter(Boolean).join(' ')`.
- En proyectos donde no se quiere agregar una dependencia como `clsx`.

### Cuando NO usarlo

- Si necesitas objetos `{ active: true }`.
- Si necesitas deduplicacion de clases Tailwind.
- Si la expresion se vuelve dificil de leer.

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

### Que hace

Verifica que un valor sea string y que `trim()` tenga contenido.

### Cuando usarlo

- Para validar valores opcionales simples.
- Antes de construir atributos o rutas con strings externos.

### Cuando NO usarlo

- Para validar formularios complejos.
- Para validaciones con mensajes de error de usuario.
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

## Proyectos que ya los usan

- TeInvitaASu Invitaciones.
- TeInvitaASu.Party.
- Micazoyolli.
- Estilo Natura.
- OhMamaMXX.
- WTFashion.
