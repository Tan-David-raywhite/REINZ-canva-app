"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function() {
        return Slider;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _slider = require('../../../../../../base/form/slider/slider');
function Slider(props) {
    return (0, _jsxruntime.jsx)(_slider.Slider, {
        id: props.id,
        min: props.min,
        max: props.max,
        step: props.step,
        origin: props.origin,
        disabled: props.disabled,
        value: props.value,
        defaultValue: props.defaultValue,
        onChange: props.onChange,
        onChangeComplete: props.onChangeComplete,
        labelSize: "medium"
    });
}
