"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InputPill", {
    enumerable: true,
    get: function() {
        return InputPill;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _pills_input = require('../../../../../../../base/form/pills_input/pills_input');
function InputPill(props) {
    return (0, _jsxruntime.jsx)(_pills_input.InputPill, {
        text: props.text,
        tone: "secondary",
        disabled: props.disabled,
        maxWidth: props.maxWidth,
        onRemoveClick: props.onRemoveClick
    });
}
