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

## `getFocusableElements(container)`

### Que hace

Devuelve los elementos enfocables dentro de un contenedor usando un selector DOM comun y filtrando elementos deshabilitados, `aria-hidden="true"` y `tabIndex="-1"`.

### Cuando usarlo

- En drawers, modales y paneles con navegacion por teclado.
- Antes de implementar un focus trap local.
- Cuando se necesita una lista sencilla de elementos enfocables sin traer dependencias.

### Cuando NO usarlo

- Para widgets complejos como comboboxes avanzados.
- Si necesitas una estrategia completa de inert/focus management.
- Si el componente ya delega esto a una libreria accesible madura.

### Parametros

- `container: Pick<ParentNode, 'querySelectorAll'>`

### Valor de retorno

`HTMLElement[]`

### Ejemplo

```ts
import { getFocusableElements } from '@micazoyolli/foundation';

const first = getFocusableElements(panel)[0];
first?.focus();
```

## `lockBodyScroll(documentRef)` y `unlockBodyScroll(lock)`

### Que hacen

`lockBodyScroll` guarda el `overflow` actual del `body`, lo cambia a `hidden` y devuelve un token de restauracion. `unlockBodyScroll` restaura el valor anterior.

### Cuando usarlos

- En modales, drawers y menus que deben impedir scroll del fondo.
- Cuando se necesita restaurar exactamente el overflow previo.

### Cuando NO usarlos

- Si el scroll lock requiere compensar scrollbar o manejar multiples locks anidados.
- Si una libreria de overlay ya controla el scroll.

### Parametros

- `lockBodyScroll(documentRef?: Document)`
- `unlockBodyScroll(lock: BodyScrollLock)`

### Valor de retorno

- `lockBodyScroll`: `BodyScrollLock`
- `unlockBodyScroll`: `void`

### Ejemplo

```ts
const lock = lockBodyScroll();

// cleanup
unlockBodyScroll(lock);
```

## `restoreFocus(element, documentRef)`

### Que hace

Regresa el foco a un elemento si todavia existe dentro de `document.body`.

### Cuando usarlo

- Al cerrar un modal o drawer.
- Para devolver foco al boton que abrio una capa.

### Cuando NO usarlo

- Si el elemento ya no existe.
- Si el flujo debe mover foco a otro punto por decision de UX.

### Parametros

- `element: Element | null | undefined`
- `documentRef?: Document`

### Valor de retorno

`void`

## `trapTabKey(event, container, activeElement)`

### Que hace

Intercepta `Tab` en los extremos de un contenedor y mueve el foco del ultimo al primero o del primero al ultimo.

### Cuando usarlo

- En overlays simples.
- En drawers o modales propios con una superficie enfocada.

### Cuando NO usarlo

- En dialogs complejos donde conviene una libreria especializada.
- Si hay focus scopes anidados.

### Parametros

- `event: Pick<KeyboardEvent, 'key' | 'shiftKey' | 'preventDefault'>`
- `container: Pick<ParentNode, 'querySelectorAll'>`
- `activeElement?: Element | null`

### Valor de retorno

`boolean`: `true` si atrapó y redirigió el foco.

### Ejemplo

```ts
window.addEventListener('keydown', (event) => {
  trapTabKey(event, panel, document.activeElement);
});
```

## `createEscapeKeyHandler(onEscape)`

### Que hace

Devuelve un handler que ejecuta `onEscape` cuando `event.key` es `Escape`.

### Cuando usarlo

- En overlays simples.
- Para evitar repetir comparaciones de tecla.

### Cuando NO usarlo

- Si el cierre depende de estado complejo o atajos multiples.

### Parametros

- `onEscape: () => void`

### Valor de retorno

`(event: Pick<KeyboardEvent, 'key'>) => void`

## Proyectos que ya tienen patrones equivalentes

- TeInvitaASu.Party: Offcanvas y ModalDemo.
- WTFashion: Header, WishlistDrawer y filtros.
- OhMamaMXX: EventModal.
- TeInvitaASu Invitaciones: Sidebar.
