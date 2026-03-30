"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AvatarPlaceholder", {
    enumerable: true,
    get: function() {
        return AvatarPlaceholder;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _placeholder = require('../../placeholder/placeholder');
const _avatar_size = require("./avatar_size");
const _avatar_sizecss = _interop_require_default(require("./avatar_size.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AvatarPlaceholder = ({ size = 'medium', index, shape = 'circle' })=>{
    const sizeStyle = (0, _avatar_size.useAvatarSizeStyle)(size);
    return (0, _jsxruntime.jsx)("div", {
        className: _avatar_sizecss.default.sizedContainer,
        style: sizeStyle,
        children: (0, _jsxruntime.jsx)(_placeholder.Placeholder, {
            shape: shape,
            index: index
        })
    });
};
