"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TrashIcon", {
    enumerable: true,
    get: function() {
        return TrashIcon;
    }
});
const _icons = require('../icons');
const _icontrashsmallinlinesvg = _interop_require_default(require("./icon-trash-small.inline.svg"));
const _icontrashinlinesvg = _interop_require_default(require("./icon-trash.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TrashIcon = (0, _icons.createIcon)({
    small: _icontrashsmallinlinesvg.default,
    medium: _icontrashinlinesvg.default
});
