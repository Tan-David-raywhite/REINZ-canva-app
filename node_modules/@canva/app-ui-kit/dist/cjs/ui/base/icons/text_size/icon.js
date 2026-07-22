"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextSizeIcon", {
    enumerable: true,
    get: function() {
        return TextSizeIcon;
    }
});
const _icons = require('../icons');
const _icontextsizeinlinesvg = _interop_require_default(require("./icon-text-size.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextSizeIcon = (0, _icons.createIcon)({
    medium: _icontextsizeinlinesvg.default
});
