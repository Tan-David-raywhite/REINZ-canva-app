"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ArrowLeftIcon", {
    enumerable: true,
    get: function() {
        return ArrowLeftIcon;
    }
});
const _icons = require('../icons');
const _iconarrowleftsmallinlinesvg = _interop_require_default(require("./icon-arrow-left-small.inline.svg"));
const _iconarrowleftinlinesvg = _interop_require_default(require("./icon-arrow-left.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ArrowLeftIcon = (0, _icons.createIcon)({
    small: _iconarrowleftsmallinlinesvg.default,
    medium: _iconarrowleftinlinesvg.default
}, {
    followDirection: true
});
