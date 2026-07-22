"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BackgroundIcon", {
    enumerable: true,
    get: function() {
        return BackgroundIcon;
    }
});
const _icons = require('../icons');
const _iconbackgroundinlinesvg = _interop_require_default(require("./icon-background.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const BackgroundIcon = (0, _icons.createIcon)({
    medium: _iconbackgroundinlinesvg.default
});
