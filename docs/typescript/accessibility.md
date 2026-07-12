# TypeScript: Accessibility

Foundation incluye primitivas DOM pequeñas para patrones repetidos de accesibilidad. No reemplazan una libreria completa de componentes accesibles.

## Focus management

```ts
import {
  getFocusableElements,
  restoreFocus,
  trapTabKey,
} from '@micazoyolli/foundation';
```

### Que hace

- `getFocusableElements(container)` obtiene elementos enfocables visibles para teclado.
- `trapTabKey(event, container)` mantiene Tab dentro de un panel.
- `restoreFocus(element)` devuelve el foco al disparador si sigue en el documento.

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel">
    <strong>Panel accesible</strong>
    <p>Tab cicla dentro del panel y Escape puede cerrar.</p>
    <button class="focus-demo">Accion primaria</button>
  </div>
</div>

## Scroll lock

```ts
import { lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';

const lock = lockBodyScroll();
unlockBodyScroll(lock);
```

### Cuando usarlo

- Drawers y modales simples.
- Overlays que deben evitar scroll del fondo.

### Cuando no usarlo

- Locks anidados complejos.
- Componentes que ya tienen un manager accesible robusto.

## Escape

```ts
import { createEscapeKeyHandler } from '@micazoyolli/foundation';

const onEscape = createEscapeKeyHandler(close);
document.addEventListener('keydown', onEscape);
```

## Media protegida

```ts
import { isProtectedMediaTarget } from '@micazoyolli/foundation';

document.addEventListener('contextmenu', (event) => {
  if (isProtectedMediaTarget(event.target)) event.preventDefault();
});
```

<div class="visual-card protected-media-demo">
  <div class="protected-media-thumb" data-protected-media>IMG</div>
  <p>Protege elementos concretos sin bloquear seleccion, teclado o lectura global.</p>
</div>

## Accesibilidad

Estas utilidades deben acompañarse con HTML semantico, labels, `aria-*` cuando aplique y focus visible definido por el proyecto.

Archivo/export relacionado:
[src/a11y/focus.ts](https://github.com/micazoyolli/foundation/blob/main/src/a11y/focus.ts)
