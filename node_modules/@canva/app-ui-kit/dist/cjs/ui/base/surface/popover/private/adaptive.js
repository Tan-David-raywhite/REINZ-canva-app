"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AdaptivePopover", {
    enumerable: true,
    get: function() {
        return AdaptivePopover;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _sheet = require('../../sheet/sheet');
const _popover = require("./popover");
function AdaptivePopover(props) {
    return (0, _sheet.useTypicalSheetAdaptation)() ? (0, _jsxruntime.jsx)(_sheet.Sheet, {
        ...props
    }) : (0, _jsxruntime.jsx)(_popover.Popover, {
        ...props
    });
}
