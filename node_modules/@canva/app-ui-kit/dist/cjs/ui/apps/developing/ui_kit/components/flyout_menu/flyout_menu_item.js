"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlyoutMenuItem", {
    enumerable: true,
    get: function() {
        return FlyoutMenuItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _flyout_menu = require('../../../../../base/flyout_menu/flyout_menu');
function FlyoutMenuItem(props) {
    return (0, _jsxruntime.jsx)(_flyout_menu.FlyoutMenuItem, {
        children: props.children,
        onClick: props.onClick,
        start: props.start,
        end: props.end,
        disabled: props.disabled
    });
}
