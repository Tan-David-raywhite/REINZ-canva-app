"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThemeBoundary", {
    enumerable: true,
    get: function() {
        return ThemeBoundary;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _theme = require('../../../../../base/theme/theme');
function ThemeBoundary({ children, theme }) {
    return (0, _jsxruntime.jsx)(_theme.ThemeBoundary, {
        light: theme,
        dark: theme,
        classicLight: theme,
        classicDark: theme,
        children: children
    });
}
