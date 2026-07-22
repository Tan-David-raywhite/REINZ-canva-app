"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AnimatedSpinnerIcon", {
    enumerable: true,
    get: function() {
        return AnimatedSpinnerIcon;
    }
});
const _icons = require('../icons');
const _iconanimatedspinnerlargeinlinesvg = _interop_require_default(require("./icon-animated-spinner-large.inline.svg"));
const _iconanimatedspinnersmallinlinesvg = _interop_require_default(require("./icon-animated-spinner-small.inline.svg"));
const _iconanimatedspinnertinyinlinesvg = _interop_require_default(require("./icon-animated-spinner-tiny.inline.svg"));
const _iconanimatedspinnerinlinesvg = _interop_require_default(require("./icon-animated-spinner.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AnimatedSpinnerIcon = (0, _icons.createIcon)({
    tiny: _iconanimatedspinnertinyinlinesvg.default,
    small: _iconanimatedspinnersmallinlinesvg.default,
    medium: _iconanimatedspinnerinlinesvg.default,
    large: _iconanimatedspinnerlargeinlinesvg.default
}, {
    spinning: true
});
