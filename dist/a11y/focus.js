import { KEYBOARD_KEYS } from './keyboard.js';
export const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');
const getDocumentRef = (documentRef) => {
    if (documentRef)
        return documentRef;
    if (typeof document !== 'undefined')
        return document;
    throw new ReferenceError('A document reference is required outside the browser.');
};
const getActiveElement = () => typeof document !== 'undefined' ? document.activeElement : undefined;
const canReceiveFocus = (element) => !element.disabled
    && element.getAttribute('aria-hidden') !== 'true'
    && element.tabIndex !== -1;
export const getFocusableElements = (container) => Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(canReceiveFocus);
export const lockBodyScroll = (documentRef) => {
    const currentDocument = getDocumentRef(documentRef);
    const previousOverflow = currentDocument.body.style.overflow;
    currentDocument.body.style.overflow = 'hidden';
    return {
        document: currentDocument,
        previousOverflow,
    };
};
export const unlockBodyScroll = (lock) => {
    lock.document.body.style.overflow = lock.previousOverflow;
};
export const restoreFocus = (element, documentRef) => {
    const currentDocument = getDocumentRef(documentRef);
    if (!element || !currentDocument.body.contains(element))
        return;
    const focusable = element;
    if (typeof focusable.focus === 'function') {
        focusable.focus();
    }
};
export const trapTabKey = (event, container, activeElement = getActiveElement()) => {
    if (event.key !== 'Tab')
        return false;
    const focusableElements = getFocusableElements(container);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (!firstElement || !lastElement)
        return false;
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
export const createEscapeKeyHandler = (onEscape) => (event) => {
    if (event.key === KEYBOARD_KEYS.escape) {
        onEscape();
    }
};
