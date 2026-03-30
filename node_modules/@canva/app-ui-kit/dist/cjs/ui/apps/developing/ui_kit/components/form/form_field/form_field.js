"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FormField", {
    enumerable: true,
    get: function() {
        return FormField;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _form_field = require('../../../../../../base/form/form_field/form_field');
function FormField(props) {
    return (0, _jsxruntime.jsx)(_form_field.FormField, {
        control: ({ id, error, value })=>props.control({
                id: id,
                error,
                value
            }),
        description: props.description,
        labelMarker: props.labelMarker,
        error: props.error,
        label: props.label,
        value: props.value
    });
}
