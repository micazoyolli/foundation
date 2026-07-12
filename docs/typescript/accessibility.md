# TypeScript: Accessibility

Foundation incluye primitivas DOM pequeñas para patrones repetidos de accesibilidad. No reemplazan una librería completa de componentes accesibles.

## Focus management

```ts
import {
  getFocusableElements,
  restoreFocus,
  trapTabKey,
} from '@micazoyolli/foundation';
```

### Qué hace

- `getFocusableElements(container)` obtiene elementos enfocables visibles para teclado.
- `trapTabKey(event, container)` mantiene Tab dentro de un panel.
- `restoreFocus(element)` devuelve el foco al disparador si sigue en el documento.

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel">
    <strong>Panel accesible</strong>
    <p>Tab circula dentro del panel y Escape puede cerrar.</p>
    <button class="focus-demo">Acción primaria</button>
  </div>
</div>

## Scroll lock

```ts
import { lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';

const lock = lockBodyScroll();
unlockBodyScroll(lock);
```

### Cuándo usarlo

- Drawers y modales simples.
- Overlays que deben evitar scroll del fondo.

### Cuándo no usarlo

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
  <p>Protege elementos concretos sin bloquear selección, teclado o lectura global.</p>
</div>

## Accesibilidad

Estas utilidades deben acompañarse con HTML semántico, labels, `aria-*` cuando aplique y focus visible definido por el proyecto.

## Focus visible

Foundation no exporta estilos globales de focus. El proyecto consumidor debe mantener un indicador visible, consistente y con contraste suficiente.

<div class="visual-card">
  <a class="focus-demo" href="#focus-visible">Enfócame con Tab</a>
</div>

## Resultado visual de media protegida

<div class="visual-card protected-media-demo">
  <div class="protected-media-thumb" data-protected-media>IMG</div>
  <p>La protección se limita a media concreta. No bloquea selección global, teclado ni lectura.</p>
</div>

Archivo/export relacionado:
[src/a11y/focus.ts](https://github.com/micazoyolli/foundation/blob/main/src/a11y/focus.ts)
