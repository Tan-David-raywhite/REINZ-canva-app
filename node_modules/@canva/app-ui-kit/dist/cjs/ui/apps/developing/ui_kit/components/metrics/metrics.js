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
    get baseUnit () {
        return baseUnit;
    },
    get unitSpaces () {
        return unitSpaces;
    }
});
const _tokenscss = _interop_require_default(require("../../styles/tokens.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const unitSpaces = [
    '0',
    '0.5u',
    '1u',
    '1.5u',
    '2u',
    '3u',
    '4u',
    '6u',
    '8u',
    '12u'
];
const baseUnit = parseInt(_tokenscss.default.baseUnit, 10) || 8;
