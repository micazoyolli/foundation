# TypeScript: Accessibility

Foundation includes small DOM primitives for repeated accessibility patterns. They do not replace a full accessible component library.

## Focus management

```ts
import {
  getFocusableElements,
  restoreFocus,
  trapTabKey,
} from '@micazoyolli/foundation';
```

<div class="visual-card overlay-demo">
  <div class="overlay-demo-panel">
    <strong>Accessible panel</strong>
    <p>Tab can stay inside the panel and Escape can close it.</p>
    <button class="focus-demo">Primary action</button>
  </div>
</div>

## Scroll lock

```ts
import { lockBodyScroll, unlockBodyScroll } from '@micazoyolli/foundation';

const lock = lockBodyScroll();
unlockBodyScroll(lock);
```

## Escape

```ts
import { createEscapeKeyHandler } from '@micazoyolli/foundation';

const onEscape = createEscapeKeyHandler(close);
document.addEventListener('keydown', onEscape);
```

## Protected media

```ts
import { isProtectedMediaTarget } from '@micazoyolli/foundation';
```

<div class="visual-card protected-media-demo">
  <div class="protected-media-thumb" data-protected-media>IMG</div>
  <p>Protection applies to concrete media, not the whole page.</p>
</div>

Related export:
[src/a11y/focus.ts](https://github.com/micazoyolli/foundation/blob/main/src/a11y/focus.ts)
