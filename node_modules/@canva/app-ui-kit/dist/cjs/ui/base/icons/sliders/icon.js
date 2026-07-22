"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SlidersIcon", {
    enumerable: true,
    get: function() {
        return SlidersIcon;
    }
});
const _icons = require('../icons');
const _iconsliderssmallinlinesvg = _interop_require_default(require("./icon-sliders-small.inline.svg"));
const _iconslidersinlinesvg = _interop_require_default(require("./icon-sliders.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SlidersIcon = (0, _icons.createIcon)({
    small: _iconsliderssmallinlinesvg.default,
    medium: _iconslidersinlinesvg.default
});
