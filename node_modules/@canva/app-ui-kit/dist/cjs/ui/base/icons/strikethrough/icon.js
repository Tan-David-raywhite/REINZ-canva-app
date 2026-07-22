"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StrikethroughIcon", {
    enumerable: true,
    get: function() {
        return StrikethroughIcon;
    }
});
const _icons = require('../icons');
const _iconstrikethroughinlinesvg = _interop_require_default(require("./icon-strikethrough.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const StrikethroughIcon = (0, _icons.createIcon)({
    medium: _iconstrikethroughinlinesvg.default
});
