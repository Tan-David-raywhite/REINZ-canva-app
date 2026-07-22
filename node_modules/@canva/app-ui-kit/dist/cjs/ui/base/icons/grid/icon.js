"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GridIcon", {
    enumerable: true,
    get: function() {
        return GridIcon;
    }
});
const _icons = require('../icons');
const _icongridinlinesvg = _interop_require_default(require("./icon-grid.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const GridIcon = (0, _icons.createIcon)({
    medium: _icongridinlinesvg.default
});
