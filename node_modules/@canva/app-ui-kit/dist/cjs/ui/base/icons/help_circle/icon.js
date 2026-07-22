"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HelpCircleIcon", {
    enumerable: true,
    get: function() {
        return HelpCircleIcon;
    }
});
const _icons = require('../icons');
const _iconhelpcircleinlinesvg = _interop_require_default(require("./icon-help-circle.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const HelpCircleIcon = (0, _icons.createIcon)({
    medium: _iconhelpcircleinlinesvg.default
});
