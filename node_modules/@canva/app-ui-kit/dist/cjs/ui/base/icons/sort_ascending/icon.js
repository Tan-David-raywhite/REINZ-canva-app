"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SortAscendingIcon", {
    enumerable: true,
    get: function() {
        return SortAscendingIcon;
    }
});
const _icons = require('../icons');
const _iconsortascendinginlinesvg = _interop_require_default(require("./icon-sort-ascending.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SortAscendingIcon = (0, _icons.createIcon)({
    medium: _iconsortascendinginlinesvg.default
});
