"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AlertTriangleIcon", {
    enumerable: true,
    get: function() {
        return AlertTriangleIcon;
    }
});
const _icons = require('../icons');
const _iconalerttrianglesmallinlinesvg = _interop_require_default(require("./icon-alert-triangle-small.inline.svg"));
const _iconalerttriangletinyinlinesvg = _interop_require_default(require("./icon-alert-triangle-tiny.inline.svg"));
const _iconalerttriangleinlinesvg = _interop_require_default(require("./icon-alert-triangle.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AlertTriangleIcon = (0, _icons.createIcon)({
    tiny: _iconalerttriangletinyinlinesvg.default,
    small: _iconalerttrianglesmallinlinesvg.default,
    medium: _iconalerttriangleinlinesvg.default
});
