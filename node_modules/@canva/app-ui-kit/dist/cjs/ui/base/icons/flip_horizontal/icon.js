"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlipHorizontalIcon", {
    enumerable: true,
    get: function() {
        return FlipHorizontalIcon;
    }
});
const _icons = require('../icons');
const _iconfliphorizontalinlinesvg = _interop_require_default(require("./icon-flip-horizontal.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const FlipHorizontalIcon = (0, _icons.createIcon)({
    medium: _iconfliphorizontalinlinesvg.default
});
