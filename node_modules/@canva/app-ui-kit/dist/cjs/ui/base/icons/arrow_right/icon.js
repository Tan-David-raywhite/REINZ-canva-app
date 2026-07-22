"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrowRightIcon", {
    enumerable: true,
    get: function() {
        return ArrowRightIcon;
    }
});
const _icons = require('../icons');
const _iconarrowrightsmallinlinesvg = _interop_require_default(require("./icon-arrow-right-small.inline.svg"));
const _iconarrowrightinlinesvg = _interop_require_default(require("./icon-arrow-right.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ArrowRightIcon = (0, _icons.createIcon)({
    small: _iconarrowrightsmallinlinesvg.default,
    medium: _iconarrowrightinlinesvg.default
}, {
    followDirection: true
});
