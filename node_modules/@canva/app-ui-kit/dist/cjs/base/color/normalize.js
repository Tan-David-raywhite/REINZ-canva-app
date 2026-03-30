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
    get normalizeHex () {
        return normalizeHex;
    },
    get normalizeHue () {
        return normalizeHue;
    }
});
const _preconditions = require('../preconditions');
function normalizeHex(hex) {
    _preconditions.Preconditions.checkArgument(/^#?[0-9a-fA-F]{6}$/.test(hex));
    if (!hex.startsWith('#')) hex = `#${hex}`;
    return hex.toLowerCase();
}
function normalizeHue(h) {
    return h - Math.floor(h / 360) * 360;
}
