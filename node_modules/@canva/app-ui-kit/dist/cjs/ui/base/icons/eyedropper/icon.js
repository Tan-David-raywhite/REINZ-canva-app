"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EyedropperIcon", {
    enumerable: true,
    get: function() {
        return EyedropperIcon;
    }
});
const _icons = require('../icons');
const _iconeyedropperinlinesvg = _interop_require_default(require("./icon-eyedropper.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const EyedropperIcon = (0, _icons.createIcon)({
    medium: _iconeyedropperinlinesvg.default
});
