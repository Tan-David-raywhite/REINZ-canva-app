"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChevronDownIcon", {
    enumerable: true,
    get: function() {
        return ChevronDownIcon;
    }
});
const _icons = require('../icons');
const _iconchevrondownlargeinlinesvg = _interop_require_default(require("./icon-chevron-down-large.inline.svg"));
const _iconchevrondownsmallinlinesvg = _interop_require_default(require("./icon-chevron-down-small.inline.svg"));
const _iconchevrondowntinyinlinesvg = _interop_require_default(require("./icon-chevron-down-tiny.inline.svg"));
const _iconchevrondowninlinesvg = _interop_require_default(require("./icon-chevron-down.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ChevronDownIcon = (0, _icons.createIcon)({
    tiny: _iconchevrondowntinyinlinesvg.default,
    small: _iconchevrondownsmallinlinesvg.default,
    medium: _iconchevrondowninlinesvg.default,
    large: _iconchevrondownlargeinlinesvg.default
});
