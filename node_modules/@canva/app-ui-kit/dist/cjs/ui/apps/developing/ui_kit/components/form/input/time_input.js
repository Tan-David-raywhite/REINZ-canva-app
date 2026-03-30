"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TimeInput", {
    enumerable: true,
    get: function() {
        return TimeInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _time_input = require('../../../../../../base/form/time_input/time_input');
function TimeInput(props) {
    return (0, _jsxruntime.jsx)(_time_input.TimeInput, {
        value: props.value,
        onChange: props.onChange,
        min: props.min,
        max: props.max,
        disabled: props.disabled,
        error: props.error,
        readOnly: props.readOnly,
        required: props.required,
        end: props.end,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        id: props.id,
        name: props.name,
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy
    });
}
