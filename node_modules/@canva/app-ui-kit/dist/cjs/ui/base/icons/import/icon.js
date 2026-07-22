"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImportIcon", {
    enumerable: true,
    get: function() {
        return ImportIcon;
    }
});
const _icons = require('../icons');
const _iconimportinlinesvg = _interop_require_default(require("./icon-import.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ImportIcon = (0, _icons.createIcon)({
    medium: _iconimportinlinesvg.default
});
