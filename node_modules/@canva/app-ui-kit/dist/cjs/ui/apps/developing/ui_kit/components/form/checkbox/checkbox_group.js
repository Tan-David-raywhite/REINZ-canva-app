"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckboxGroup", {
    enumerable: true,
    get: function() {
        return CheckboxGroup;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _checkbox = require('../../../../../../base/form/checkbox/checkbox');
function CheckboxGroup(props) {
    return (0, _jsxruntime.jsx)(_checkbox.CheckboxGroup, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        id: props.id,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        options: props.options,
        value: props.value
    });
}
