"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Hide", {
    enumerable: true,
    get: function() {
        return Hide;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _hidecss = require("./hide.css");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Hide = ({ children, above, below, tagName: TagName = 'div' })=>{
    return (0, _jsxruntime.jsx)(TagName, {
        className: (0, _classnames.default)(above && (0, _hidecss.getStyle)(`hiddenAbove${capitalize(above)}`), below && (0, _hidecss.getStyle)(`hiddenBelow${capitalize(below)}`)),
        children: children
    });
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
