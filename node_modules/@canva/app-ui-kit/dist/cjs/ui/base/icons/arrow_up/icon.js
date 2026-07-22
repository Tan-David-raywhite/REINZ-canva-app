"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrowUpIcon", {
    enumerable: true,
    get: function() {
        return ArrowUpIcon;
    }
});
const _icons = require('../icons');
const _iconarrowupsmallinlinesvg = _interop_require_default(require("./icon-arrow-up-small.inline.svg"));
const _iconarrowupinlinesvg = _interop_require_default(require("./icon-arrow-up.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ArrowUpIcon = (0, _icons.createIcon)({
    small: _iconarrowupsmallinlinesvg.default,
    medium: _iconarrowupinlinesvg.default
});
