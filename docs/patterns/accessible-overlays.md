# Patron de overlays accesibles

Las primitivas DOM de foundation ayudan a overlays simples sin acoplarse a React.

## Ejemplo

```ts
import {
  createEscapeKeyHandler,
  lockBodyScroll,
  restoreFocus,
  trapTabKey,
  unlockBodyScroll,
} from '@micazoyolli/foundation';

const trigger = document.activeElement;
const lock = lockBodyScroll();
const onEscape = createEscapeKeyHandler(close);

document.addEventListener('keydown', onEscape);
panel.addEventListener('keydown', (event) => {
  trapTabKey(event, panel);
});

function cleanup() {
  document.removeEventListener('keydown', onEscape);
  unlockBodyScroll(lock);
  restoreFocus(trigger);
}
```

Archivos relacionados:

- [src/a11y/focus.ts](https://github.com/micazoyolli/foundation/blob/main/src/a11y/focus.ts)
- [src/a11y/keyboard.ts](https://github.com/micazoyolli/foundation/blob/main/src/a11y/keyboard.ts)

## Cuándo no usar este patrón

- Comboboxes, menus complejos o overlays con portales anidados.
- Casos que necesitan `inert`, stacking manager o locks anidados.
- Componentes ya cubiertos por una librería accesible madura.
