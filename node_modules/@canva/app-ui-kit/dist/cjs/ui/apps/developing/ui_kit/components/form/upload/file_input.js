"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileInput", {
    enumerable: true,
    get: function() {
        return FileInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _file_input = require('../../../../../../base/form/upload/file_input/file_input');
function FileInput(props) {
    return (0, _jsxruntime.jsx)(_file_input.FileInput, {
        accept: props.accept,
        disabled: props.disabled,
        mode: "button",
        multiple: props.multiple ?? false,
        onDropAcceptedFiles: props.onDropAcceptedFiles,
        onDropRejectedFiles: props.onDropRejectedFiles,
        stretchButton: props.stretchButton,
        id: props.id
    });
}
