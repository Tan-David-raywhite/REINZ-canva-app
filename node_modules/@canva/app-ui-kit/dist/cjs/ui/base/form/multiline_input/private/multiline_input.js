"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultilineInput", {
    enumerable: true,
    get: function() {
        return MultilineInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _compose_refs = require('../../../../../base/react/compose_refs');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _controllable_value = require('../../../controllable_value/controllable_value');
const _flags = require('../../../flags/flags');
const _base_input = require('../../base_input/base_input');
const _temporary_exportscss = _interop_require_default(require('../../base_input/temporary_exports.css'));
const _input = require('../../internal/input');
const _metrics = require('../../../metrics/metrics');
const _multiline_inputcss = _interop_require_wildcard(require("./multiline_input.css"));
const _multiline_inputtestids = require("./multiline_input.testids");
const _multiline_input_field = require("./multiline_input_field");
const _resize = require("./resize");
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
const MIN_HEIGHT_PX_MEDIUM = _metrics.baseUnit * 5;
const MIN_HEIGHT_PX_LARGE = _metrics.baseUnit * 6;
const MultilineInput = ({ ref, ...props_ })=>{
    const { props, setPropOverrides } = (0, _input.usePropOverrides)(props_);
    const { onChange: onChangeProp, size = 'medium' } = props;
    const inputRef = _react.useRef(null);
    const [value, setValue] = (0, _controllable_value.useControllableValue)({
        value: props.value
    });
    const controls = (0, _input.useCreateInputControls)({
        focus: ()=>inputRef.current?.focus(),
        setDisabled: (disabled)=>setPropOverrides({
                disabled
            }),
        setValue: (value)=>{
            setValue(value);
            onChangeProp?.(value);
        }
    });
    const onChange = _react.useCallback((e)=>{
        setValue(e.target.value);
        onChangeProp?.(e.target.value, e);
    }, [
        onChangeProp,
        setValue
    ]);
    const hasResize = !props.autoGrow && !!props.resize;
    const { resizeContainerRef, resizeHandleRef } = (0, _resize.useResize)({
        minHeightPx: size === 'medium' ? MIN_HEIGHT_PX_MEDIUM : MIN_HEIGHT_PX_LARGE
    });
    const { enableHighContrastOverride } = (0, _flags.useEaselFlags)();
    const wrapperClassName = (0, _classnames.default)(_temporary_exportscss.default.wrapper, _multiline_inputcss.default.multilineWrapper, (0, _multiline_inputcss.getStyle)(size), {
        [_temporary_exportscss.default.borderless]: props.borderless,
        [_temporary_exportscss.default.highContrast]: enableHighContrastOverride
    }, props.className);
    const inputClassName = (0, _classnames.default)(_multiline_inputcss.default.multilineTextField, (0, _multiline_inputcss.getStyle)(size), props.inputClassName);
    return (0, _jsxruntime.jsx)(_base_input.InputWrapper, {
        className: wrapperClassName,
        disabled: props.disabled,
        error: props.error,
        ref: hasResize ? resizeContainerRef : undefined,
        testId: _multiline_inputtestids.MultilineInputTestIds.wrapper,
        children: (0, _jsxruntime.jsxs)(_input.BaseInputContextProvider, {
            controls: controls,
            value: value ?? '',
            children: [
                (0, _jsxruntime.jsx)(_multiline_input_field.MultilineInputField, {
                    ...props,
                    ref: (0, _compose_refs.composeRefs)(inputRef, ref),
                    value: value,
                    onChange: onChange,
                    className: inputClassName,
                    testId: _multiline_inputtestids.MultilineInputTestIds.textField
                }),
                props.footer,
                hasResize && (0, _jsxruntime.jsx)("div", {
                    ref: resizeHandleRef,
                    className: _multiline_inputcss.default.resizeHandle
                })
            ]
        })
    });
};
MultilineInput.displayName = 'MultilineInput';
