"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UnderlineIcon", {
    enumerable: true,
    get: function() {
        return UnderlineIcon;
    }
});
const _icons = require('../icons');
const _iconunderlineinlinesvg = _interop_require_default(require("./icon-underline.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const UnderlineIcon = (0, _icons.createIcon)({
    medium: _iconunderlineinlinesvg.default
});
