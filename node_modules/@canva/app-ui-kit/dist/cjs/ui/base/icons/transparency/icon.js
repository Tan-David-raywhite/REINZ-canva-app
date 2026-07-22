"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TransparencyIcon", {
    enumerable: true,
    get: function() {
        return TransparencyIcon;
    }
});
const _icons = require('../icons');
const _icontransparencyinlinesvg = _interop_require_default(require("./icon-transparency.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TransparencyIcon = (0, _icons.createIcon)({
    medium: _icontransparencyinlinesvg.default
});
