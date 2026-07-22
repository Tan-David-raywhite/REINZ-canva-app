"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextAlignJustifyIcon", {
    enumerable: true,
    get: function() {
        return TextAlignJustifyIcon;
    }
});
const _icons = require('../icons');
const _icontextalignjustifyinlinesvg = _interop_require_default(require("./icon-text-align-justify.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextAlignJustifyIcon = (0, _icons.createIcon)({
    medium: _icontextalignjustifyinlinesvg.default
});
