export { isElement, isHTMLElement } from './targets.js';
export { KEYBOARD_KEYS, isKeyboardActivation } from './keyboard.js';
export { PROTECTED_MEDIA_SELECTOR, isProtectedMediaTarget, } from './protectedMedia.js';
export { FOCUSABLE_SELECTOR, createEscapeKeyHandler, getFocusableElements, lockBodyScroll, restoreFocus, trapTabKey, unlockBodyScroll, } from './focus.js';
export type { BodyScrollLock } from './focus.js';
