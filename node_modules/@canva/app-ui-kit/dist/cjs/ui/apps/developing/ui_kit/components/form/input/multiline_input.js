"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultilineInput", {
    enumerable: true,
    get: function() {
        return MultilineInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _multiline_input = require('../../../../../../base/form/multiline_input/multiline_input');
function MultilineInput(props) {
    return (0, _jsxruntime.jsx)(_multiline_input.MultilineInput, {
        autoGrow: props.autoGrow,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        maxLength: props.maxLength,
        maxRows: props.maxRows,
        minRows: props.minRows,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        footer: props.footer,
        placeholder: props.placeholder,
        readOnly: props.readOnly,
        required: props.required,
        value: props.value
    });
}
