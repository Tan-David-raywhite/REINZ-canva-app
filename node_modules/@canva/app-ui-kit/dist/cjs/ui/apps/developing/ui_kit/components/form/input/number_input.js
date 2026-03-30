"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NumberInput", {
    enumerable: true,
    get: function() {
        return NumberInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _number_input = require('../../../../../../base/form/number_input/number_input');
function NumberInput(props) {
    const spinProps = props.hasSpinButtons ? {
        hasSpinButtons: props.hasSpinButtons,
        decrementAriaLabel: props.decrementAriaLabel,
        incrementAriaLabel: props.incrementAriaLabel
    } : {
        hasSpinButtons: props.hasSpinButtons
    };
    return (0, _jsxruntime.jsx)(_number_input.NumberInput, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        max: props.max,
        maximumFractionDigits: props.maximumFractionDigits,
        maxLength: props.maxLength,
        min: props.min,
        name: props.name,
        onChange: props.onChange,
        onChangeComplete: props.onChangeComplete,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        pattern: props.pattern,
        placeholder: props.placeholder,
        step: props.step,
        value: props.value,
        ...spinProps
    });
}
