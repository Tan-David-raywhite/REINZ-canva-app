"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextInput", {
    enumerable: true,
    get: function() {
        return TextInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _text_input = require('../../../../../../base/form/text_input/text_input');
function TextInput(props) {
    return (0, _jsxruntime.jsx)(_text_input.TextInput, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        type: props.type || 'text',
        maxLength: props.maxLength,
        name: props.name,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        placeholder: props.placeholder,
        value: props.value,
        start: props.start,
        end: props.end
    });
}
