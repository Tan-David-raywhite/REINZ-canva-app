"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LockOpenIcon", {
    enumerable: true,
    get: function() {
        return LockOpenIcon;
    }
});
const _icons = require('../icons');
const _iconlockopenlargeinlinesvg = _interop_require_default(require("./icon-lock-open-large.inline.svg"));
const _iconlockopensmallinlinesvg = _interop_require_default(require("./icon-lock-open-small.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LockOpenIcon = (0, _icons.createIcon)({
    medium: _iconlockopenlargeinlinesvg.default,
    small: _iconlockopensmallinlinesvg.default,
    large: _iconlockopenlargeinlinesvg.default
});
