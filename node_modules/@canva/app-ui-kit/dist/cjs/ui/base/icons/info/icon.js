"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InfoIcon", {
    enumerable: true,
    get: function() {
        return InfoIcon;
    }
});
const _icons = require('../icons');
const _iconinfosmallinlinesvg = _interop_require_default(require("./icon-info-small.inline.svg"));
const _iconinfoinlinesvg = _interop_require_default(require("./icon-info.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const InfoIcon = (0, _icons.createIcon)({
    small: _iconinfosmallinlinesvg.default,
    medium: _iconinfoinlinesvg.default
});
