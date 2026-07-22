"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StarIcon", {
    enumerable: true,
    get: function() {
        return StarIcon;
    }
});
const _icons = require('../icons');
const _iconstarinlinesvg = _interop_require_default(require("./icon-star.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const StarIcon = (0, _icons.createIcon)({
    medium: _iconstarinlinesvg.default
});
