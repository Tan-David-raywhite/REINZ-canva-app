"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TeamIcon", {
    enumerable: true,
    get: function() {
        return TeamIcon;
    }
});
const _icons = require('../icons');
const _iconteaminlinesvg = _interop_require_default(require("./icon-team.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TeamIcon = (0, _icons.createIcon)({
    medium: _iconteaminlinesvg.default
});
