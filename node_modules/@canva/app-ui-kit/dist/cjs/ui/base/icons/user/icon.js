"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserIcon", {
    enumerable: true,
    get: function() {
        return UserIcon;
    }
});
const _icons = require('../icons');
const _iconusersmallinlinesvg = _interop_require_default(require("./icon-user-small.inline.svg"));
const _iconuserinlinesvg = _interop_require_default(require("./icon-user.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const UserIcon = (0, _icons.createIcon)({
    medium: _iconuserinlinesvg.default,
    small: _iconusersmallinlinesvg.default
});
