# TypeScript: DOM

DOM helpers reduce unsafe casts in global event handlers.

## `isElement(target)`

Checks whether an `EventTarget | null` is an `Element`.

```ts
import { isElement } from '@micazoyolli/foundation';

document.addEventListener('click', (event) => {
  if (!isElement(event.target)) return;
  event.target.closest('[data-action]');
});
```

## `isHTMLElement(target)`

Use it when you need `dataset`, `focus()` or element measurements.

## `KEYBOARD_KEYS`

Centralizes `Enter`, `Space` and `Escape`.

## `isKeyboardActivation(event)`

Returns `true` for keyboard activation through Enter or Space.
