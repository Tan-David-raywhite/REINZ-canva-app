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
    get canHover () {
        return canHover;
    },
    get isTouchSupported () {
        return isTouchSupported;
    }
});
const _internal = require("./internal");
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const touchMatch = globalWindow && globalWindow.matchMedia ? globalWindow.matchMedia('(pointer:coarse), (-moz-touch-enabled:1)') : null;
const noHoverMatch = globalWindow && globalWindow.matchMedia ? globalWindow.matchMedia('(hover: none)') : null;
function isTouchSupported(window1 = globalWindow) {
    if (window1 == null) return false;
    if (window1.matchMedia == null)
        return false;
    if (_internal.Internal.isAndroidDevice(navigator))
        return true;
    if (window1 === globalWindow && touchMatch)
        return touchMatch.matches;
    return window1.matchMedia('(pointer:coarse), (-moz-touch-enabled:1)').matches;
}
function canHover(window1 = globalWindow) {
    if (window1 == null) return false;
    if (window1.matchMedia == null)
        return true;
    if (!isTouchSupported(window1))
        return true;
    if (window1 === globalWindow && noHoverMatch) return !noHoverMatch.matches;
    return !window1.matchMedia('(hover: none)').matches;
}
