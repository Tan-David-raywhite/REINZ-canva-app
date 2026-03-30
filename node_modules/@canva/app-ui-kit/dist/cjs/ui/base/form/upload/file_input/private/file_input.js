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
const _react = _interop_require_wildcard(require("react"));
const _file_selector = require('../../file_selector/file_selector');
const _dropzone = require("./dropzone");
const _dropzone_context = require("./dropzone_context");
const _dropzone_overlay = require("./dropzone_overlay");
const _file_input_internal = require("./file_input_internal");
const _file_validation = require("./file_validation");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const FileInput = (props)=>{
    const dropzoneContext = (0, _dropzone_context.useDropzoneContext)();
    const { disabled, accept, onDropAcceptedFiles, onDropRejectedFiles, multiple, mode = 'droparea' } = {
        ...dropzoneContext,
        ...props
    };
    const selectFile = (files)=>{
        const { acceptedFiles, rejectedFiles } = (0, _file_validation.getValidatedFiles)(files, multiple, accept);
        acceptedFiles.length > 0 && onDropAcceptedFiles?.(acceptedFiles);
        rejectedFiles.length > 0 && onDropRejectedFiles?.(rejectedFiles);
    };
    const inputWithSelector = (0, _jsxruntime.jsx)(_file_selector.WithFileSelector, {
        onSelectFiles: selectFile,
        mimeTypes: accept,
        multiple: multiple,
        children: ({ onClick })=>(0, _jsxruntime.jsx)(_file_input_internal.FileInputInternal, {
                ...props,
                disabled: !!disabled,
                accept: accept,
                multiple: multiple,
                onClick: onClick
            })
    });
    return dropzoneContext != null || mode === 'button' ? inputWithSelector : (0, _jsxruntime.jsx)(FileInputDropzone, {
        disabled: disabled,
        accept: accept,
        multiple: multiple,
        onDropAcceptedFiles: onDropAcceptedFiles,
        onDropRejectedFiles: onDropRejectedFiles,
        children: inputWithSelector
    });
};
const FileInputDropzone = _react.memo(({ children, ...restProps })=>{
    return (0, _jsxruntime.jsxs)(_dropzone.Dropzone, {
        ...restProps,
        showOverlay: false,
        children: [
            children,
            (0, _jsxruntime.jsx)(_dropzone_overlay.DropzoneOverlayInternal, {
                variant: "input"
            })
        ]
    });
});
