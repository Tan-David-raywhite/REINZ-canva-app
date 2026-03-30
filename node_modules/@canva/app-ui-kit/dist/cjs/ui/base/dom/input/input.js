"use strict"
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
    get HIDDEN_INPUT_ATTR () {
        return HIDDEN_INPUT_ATTR;
    },
    get isElementInput () {
        return isElementInput;
    },
    get isSomeInputActive () {
        return isSomeInputActive;
    }
});
function isElementInput(element, global) {
    return element instanceof (global?.HTMLElement ?? HTMLElement) && (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA' || element.isContentEditable);
}
const HIDDEN_INPUT_ATTR = 'data-hidden-input';
function isElementHiddenInput(element) {
    return element instanceof HTMLElement && isElementInput(element) && element.getAttribute(HIDDEN_INPUT_ATTR) != null;
}
function isSomeInputActive(event) {
    const targetElement = event && (event.explicitOriginalTarget || event.target);
    return !!document.activeElement && isElementInput(document.activeElement) && !isElementHiddenInput(document.activeElement) || !!targetElement && isElementInput(targetElement) && !isElementHiddenInput(targetElement);
}
