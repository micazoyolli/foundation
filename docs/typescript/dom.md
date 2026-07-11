# TypeScript: DOM y accesibilidad

Estos helpers ayudan a trabajar con eventos DOM sin casts inseguros y con patrones de accesibilidad repetidos.

## `isElement(target)`

### Que hace

Verifica si un `EventTarget | null` es una instancia de `Element`.

### Cuando usarlo

- Antes de usar `.closest()`.
- En handlers globales de eventos.
- En logica de proteccion selectiva de media.

### Cuando NO usarlo

- Si ya tienes un tipo DOM especifico garantizado por React o TypeScript.
- Para validar datos de negocio.

### Parametros

- `target: EventTarget | null`

### Valor de retorno

`target is Element`

### Ejemplo

```ts
import { isElement } from '@micazoyolli/foundation';

document.addEventListener('click', (event) => {
  if (!isElement(event.target)) return;
  event.target.closest('[data-action]');
});
```

## `isHTMLElement(target)`

### Que hace

Verifica si un target es `HTMLElement`.

### Cuando usarlo

Cuando necesitas propiedades como `dataset`, `focus()` o medidas del elemento.

### Cuando NO usarlo

Si el target puede ser SVG y necesitas conservar ese caso.

### Parametros

- `target: EventTarget | null`

### Valor de retorno

`target is HTMLElement`

## `KEYBOARD_KEYS`

### Que hace

Centraliza teclas comunes: `enter`, `space` y `escape`.

### Cuando usarlo

En handlers compartidos donde se repiten esos valores.

### Cuando NO usarlo

Para atajos complejos o mapas de teclado especificos de una app.

### Valor de retorno

Objeto constante.

## `isKeyboardActivation(event)`

### Que hace

Detecta activacion por `Enter` o `Space`.

### Parametros

- `event: Pick<KeyboardEvent, 'key'>`

### Valor de retorno

`boolean`

### Ejemplo

```ts
import { isKeyboardActivation } from '@micazoyolli/foundation';

function onKeyDown(event: KeyboardEvent) {
  if (isKeyboardActivation(event)) {
    openPanel();
  }
}
```

## `PROTECTED_MEDIA_SELECTOR`

### Que hace

Selector comun para media protegible: `img`, `svg`, `canvas`, `video` y `[data-protected-media]`.

### Cuando usarlo

En proteccion selectiva de contenido visual.

### Cuando NO usarlo

Para bloquear toda la pagina o impedir accesibilidad global.

## `isProtectedMediaTarget(target)`

### Que hace

Detecta si el target o un ancestro coincide con `PROTECTED_MEDIA_SELECTOR`.

### Parametros

- `target: EventTarget | null`

### Valor de retorno

`boolean`

### Ejemplo

```ts
import { isProtectedMediaTarget } from '@micazoyolli/foundation';

document.addEventListener('contextmenu', (event) => {
  if (isProtectedMediaTarget(event.target)) {
    event.preventDefault();
  }
});
```

## Proyectos que ya los usan

- TeInvitaASu Invitaciones: proteccion selectiva de media y controles compartidos.
- Estilo Natura: helpers no visuales.
- Micazoyolli: helpers no visuales.
- OhMamaMXX: helpers no visuales.
- TeInvitaASu.Party: helpers no visuales.
