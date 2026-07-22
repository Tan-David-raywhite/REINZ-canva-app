"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MinimizeIcon", {
    enumerable: true,
    get: function() {
        return MinimizeIcon;
    }
});
const _icons = require('../icons');
const _iconminimizeinlinesvg = _interop_require_default(require("./icon-minimize.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const MinimizeIcon = (0, _icons.createIcon)({
    medium: _iconminimizeinlinesvg.default
});
