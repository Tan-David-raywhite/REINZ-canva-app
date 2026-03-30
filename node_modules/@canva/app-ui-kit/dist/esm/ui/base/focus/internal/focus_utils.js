const focusableElements = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]',
    '[tabindex]',
    '[autofocus]'
];
const FOCUSABLE_SELECTOR = focusableElements.join(',');
export function isFocusable(element) {
    return element.isConnected && element.matches(FOCUSABLE_SELECTOR);
}
export function findFocusables(element) {
    return Array.from(element.querySelectorAll(FOCUSABLE_SELECTOR));
}
export function findFocusable(element) {
    return element.querySelector(FOCUSABLE_SELECTOR);
}
