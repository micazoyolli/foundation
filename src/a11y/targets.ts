export const isElement = (target: EventTarget | null): target is Element =>
  target instanceof Element;

export const isHTMLElement = (
  target: EventTarget | null,
): target is HTMLElement => target instanceof HTMLElement;
