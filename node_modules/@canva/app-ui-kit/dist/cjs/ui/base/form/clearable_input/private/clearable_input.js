"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearableInput", {
    enumerable: true,
    get: function() {
        return ClearableInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _keyboard = require('../../../device_capabilities/keyboard');
const _input_decorators = require('../../input_decorators/input_decorators');
const _text_input = require('../../text_input/text_input');
const _icon = require('../../../icons/chevron_left/icon');
const _icon1 = require('../../../icons/clear/icon');
const _clearable_inputcss = _interop_require_default(require("./clearable_input.css"));
const _clearable_inputmessages = require("./clearable_input.messages");
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
const ClearButtonIcon = ()=>(0, _jsxruntime.jsx)(_icon1.ClearIcon, {
        size: "medium",
        className: _clearable_inputcss.default.clearIcon
    });
function ClearableInput({ type = 'search', allowClear = 'when-not-empty', focusOnClear = true, onClear, showBackButton, BackButtonIcon = _icon.ChevronLeftIcon, onBack, inputClassName, borderless = true, blurOnEnterKeyDown: blurOnEnterKeyDownProp, onKeyDown, start, end, ref, ...inputProps }) {
    const inputRef = _react.useRef(null);
    const handleClear = _react.useCallback(()=>{
        onClear?.();
        if (focusOnClear) inputRef.current?.focus();
    }, [
        focusOnClear,
        onClear
    ]);
    const handleBack = _react.useCallback(()=>{
        onBack?.();
    }, [
        onBack
    ]);
    _react.useImperativeHandle(ref, ()=>{
        return {
            blur () {
                inputRef.current?.blur();
            },
            focus () {
                inputRef.current?.focus();
            },
            select () {
                inputRef.current?.select();
            }
        };
    }, []);
    const showClearButton = (allowClear === 'always' || allowClear === 'when-not-empty' && !!inputProps.value) && !inputProps.disabled;
    const isVirtualKeyboard = (0, _keyboard.useIsVirtualKeyboard)();
    const blurOnEnterKeyDown = blurOnEnterKeyDownProp ?? isVirtualKeyboard;
    return (0, _jsxruntime.jsx)(_text_input.TextInput, {
        type: type === 'search' ? 'search' : 'text',
        ref: inputRef,
        icon: showBackButton || type === 'text' ? undefined : {
            type,
            align: 'start'
        },
        borderless: borderless,
        blurOnEnterKeyDown: blurOnEnterKeyDown,
        onKeyDown: onKeyDown,
        start: showBackButton || start ? (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                showBackButton && (0, _jsxruntime.jsx)(_input_decorators.ButtonDecorator, {
                    label: _clearable_inputmessages.ClearableInputMessages.backTitle(),
                    icon: BackButtonIcon,
                    onClick: handleBack,
                    className: _clearable_inputcss.default.backButton
                }),
                typeof start === 'function' ? start() : start
            ]
        }) : undefined,
        end: showClearButton || end ? (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                showClearButton && (0, _jsxruntime.jsx)(_input_decorators.ButtonDecorator, {
                    label: _clearable_inputmessages.ClearableInputMessages.clearTitle(),
                    icon: ClearButtonIcon,
                    onClick: handleClear,
                    className: _clearable_inputcss.default.clearButton
                }),
                typeof end === 'function' ? end() : end
            ]
        }) : undefined,
        ...inputProps,
        inputClassName: (0, _classnames.default)(inputClassName, _clearable_inputcss.default.clearableInput)
    });
}
