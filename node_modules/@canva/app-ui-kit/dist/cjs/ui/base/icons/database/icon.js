"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DatabaseIcon", {
    enumerable: true,
    get: function() {
        return DatabaseIcon;
    }
});
const _icons = require('../icons');
const _icondatabaseinlinesvg = _interop_require_default(require("./icon-database.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DatabaseIcon = (0, _icons.createIcon)({
    medium: _icondatabaseinlinesvg.default
});
