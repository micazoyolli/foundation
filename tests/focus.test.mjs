import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createEscapeKeyHandler,
  getFocusableElements,
  lockBodyScroll,
  restoreFocus,
  trapTabKey,
  unlockBodyScroll,
} from '../dist/index.js';

const createFocusable = ({ disabled = false, hidden = false, tabIndex = 0 } = {}) => ({
  disabled,
  focused: false,
  tabIndex,
  focus() {
    this.focused = true;
  },
  getAttribute(name) {
    if (name === 'aria-hidden') return hidden ? 'true' : null;
    return null;
  },
});

test('filters focusable elements', () => {
  const enabled = createFocusable();
  const disabled = createFocusable({ disabled: true });
  const hidden = createFocusable({ hidden: true });
  const untabbable = createFocusable({ tabIndex: -1 });
  const container = {
    querySelectorAll: () => [enabled, disabled, hidden, untabbable],
  };

  assert.deepEqual(getFocusableElements(container), [enabled]);
});

test('locks and unlocks body scroll', () => {
  const documentRef = {
    body: {
      style: {
        overflow: 'auto',
      },
    },
  };

  const lock = lockBodyScroll(documentRef);

  assert.equal(documentRef.body.style.overflow, 'hidden');

  unlockBodyScroll(lock);

  assert.equal(documentRef.body.style.overflow, 'auto');
});

test('restores focus when element is still in document', () => {
  const element = createFocusable();
  const documentRef = {
    body: {
      contains: (target) => target === element,
    },
  };

  restoreFocus(element, documentRef);

  assert.equal(element.focused, true);
});

test('traps Tab at the edges of a focus scope', () => {
  const first = createFocusable();
  const last = createFocusable();
  const container = {
    querySelectorAll: () => [first, last],
  };
  let prevented = false;

  const trapped = trapTabKey({
    key: 'Tab',
    shiftKey: false,
    preventDefault: () => {
      prevented = true;
    },
  }, container, last);

  assert.equal(trapped, true);
  assert.equal(prevented, true);
  assert.equal(first.focused, true);
});

test('calls Escape handler only on Escape', () => {
  let calls = 0;
  const onKey = createEscapeKeyHandler(() => {
    calls += 1;
  });

  onKey({ key: 'Enter' });
  onKey({ key: 'Escape' });

  assert.equal(calls, 1);
});
