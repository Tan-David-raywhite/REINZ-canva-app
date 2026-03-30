"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileInputItem", {
    enumerable: true,
    get: function() {
        return FileInputItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _file_input = require('../../../../../../base/form/upload/file_input/file_input');
function FileInputItem(props) {
    return (0, _jsxruntime.jsx)(_file_input.FileInputItem, {
        label: props.label,
        onDeleteClick: props.onDeleteClick,
        disabled: props.disabled
    });
}
