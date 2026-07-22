"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GlobeIcon", {
    enumerable: true,
    get: function() {
        return GlobeIcon;
    }
});
const _icons = require('../icons');
const _iconglobeinlinesvg = _interop_require_default(require("./icon-globe.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const GlobeIcon = (0, _icons.createIcon)({
    medium: _iconglobeinlinesvg.default
});
