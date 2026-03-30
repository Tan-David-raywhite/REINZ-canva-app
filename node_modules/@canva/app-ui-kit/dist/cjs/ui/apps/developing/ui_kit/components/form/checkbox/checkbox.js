"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Checkbox", {
    enumerable: true,
    get: function() {
        return Checkbox;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _checkbox = require('../../../../../../base/form/checkbox/checkbox');
function Checkbox(props) {
    return (0, _jsxruntime.jsx)(_checkbox.Checkbox, {
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        disabled: props.disabled,
        description: props.description,
        id: props.id,
        label: props.label,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        value: props.value
    });
}
