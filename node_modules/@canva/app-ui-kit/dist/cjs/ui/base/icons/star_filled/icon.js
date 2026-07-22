"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StarFilledIcon", {
    enumerable: true,
    get: function() {
        return StarFilledIcon;
    }
});
const _icons = require('../icons');
const _iconstarfilledinlinesvg = _interop_require_default(require("./icon-star-filled.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const StarFilledIcon = (0, _icons.createIcon)({
    medium: _iconstarfilledinlinesvg.default
});
