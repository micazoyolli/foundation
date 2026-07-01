import {
  cx,
  isElement,
  isKeyboardActivation,
  isProtectedMediaTarget,
} from '@micazoyolli/foundation';

export const getClassName = (isActive: boolean) =>
  cx('example', isActive && 'example--active');

export const shouldProtectTarget = (target: EventTarget | null) =>
  isElement(target) && isProtectedMediaTarget(target);

export const shouldHandleKey = (event: Pick<KeyboardEvent, 'key'>) =>
  isKeyboardActivation(event);
