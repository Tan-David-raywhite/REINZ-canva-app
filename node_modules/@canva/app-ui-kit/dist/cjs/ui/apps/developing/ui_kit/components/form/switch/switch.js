"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Switch", {
    enumerable: true,
    get: function() {
        return Switch;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _switch = require('../../../../../../base/form/switch/switch');
function Switch(props) {
    return (0, _jsxruntime.jsx)(_switch.Switch, {
        id: props.id,
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        label: props.label,
        labelWeight: "regular",
        description: props.description,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        value: props.value
    });
}
