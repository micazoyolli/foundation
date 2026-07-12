export const isElement = (target: EventTarget | null): target is Element =>
  typeof Element !== 'undefined' && target instanceof Element;

export const isHTMLElement = (
  target: EventTarget | null,
): target is HTMLElement =>
  typeof HTMLElement !== 'undefined' && target instanceof HTMLElement;
