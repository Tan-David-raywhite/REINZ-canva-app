"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchIcon", {
    enumerable: true,
    get: function() {
        return SearchIcon;
    }
});
const _icons = require('../icons');
const _iconsearchinlinesvg = _interop_require_default(require("./icon-search.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SearchIcon = (0, _icons.createIcon)({
    medium: _iconsearchinlinesvg.default
});
