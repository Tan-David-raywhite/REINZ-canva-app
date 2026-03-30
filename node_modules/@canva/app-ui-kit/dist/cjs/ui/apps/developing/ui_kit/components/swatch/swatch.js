"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Swatch () {
        return Swatch;
    },
    get variants () {
        return variants;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _swatch = require('../../../../../base/swatch/swatch');
const variants = [
    'solid',
    'outline'
];
function Swatch(props) {
    return (0, _jsxruntime.jsx)(_swatch.Swatch, {
        fill: props.fill,
        tooltipLabel: props.tooltipLabel,
        variant: props.variant || 'solid',
        onClick: props.onClick,
        onDelete: props.onDelete,
        active: props.active,
        size: "small",
        disabled: props.disabled
    });
}
