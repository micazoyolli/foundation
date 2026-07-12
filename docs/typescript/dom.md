# TypeScript: DOM y accesibilidad

Estos helpers ayudan a trabajar con eventos DOM sin casts inseguros y con patrones de accesibilidad repetidos.

## `isElement(target)`

### Qué hace

Verifica si un `EventTarget | null` es una instancia de `Element`.

### Cuándo usarlo

- Antes de usar `.closest()`.
- En handlers globales de eventos.
- En logica de protección selectiva de media.

### Cuándo no usarlo

- Si ya tienes un tipo DOM específico garantizado por React o TypeScript.
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

### Qué hace

Verifica si un target es `HTMLElement`.

### Cuándo usarlo

Cuando necesitas propiedades como `dataset`, `focus()` o medidas del elemento.

### Cuándo no usarlo

Si el target puede ser SVG y necesitas conservar ese caso.

### Parametros

- `target: EventTarget | null`

### Valor de retorno

`target is HTMLElement`

## `KEYBOARD_KEYS`

### Qué hace

Centraliza teclascomúnes: `enter`, `space` y `escape`.

### Cuándo usarlo

En handlers compartidos donde se repiten esos valores.

### Cuándo no usarlo

Para atajos complejos o mapas de teclado específicos de una app.

### Valor de retorno

Objeto constante.

## `isKeyboardActivation(event)`

### Qué hace

Detecta activación por `Enter` o `Space`.

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

### Qué hace

Selectorcomún para media protegible: `img`, `svg`, `canvas`, `video` y `[data-protected-media]`.

### Cuándo usarlo

En protección selectiva de contenido visual.

### Cuándo no usarlo

Para bloquear toda la página o impedir accesibilidad global.

## `isProtectedMediaTarget(target)`

### Qué hace

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

## Uso en producción

Foundation se utiliza como base compartida en sitios de producción, aplicaciones de negocio y experiencias interactivas. Puedes conocer más del ecosistema en [nadia.dev](https://nadia.dev).

## `getFocusableElements(container)`

### Qué hace

Devuelve los elementos enfocables dentro de un contenedor usando un selector DOMcomún y filtrando elementos deshabilitados, `aria-hidden="true"` y `tabIndex="-1"`.

### Cuándo usarlo

- En drawers, modales y paneles con navegación por teclado.
- Antes de implementar un focus trap local.
- Cuando se necesita una lista sencilla de elementos enfocables sin traer dependencias.

### Cuándo no usarlo

- Para widgets complejos como comboboxes avanzados.
- Si necesitas una estrategia completa de inert/focus management.
- Si el componente ya delega esto a una librería accesible madura.

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

### Qué hacen

`lockBodyScroll` guarda el `overflow` actual del `body`, lo cambia a `hidden` y devuelve un token de restauración. `unlockBodyScroll` restaura el valor anterior.

### Cuándo usarlos

- En modales, drawers y menus que deben impedir scroll del fondo.
- Cuando se necesita restaurar exactamente el overflow previo.

### Cuándo no usarlos

- Si el scroll lock requiere compensar scrollbar o manejar múltiples locks anidados.
- Si una librería de overlay ya controla el scroll.

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

### Resultado visual

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel">
    <strong>Panel accesible</strong>
    <p>El patrón conserva foco, bloquea scroll del fondo y permite Escape.</p>
    <button class="focus-demo">Cerrar</button>
  </div>
</div>

## `restoreFocus(element, documentRef)`

### Qué hace

Regresa el foco a un elemento si todavía existe dentro de `document.body`.

### Cuándo usarlo

- Al cerrar un modal o drawer.
- Para devolver foco al botón que abrió una capa.

### Cuándo no usarlo

- Si el elemento ya no existe.
- Si el flujo debe mover foco a otro punto por decisión de UX.

### Parametros

- `element: Element | null | undefined`
- `documentRef?: Document`

### Valor de retorno

`void`

## `trapTabKey(event, container, activeElement)`

### Qué hace

Intercepta `Tab` en los extremos de un contenedor y mueve el foco del ultimo al primero o del primero al ultimo.

### Cuándo usarlo

- En overlays simples.
- En drawers o modales propios con una superficie enfocada.

### Cuándo no usarlo

- En dialogs complejos donde conviene una librería especializada.
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

### Qué hace

Devuelve un handler que ejecuta `onEscape` cuando `event.key` es `Escape`.

### Cuándo usarlo

- En overlays simples.
- Para evitar repetir comparaciones de tecla.

### Cuándo no usarlo

- Si el cierre depende de estado complejo o atajos múltiples.

### Parametros

- `onEscape: () => void`

### Valor de retorno

`(event: Pick<KeyboardEvent, 'key'>) => void`

## Uso en producción

Estas primitivas sostienen patrones de overlays, drawers y modales en experiencias reales sin mover la UI ni las reglas de marca a Foundation.
