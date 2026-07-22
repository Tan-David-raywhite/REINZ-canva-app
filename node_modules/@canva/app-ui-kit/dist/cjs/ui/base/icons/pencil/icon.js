"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PencilIcon", {
    enumerable: true,
    get: function() {
        return PencilIcon;
    }
});
const _icons = require('../icons');
const _iconpencillargeinlinesvg = _interop_require_default(require("./icon-pencil-large.inline.svg"));
const _iconpencilinlinesvg = _interop_require_default(require("./icon-pencil.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const PencilIcon = (0, _icons.createIcon)({
    tiny: _iconpencillargeinlinesvg.default,
    small: _iconpencillargeinlinesvg.default,
    medium: _iconpencilinlinesvg.default,
    large: _iconpencillargeinlinesvg.default
});
