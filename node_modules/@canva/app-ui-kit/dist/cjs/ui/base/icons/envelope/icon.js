"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EnvelopeIcon", {
    enumerable: true,
    get: function() {
        return EnvelopeIcon;
    }
});
const _icons = require('../icons');
const _iconenvelopeinlinesvg = _interop_require_default(require("./icon-envelope.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const EnvelopeIcon = (0, _icons.createIcon)({
    medium: _iconenvelopeinlinesvg.default
});
