"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileInputInternal", {
    enumerable: true,
    get: function() {
        return FileInputInternal;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _pointer_input_state = require('../../../../a11y/pointer_input_state/pointer_input_state');
const _button = require('../../../../button/button');
const _icon = require('../../../../icons/cloud_upload/icon');
const _layout = require('../../../../layout/layout');
const _responsive_image = require('../../../../responsive_image/responsive_image');
const _typography = require('../../../../typography/typography');
const _file_inputcss = _interop_require_default(require("./file_input.css"));
const _file_inputmessages = require("./file_input.messages");
const _file_input_illustration = require("./file_input_illustration");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const FileInputInternal = (0, _mobxreactlite.observer)(({ mode = 'droparea', variant = 'compact', image: imageProp = 'none', multiple, accept, disabled, error, ariaControls, onClick: onClickProp, id, ariaLabelledBy, ariaDescribedBy, stretchButton })=>{
    const onClick = _react.useCallback((e)=>{
        if (!disabled) {
            e.stopPropagation();
            onClickProp();
        }
    }, [
        disabled,
        onClickProp
    ]);
    const uploadButton = (0, _jsxruntime.jsx)(_button.Button, {
        variant: "secondary",
        icon: _icon.CloudUploadIcon,
        onClick: onClick,
        disabled: disabled,
        ariaControls: ariaControls,
        id: id,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy,
        stretch: stretchButton && mode === 'button',
        children: multiple ? _file_inputmessages.FileInputMessages.fileSelectorButtonText() : _file_inputmessages.FileInputMessages.fileSelectorButtonTextSingleFile()
    });
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    if (mode === 'button') return uploadButton;
    const image = imageProp !== 'none' ? imageProp : variant === 'display' ? 'filetype' : 'none';
    return ((0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)(_file_inputcss.default.dropArea, {
                [_file_inputcss.default.error]: error,
                [_file_inputcss.default.disabled]: disabled,
                [_file_inputcss.default.hoverSupported]: !disabled && hoverSupported
            }),
            onClick: onClick,
            children: (0, _jsxruntime.jsxs)(_layout.Rows, {
                spacing: "1u",
                align: "center",
                children: [
                    image !== 'none' && (0, _jsxruntime.jsx)(_responsive_image.PixelDensityResponsiveImage, {
                        sources: image === 'filetype' ? (0, _file_input_illustration.getUploadIllustrations)(accept) : image,
                        alt: "",
                        className: _file_inputcss.default.illustration,
                        draggable: false
                    }),
                    (0, _jsxruntime.jsx)("span", {
                        className: _file_inputcss.default.subText,
                        children: (0, _jsxruntime.jsx)(_typography.Text, {
                            tone: _typography.InheritColor,
                            size: "small",
                            tagName: "span",
                            alignment: "center",
                            children: multiple ? _file_inputmessages.FileInputMessages.dropAreaText() : _file_inputmessages.FileInputMessages.dropAreaTextSingleFile()
                        })
                    }),
                    uploadButton
                ]
            })
        }));
});
