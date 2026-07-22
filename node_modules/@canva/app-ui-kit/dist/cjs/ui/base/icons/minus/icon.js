"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MinusIcon", {
    enumerable: true,
    get: function() {
        return MinusIcon;
    }
});
const _icons = require('../icons');
const _iconminussmallinlinesvg = _interop_require_default(require("./icon-minus-small.inline.svg"));
const _iconminustinyinlinesvg = _interop_require_default(require("./icon-minus-tiny.inline.svg"));
const _iconminusinlinesvg = _interop_require_default(require("./icon-minus.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const MinusIcon = (0, _icons.createIcon)({
    tiny: _iconminustinyinlinesvg.default,
    small: _iconminussmallinlinesvg.default,
    medium: _iconminusinlinesvg.default
});
