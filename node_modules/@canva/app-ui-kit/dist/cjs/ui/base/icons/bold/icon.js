"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BoldIcon", {
    enumerable: true,
    get: function() {
        return BoldIcon;
    }
});
const _icons = require('../icons');
const _iconboldinlinesvg = _interop_require_default(require("./icon-bold.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const BoldIcon = (0, _icons.createIcon)({
    medium: _iconboldinlinesvg.default
});
