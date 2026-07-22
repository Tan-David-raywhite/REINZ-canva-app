"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OpenInNewIcon", {
    enumerable: true,
    get: function() {
        return OpenInNewIcon;
    }
});
const _icons = require('../icons');
const _iconopeninnewsmallinlinesvg = _interop_require_default(require("./icon-open-in-new-small.inline.svg"));
const _iconopeninnewtinyinlinesvg = _interop_require_default(require("./icon-open-in-new-tiny.inline.svg"));
const _iconopeninnewinlinesvg = _interop_require_default(require("./icon-open-in-new.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const OpenInNewIcon = (0, _icons.createIcon)({
    tiny: _iconopeninnewtinyinlinesvg.default,
    small: _iconopeninnewsmallinlinesvg.default,
    medium: _iconopeninnewinlinesvg.default
}, {
    followDirection: true
});
