"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TabPanels", {
    enumerable: true,
    get: function() {
        return TabPanels;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = require("react");
const _behavior = require("./behavior");
const _tab_panelscss = _interop_require_default(require("./tab_panels.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TabPanels = ({ children })=>{
    return (0, _jsxruntime.jsx)(_behavior.TabsElementsProvider, {
        children: (0, _jsxruntime.jsx)(TabPanelsContainer, {
            children: children
        })
    });
};
const TabPanelsContainer = ({ children })=>{
    const ref = (0, _react.useRef)(null);
    const { isAnimating } = (0, _behavior.useTabsElements)();
    return (0, _jsxruntime.jsx)("div", {
        ref: ref,
        className: (0, _classnames.default)(_tab_panelscss.default.container, isAnimating && _tab_panelscss.default.hideOverflow),
        children: children
    });
};
