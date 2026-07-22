"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LayoutIcon", {
    enumerable: true,
    get: function() {
        return LayoutIcon;
    }
});
const _icons = require('../icons');
const _iconlayoutinlinesvg = _interop_require_default(require("./icon-layout.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LayoutIcon = (0, _icons.createIcon)({
    medium: _iconlayoutinlinesvg.default
}, {
    followDirection: true
});
