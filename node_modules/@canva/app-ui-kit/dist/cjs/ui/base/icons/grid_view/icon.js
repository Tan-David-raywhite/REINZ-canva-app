"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GridViewIcon", {
    enumerable: true,
    get: function() {
        return GridViewIcon;
    }
});
const _icons = require('../icons');
const _icongridviewinlinesvg = _interop_require_default(require("./icon-grid-view.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const GridViewIcon = (0, _icons.createIcon)({
    medium: _icongridviewinlinesvg.default
});
