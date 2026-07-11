import { KEYBOARD_KEYS } from './keyboard.js';

export const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export type BodyScrollLock = {
  document: Document;
  previousOverflow: string;
};

type FocusableElement = HTMLElement & {
  disabled?: boolean;
};

const canReceiveFocus = (element: FocusableElement) =>
  !element.disabled
  && element.getAttribute('aria-hidden') !== 'true'
  && element.tabIndex !== -1;

export const getFocusableElements = (
  container: Pick<ParentNode, 'querySelectorAll'>,
) => Array.from(
  container.querySelectorAll<FocusableElement>(FOCUSABLE_SELECTOR),
).filter(canReceiveFocus);

export const lockBodyScroll = (
  documentRef: Document = document,
): BodyScrollLock => {
  const previousOverflow = documentRef.body.style.overflow;
  documentRef.body.style.overflow = 'hidden';

  return {
    document: documentRef,
    previousOverflow,
  };
};

export const unlockBodyScroll = (lock: BodyScrollLock) => {
  lock.document.body.style.overflow = lock.previousOverflow;
};

export const restoreFocus = (
  element: Element | null | undefined,
  documentRef: Document = document,
) => {
  if (!element || !documentRef.body.contains(element)) return;

  const focusable = element as HTMLElement;

  if (typeof focusable.focus === 'function') {
    focusable.focus();
  }
};

export const trapTabKey = (
  event: Pick<KeyboardEvent, 'key' | 'shiftKey' | 'preventDefault'>,
  container: Pick<ParentNode, 'querySelectorAll'>,
  activeElement: Element | null | undefined = document.activeElement,
) => {
  if (event.key !== 'Tab') return false;

  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!firstElement || !lastElement) return false;

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
    return true;
  }

  if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
    return true;
  }

  return false;
};

export const createEscapeKeyHandler = (
  onEscape: () => void,
) => (event: Pick<KeyboardEvent, 'key'>) => {
  if (event.key === KEYBOARD_KEYS.escape) {
    onEscape();
  }
};
