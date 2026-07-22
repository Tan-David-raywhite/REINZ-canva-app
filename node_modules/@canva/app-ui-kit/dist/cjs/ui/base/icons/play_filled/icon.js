"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PlayFilledIcon", {
    enumerable: true,
    get: function() {
        return PlayFilledIcon;
    }
});
const _icons = require('../icons');
const _iconplayfilledsmallinlinesvg = _interop_require_default(require("./icon-play-filled-small.inline.svg"));
const _iconplayfilledinlinesvg = _interop_require_default(require("./icon-play-filled.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const PlayFilledIcon = (0, _icons.createIcon)({
    small: _iconplayfilledsmallinlinesvg.default,
    medium: _iconplayfilledinlinesvg.default
});
