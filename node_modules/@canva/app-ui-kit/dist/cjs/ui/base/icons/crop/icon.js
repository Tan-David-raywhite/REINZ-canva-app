"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CropIcon", {
    enumerable: true,
    get: function() {
        return CropIcon;
    }
});
const _icons = require('../icons');
const _iconcropinlinesvg = _interop_require_default(require("./icon-crop.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CropIcon = (0, _icons.createIcon)({
    medium: _iconcropinlinesvg.default
});
