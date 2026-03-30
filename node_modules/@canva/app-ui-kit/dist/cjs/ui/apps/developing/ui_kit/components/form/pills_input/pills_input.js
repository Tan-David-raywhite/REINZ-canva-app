"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PillsInput", {
    enumerable: true,
    get: function() {
        return PillsInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _pills_input = require('../../../../../../base/form/pills_input/pills_input');
function PillsInput(props) {
    return (0, _jsxruntime.jsx)(_pills_input.PillsInput, {
        value: props.value,
        inputValue: props.inputValue,
        disabled: props.disabled,
        loading: props.loading,
        error: props.error,
        placeholder: props.placeholder,
        additionalPlaceholder: props.additionalPlaceholder,
        minRows: props.minRows,
        maxRows: props.maxRows,
        onPillAdd: props.onPillAdd,
        onLastPillRemove: props.onLastPillRemove,
        onInputChange: props.onInputChange,
        onClick: props.onClick,
        onClearClick: props.onClearClick,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        ariaLabel: props.ariaLabel,
        role: "textbox",
        addPillKeyCombinations: [
            'Enter'
        ]
    });
}
