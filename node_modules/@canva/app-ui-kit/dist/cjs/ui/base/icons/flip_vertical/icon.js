"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlipVerticalIcon", {
    enumerable: true,
    get: function() {
        return FlipVerticalIcon;
    }
});
const _icons = require('../icons');
const _iconflipverticalinlinesvg = _interop_require_default(require("./icon-flip-vertical.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const FlipVerticalIcon = (0, _icons.createIcon)({
    medium: _iconflipverticalinlinesvg.default
});
