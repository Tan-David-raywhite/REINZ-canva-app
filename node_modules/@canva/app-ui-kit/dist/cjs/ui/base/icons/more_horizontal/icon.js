"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MoreHorizontalIcon", {
    enumerable: true,
    get: function() {
        return MoreHorizontalIcon;
    }
});
const _icons = require('../icons');
const _iconmorehorizontalsmallinlinesvg = _interop_require_default(require("./icon-more-horizontal-small.inline.svg"));
const _iconmorehorizontalinlinesvg = _interop_require_default(require("./icon-more-horizontal.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const MoreHorizontalIcon = (0, _icons.createIcon)({
    medium: _iconmorehorizontalinlinesvg.default,
    small: _iconmorehorizontalsmallinlinesvg.default
});
