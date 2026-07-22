"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LinkIcon", {
    enumerable: true,
    get: function() {
        return LinkIcon;
    }
});
const _icons = require('../icons');
const _iconlinklargeinlinesvg = _interop_require_default(require("./icon-link-large.inline.svg"));
const _iconlinkinlinesvg = _interop_require_default(require("./icon-link.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LinkIcon = (0, _icons.createIcon)({
    large: _iconlinklargeinlinesvg.default,
    medium: _iconlinkinlinesvg.default
});
