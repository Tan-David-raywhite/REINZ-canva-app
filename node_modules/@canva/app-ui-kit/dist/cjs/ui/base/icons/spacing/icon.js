"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SpacingIcon", {
    enumerable: true,
    get: function() {
        return SpacingIcon;
    }
});
const _icons = require('../icons');
const _iconspacinginlinesvg = _interop_require_default(require("./icon-spacing.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SpacingIcon = (0, _icons.createIcon)({
    medium: _iconspacinginlinesvg.default
});
