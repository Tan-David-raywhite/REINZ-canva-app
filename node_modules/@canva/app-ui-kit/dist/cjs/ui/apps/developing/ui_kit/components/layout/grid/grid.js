"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Grid", {
    enumerable: true,
    get: function() {
        return Grid;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _layout = require('../../../../../../base/layout/layout');
function Grid(props) {
    return (0, _jsxruntime.jsx)(_layout.Grid, {
        children: props.children,
        columns: props.columns,
        spacing: props.spacing,
        spacingX: props.spacingX,
        spacingY: props.spacingY,
        alignY: props.alignY,
        alignX: props.alignX
    });
}
