"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RadioGroup", {
    enumerable: true,
    get: function() {
        return RadioGroup;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _radio_group = require('../../../../../../base/form/radio_group/radio_group');
function RadioGroup(props) {
    return (0, _jsxruntime.jsx)(_radio_group.RadioGroup, {
        variant: "radio",
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        id: props.id,
        name: props.name,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        options: props.options,
        value: props.value
    });
}
