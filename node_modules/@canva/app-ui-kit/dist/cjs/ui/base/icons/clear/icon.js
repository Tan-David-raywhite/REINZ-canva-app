"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearIcon", {
    enumerable: true,
    get: function() {
        return ClearIcon;
    }
});
const _icons = require('../icons');
const _iconclearinlinesvg = _interop_require_default(require("./icon-clear.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ClearIcon = (0, _icons.createIcon)({
    medium: _iconclearinlinesvg.default
});
