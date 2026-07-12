# Accessible overlay pattern

Foundation DOM primitives help with simple overlays without coupling to React.

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

Do not use this pattern for complex comboboxes, nested portals or components already handled by a mature accessible library.
