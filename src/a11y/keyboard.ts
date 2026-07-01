export const KEYBOARD_KEYS = {
  enter: 'Enter',
  space: ' ',
  escape: 'Escape',
} as const;

export const isKeyboardActivation = (event: Pick<KeyboardEvent, 'key'>) =>
  event.key === KEYBOARD_KEYS.enter || event.key === KEYBOARD_KEYS.space;
