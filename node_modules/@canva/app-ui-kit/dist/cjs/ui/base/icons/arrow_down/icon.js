"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrowDownIcon", {
    enumerable: true,
    get: function() {
        return ArrowDownIcon;
    }
});
const _icons = require('../icons');
const _iconarrowdownsmallinlinesvg = _interop_require_default(require("./icon-arrow-down-small.inline.svg"));
const _iconarrowdowninlinesvg = _interop_require_default(require("./icon-arrow-down.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ArrowDownIcon = (0, _icons.createIcon)({
    small: _iconarrowdownsmallinlinesvg.default,
    medium: _iconarrowdowninlinesvg.default
});
