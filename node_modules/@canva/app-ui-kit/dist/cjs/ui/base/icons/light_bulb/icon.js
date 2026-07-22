"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LightBulbIcon", {
    enumerable: true,
    get: function() {
        return LightBulbIcon;
    }
});
const _icons = require('../icons');
const _iconlightbulblargeinlinesvg = _interop_require_default(require("./icon-light-bulb-large.inline.svg"));
const _iconlightbulbsmallinlinesvg = _interop_require_default(require("./icon-light-bulb-small.inline.svg"));
const _iconlightbulbtinyinlinesvg = _interop_require_default(require("./icon-light-bulb-tiny.inline.svg"));
const _iconlightbulbinlinesvg = _interop_require_default(require("./icon-light-bulb.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LightBulbIcon = (0, _icons.createIcon)({
    tiny: _iconlightbulbtinyinlinesvg.default,
    small: _iconlightbulbsmallinlinesvg.default,
    medium: _iconlightbulbinlinesvg.default,
    large: _iconlightbulblargeinlinesvg.default
});
