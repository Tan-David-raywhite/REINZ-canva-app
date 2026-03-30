"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Pill", {
    enumerable: true,
    get: function() {
        return Pill;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _pill = require('../../../../../base/pill/pill');
function Pill(props) {
    return (0, _jsxruntime.jsx)(_pill.Pill, {
        ...props,
        maxWidth: props.maxWidth,
        size: props.size || 'medium',
        tooltipLabel: typeof props.showTooltip === 'object' ? props.showTooltip?.label ?? props.text : props.showTooltip === true ? props.text : undefined,
        tooltipPlacement: typeof props.showTooltip === 'object' ? props.showTooltip?.placement : undefined,
        tooltipDisabled: typeof props.showTooltip === 'object' ? props.showTooltip?.disabled : undefined
    });
}
