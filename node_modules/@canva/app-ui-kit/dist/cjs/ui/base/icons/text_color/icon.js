"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextColorIcon", {
    enumerable: true,
    get: function() {
        return TextColorIcon;
    }
});
const _icons = require('../icons');
const _icontextcolorinlinesvg = _interop_require_default(require("./icon-text-color.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextColorIcon = (0, _icons.createIcon)({
    medium: _icontextcolorinlinesvg.default
});
