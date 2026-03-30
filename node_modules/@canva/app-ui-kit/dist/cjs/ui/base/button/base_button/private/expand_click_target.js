"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ExpandClickTarget", {
    enumerable: true,
    get: function() {
        return ExpandClickTarget;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _expand_click_targetcss = _interop_require_default(require("./expand_click_target.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ExpandClickTarget({ children }) {
    if (children == null) return (0, _jsxruntime.jsx)("span", {
        "aria-hidden": true,
        className: _expand_click_targetcss.default.expandedClickTarget
    });
    return children({
        className: _expand_click_targetcss.default.expandClickTarget
    });
}
