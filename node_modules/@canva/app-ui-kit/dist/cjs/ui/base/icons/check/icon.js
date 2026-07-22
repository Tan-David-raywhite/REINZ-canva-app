"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckIcon", {
    enumerable: true,
    get: function() {
        return CheckIcon;
    }
});
const _icons = require('../icons');
const _iconchecksmallinlinesvg = _interop_require_default(require("./icon-check-small.inline.svg"));
const _iconchecktinyinlinesvg = _interop_require_default(require("./icon-check-tiny.inline.svg"));
const _iconcheckinlinesvg = _interop_require_default(require("./icon-check.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CheckIcon = (0, _icons.createIcon)({
    tiny: _iconchecktinyinlinesvg.default,
    small: _iconchecksmallinlinesvg.default,
    medium: _iconcheckinlinesvg.default
});
