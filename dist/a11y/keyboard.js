export const KEYBOARD_KEYS = {
    enter: 'Enter',
    space: ' ',
    escape: 'Escape',
};
export const isKeyboardActivation = (event) => event.key === KEYBOARD_KEYS.enter || event.key === KEYBOARD_KEYS.space;
