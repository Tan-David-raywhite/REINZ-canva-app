"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FontIcon", {
    enumerable: true,
    get: function() {
        return FontIcon;
    }
});
const _icons = require('../icons');
const _iconfontinlinesvg = _interop_require_default(require("./icon-font.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const FontIcon = (0, _icons.createIcon)({
    medium: _iconfontinlinesvg.default
});
