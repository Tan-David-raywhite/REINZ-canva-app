"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeIcon", {
    enumerable: true,
    get: function() {
        return CodeIcon;
    }
});
const _icons = require('../icons');
const _iconcodelargeinlinesvg = _interop_require_default(require("./icon-code-large.inline.svg"));
const _iconcodesmallinlinesvg = _interop_require_default(require("./icon-code-small.inline.svg"));
const _iconcodeinlinesvg = _interop_require_default(require("./icon-code.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CodeIcon = (0, _icons.createIcon)({
    small: _iconcodesmallinlinesvg.default,
    medium: _iconcodeinlinesvg.default,
    large: _iconcodelargeinlinesvg.default
});
