"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PauseIcon", {
    enumerable: true,
    get: function() {
        return PauseIcon;
    }
});
const _icons = require('../icons');
const _iconpausesmallinlinesvg = _interop_require_default(require("./icon-pause-small.inline.svg"));
const _iconpauseinlinesvg = _interop_require_default(require("./icon-pause.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const PauseIcon = (0, _icons.createIcon)({
    small: _iconpausesmallinlinesvg.default,
    medium: _iconpauseinlinesvg.default
});
