"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SegmentedControl", {
    enumerable: true,
    get: function() {
        return SegmentedControl;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _segmented_control = require('../../../../../../base/form/segmented_control/segmented_control');
function SegmentedControl(props) {
    return (0, _jsxruntime.jsx)(_segmented_control.SegmentedControl, {
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
