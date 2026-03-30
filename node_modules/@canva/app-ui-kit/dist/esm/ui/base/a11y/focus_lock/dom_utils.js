const focusablesSelector = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]'
].join(',');
export const FOCUS_GUARD_ATTR = 'data-focus-guard';
export const AUTO_FOCUS_ATTR = 'data-focus-lock-autofocus';
export const FOCUS_LOCK_EXCEPTED_ATTR = 'data-focus-lock-excepted';
const isNotFocusGuard = (element)=>!element.hasAttribute(FOCUS_GUARD_ATTR);
const isNotHiddenInput = (element)=>!(element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden');
const isTabbable = (element)=>element.getAttribute('tabIndex') !== '-1';
export function getFocusablesInside(node) {
    const focusables = Array.from(node.querySelectorAll(focusablesSelector));
    return focusables.filter((e)=>isNotFocusGuard(e) && isNotHiddenInput(e) && isTabbable(e));
}
export function findAutoFocusElement(node) {
    const autoFocusGroup = node.querySelector(`[${AUTO_FOCUS_ATTR}='true']`);
    if (!autoFocusGroup) return null;
    const focusables = Array.from(autoFocusGroup.querySelectorAll(focusablesSelector));
    return focusables.length > 0 ? focusables[0] : null;
}
export function focusWithConditionalDelayHack(element, options) {
    if (element.tagName === 'INPUT') setTimeout(()=>{
        element.focus(options);
    }, 50);
    else element.focus(options);
}
export function focusNextElement(baseElement, opts = {}) {
    const scope = opts.scope ?? window.document.body;
    const cycle = opts.cycle ?? true;
    if (!scope.contains(baseElement)) return;
    const focusables = getFocusablesInside(scope);
    const currentIndex = focusables.findIndex((node)=>node === baseElement);
    if (currentIndex === -1) return;
    const first = focusables[0];
    const next = currentIndex !== focusables.length - 1 ? focusables[currentIndex + 1] : cycle ? first : undefined;
    next?.focus();
}
export function focusPrevElement(baseElement, opts = {}) {
    const scope = opts.scope ?? window.document.body;
    const cycle = opts.cycle ?? true;
    if (!scope.contains(baseElement)) return;
    const focusables = getFocusablesInside(scope);
    const currentIndex = focusables.findIndex((node)=>node === baseElement);
    if (currentIndex === -1) return;
    const last = focusables[focusables.length - 1];
    const prev = currentIndex !== 0 ? focusables[currentIndex - 1] : cycle ? last : undefined;
    prev?.focus();
}
