"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextSpacingIcon", {
    enumerable: true,
    get: function() {
        return TextSpacingIcon;
    }
});
const _icons = require('../icons');
const _icontextspacinginlinesvg = _interop_require_default(require("./icon-text-spacing.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TextSpacingIcon = (0, _icons.createIcon)({
    medium: _icontextspacinginlinesvg.default
});
