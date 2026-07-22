"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CopyPlusIcon", {
    enumerable: true,
    get: function() {
        return CopyPlusIcon;
    }
});
const _icons = require('../icons');
const _iconcopyplussmallinlinesvg = _interop_require_default(require("./icon-copy-plus-small.inline.svg"));
const _iconcopyplusinlinesvg = _interop_require_default(require("./icon-copy-plus.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CopyPlusIcon = (0, _icons.createIcon)({
    small: _iconcopyplussmallinlinesvg.default,
    medium: _iconcopyplusinlinesvg.default
});
