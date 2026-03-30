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
    get findFocusable () {
        return findFocusable;
    },
    get findFocusables () {
        return findFocusables;
    },
    get isFocusable () {
        return isFocusable;
    }
});
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
function isFocusable(element) {
    return element.isConnected && element.matches(FOCUSABLE_SELECTOR);
}
function findFocusables(element) {
    return Array.from(element.querySelectorAll(FOCUSABLE_SELECTOR));
}
function findFocusable(element) {
    return element.querySelector(FOCUSABLE_SELECTOR);
}
