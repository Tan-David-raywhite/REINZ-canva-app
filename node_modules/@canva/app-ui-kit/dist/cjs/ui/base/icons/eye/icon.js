"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EyeIcon", {
    enumerable: true,
    get: function() {
        return EyeIcon;
    }
});
const _icons = require('../icons');
const _iconeyeinlinesvg = _interop_require_default(require("./icon-eye.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const EyeIcon = (0, _icons.createIcon)({
    medium: _iconeyeinlinesvg.default
});
