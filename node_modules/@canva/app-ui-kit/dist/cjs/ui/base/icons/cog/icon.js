"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CogIcon", {
    enumerable: true,
    get: function() {
        return CogIcon;
    }
});
const _icons = require('../icons');
const _iconcoginlinesvg = _interop_require_default(require("./icon-cog.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CogIcon = (0, _icons.createIcon)({
    medium: _iconcoginlinesvg.default
});
