"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EyeSlashIcon", {
    enumerable: true,
    get: function() {
        return EyeSlashIcon;
    }
});
const _icons = require('../icons');
const _iconeyeslashsmallinlinesvg = _interop_require_default(require("./icon-eye-slash-small.inline.svg"));
const _iconeyeslashinlinesvg = _interop_require_default(require("./icon-eye-slash.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const EyeSlashIcon = (0, _icons.createIcon)({
    small: _iconeyeslashsmallinlinesvg.default,
    medium: _iconeyeslashinlinesvg.default
});
