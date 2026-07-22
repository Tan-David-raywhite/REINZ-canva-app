"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SortIcon", {
    enumerable: true,
    get: function() {
        return SortIcon;
    }
});
const _icons = require('../icons');
const _iconsortinlinesvg = _interop_require_default(require("./icon-sort.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SortIcon = (0, _icons.createIcon)({
    medium: _iconsortinlinesvg.default
});
