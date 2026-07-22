"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChevronRightIcon", {
    enumerable: true,
    get: function() {
        return ChevronRightIcon;
    }
});
const _icons = require('../icons');
const _iconchevronrightlargeinlinesvg = _interop_require_default(require("./icon-chevron-right-large.inline.svg"));
const _iconchevronrightsmallinlinesvg = _interop_require_default(require("./icon-chevron-right-small.inline.svg"));
const _iconchevronrighttinyinlinesvg = _interop_require_default(require("./icon-chevron-right-tiny.inline.svg"));
const _iconchevronrightinlinesvg = _interop_require_default(require("./icon-chevron-right.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ChevronRightIcon = (0, _icons.createIcon)({
    tiny: _iconchevronrighttinyinlinesvg.default,
    small: _iconchevronrightsmallinlinesvg.default,
    medium: _iconchevronrightinlinesvg.default,
    large: _iconchevronrightlargeinlinesvg.default
}, {
    followDirection: true
});
