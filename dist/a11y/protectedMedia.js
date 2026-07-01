import { isElement } from './targets';
export const PROTECTED_MEDIA_SELECTOR = [
    'img',
    'svg',
    'canvas',
    'video',
    '[data-protected-media]',
].join(',');
export const isProtectedMediaTarget = (target) => isElement(target) && Boolean(target.closest(PROTECTED_MEDIA_SELECTOR));
