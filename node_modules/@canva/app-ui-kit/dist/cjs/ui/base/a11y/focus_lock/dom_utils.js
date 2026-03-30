"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get AUTO_FOCUS_ATTR () {
        return AUTO_FOCUS_ATTR;
    },
    get FOCUS_GUARD_ATTR () {
        return FOCUS_GUARD_ATTR;
    },
    get FOCUS_LOCK_EXCEPTED_ATTR () {
        return FOCUS_LOCK_EXCEPTED_ATTR;
    },
    get findAutoFocusElement () {
        return findAutoFocusElement;
    },
    get focusNextElement () {
        return focusNextElement;
    },
    get focusPrevElement () {
        return focusPrevElement;
    },
    get focusWithConditionalDelayHack () {
        return focusWithConditionalDelayHack;
    },
    get getFocusablesInside () {
        return getFocusablesInside;
    }
});
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
const FOCUS_GUARD_ATTR = 'data-focus-guard';
const AUTO_FOCUS_ATTR = 'data-focus-lock-autofocus';
const FOCUS_LOCK_EXCEPTED_ATTR = 'data-focus-lock-excepted';
const isNotFocusGuard = (element)=>!element.hasAttribute(FOCUS_GUARD_ATTR);
const isNotHiddenInput = (element)=>!(element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden');
const isTabbable = (element)=>element.getAttribute('tabIndex') !== '-1';
function getFocusablesInside(node) {
    const focusables = Array.from(node.querySelectorAll(focusablesSelector));
    return focusables.filter((e)=>isNotFocusGuard(e) && isNotHiddenInput(e) && isTabbable(e));
}
function findAutoFocusElement(node) {
    const autoFocusGroup = node.querySelector(`[${AUTO_FOCUS_ATTR}='true']`);
    if (!autoFocusGroup) return null;
    const focusables = Array.from(autoFocusGroup.querySelectorAll(focusablesSelector));
    return focusables.length > 0 ? focusables[0] : null;
}
function focusWithConditionalDelayHack(element, options) {
    if (element.tagName === 'INPUT') setTimeout(()=>{
        element.focus(options);
    }, 50);
    else element.focus(options);
}
function focusNextElement(baseElement, opts = {}) {
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
function focusPrevElement(baseElement, opts = {}) {
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
