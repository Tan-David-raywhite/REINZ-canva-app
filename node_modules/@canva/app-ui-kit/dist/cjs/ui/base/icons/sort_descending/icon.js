"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SortDescendingIcon", {
    enumerable: true,
    get: function() {
        return SortDescendingIcon;
    }
});
const _icons = require('../icons');
const _iconsortdescendinginlinesvg = _interop_require_default(require("./icon-sort-descending.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SortDescendingIcon = (0, _icons.createIcon)({
    medium: _iconsortdescendinginlinesvg.default
});
