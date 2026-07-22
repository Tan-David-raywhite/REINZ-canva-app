"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MaximizeIcon", {
    enumerable: true,
    get: function() {
        return MaximizeIcon;
    }
});
const _icons = require('../icons');
const _iconmaximizesmallinlinesvg = _interop_require_default(require("./icon-maximize-small.inline.svg"));
const _iconmaximizeinlinesvg = _interop_require_default(require("./icon-maximize.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const MaximizeIcon = (0, _icons.createIcon)({
    small: _iconmaximizesmallinlinesvg.default,
    medium: _iconmaximizeinlinesvg.default
});
