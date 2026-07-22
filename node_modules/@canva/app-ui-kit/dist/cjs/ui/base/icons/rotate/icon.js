"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RotateIcon", {
    enumerable: true,
    get: function() {
        return RotateIcon;
    }
});
const _icons = require('../icons');
const _iconrotateinlinesvg = _interop_require_default(require("./icon-rotate.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const RotateIcon = (0, _icons.createIcon)({
    medium: _iconrotateinlinesvg.default
});
