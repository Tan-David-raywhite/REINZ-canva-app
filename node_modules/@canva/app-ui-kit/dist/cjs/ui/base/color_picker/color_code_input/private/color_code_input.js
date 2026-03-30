"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColorCodeInput", {
    enumerable: true,
    get: function() {
        return ColorCodeInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _color = require('../../../../../base/color/color');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _access_mode_state = require('../../../a11y/access_mode_state/access_mode_state');
const _box = require('../../../box/box');
const _hsv_color = require('../../hsv_color/hsv_color');
const _color_picker_provider = require('../../internal/color_picker_provider');
const _number_input = require('../../../form/number_input/number_input');
const _text_input = require('../../../form/text_input/text_input');
const _swatch = require('../../../swatch/swatch');
const _typography = require('../../../typography/typography');
const _color_code_inputcss = _interop_require_default(require("./color_code_input.css"));
const _color_code_inputmessages = require("./color_code_input.messages");
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
function ColorCodeInput({ color: colorProp, alpha: alphaProp, onChange: onChangeProp, onAlphaChange: onAlphaChangeProp, showAlpha = false, withSwatch = true, ariaLabel = _color_code_inputmessages.ColorCodeInputMessages.colorCodeInputLabel(), ariaLabelledBy, ariaDescribedBy, autoFocus = 'on-desktop' }) {
    const colorPicker = (0, _color_picker_provider.useColorPickerControls)();
    const setColor = colorPicker?.setColor;
    const colorPickerHex = (0, _color_picker_provider.useColorPickerHex)();
    const colorPickerAlpha = (0, _color_picker_provider.useColorPickerAlpha)();
    const color = colorProp ?? colorPickerHex ?? '#ffffff';
    const alpha = alphaProp ?? colorPickerAlpha ?? 1;
    const colorInputRef = _react.useRef(null);
    const alphaInputRef = _react.useRef(null);
    const recentlyBlurredRef = _react.useRef(false);
    const isMouseAccessMode = (0, _access_mode_state.useIsMouseAccessMode)();
    const [inputValue, setInputValue] = _react.useState(color);
    const [isHexFocused, setIsHexFocused] = _react.useState(false);
    const [isAlphaFocused, setIsAlphaFocused] = _react.useState(false);
    const onChange = _react.useCallback((value)=>{
        const inputLength = value.length;
        value = value.replace(/[^0-9a-f]/gi, '');
        const lengthDiff = inputLength - value.length;
        value = `#${value.slice(0, 6)}`;
        setInputValue(value);
        const fudgedValue = fudgeHex(value);
        setColor?.(_hsv_color.HsvColor.fromHexString(fudgedValue), 'hex');
        onChangeProp?.(fudgedValue);
        const colorInput = colorInputRef.current;
        if (colorInput) {
            const cursorPosition = colorInput.selectionStart - lengthDiff + 1;
            colorInput.value = value;
            colorInput.selectionStart = cursorPosition;
            colorInput.selectionEnd = cursorPosition;
        }
    }, [
        onChangeProp,
        setColor
    ]);
    const onAlphaChange = _react.useCallback((value)=>{
        const alpha = isNaN(value) ? 0 : Math.max(0, Math.min(100, value)) / 100;
        setColor?.({
            alpha
        }, 'alpha');
        onAlphaChangeProp?.(alpha);
    }, [
        onAlphaChangeProp,
        setColor
    ]);
    const onFocus = _react.useCallback(()=>{
        colorPicker?.onChangeStart?.();
        setIsHexFocused(true);
        if (!recentlyBlurredRef.current)
            setTimeout(()=>colorInputRef.current?.select());
    }, [
        colorPicker
    ]);
    const onBlur = _react.useCallback(()=>{
        setIsHexFocused(false);
        recentlyBlurredRef.current = true;
        setTimeout(()=>recentlyBlurredRef.current = false, 0);
    }, []);
    const onAlphaFocus = _react.useCallback(()=>{
        colorPicker?.onChangeStart?.();
        setIsAlphaFocused(true);
        alphaInputRef.current?.select();
    }, [
        colorPicker
    ]);
    const onAlphaBlur = _react.useCallback(()=>{
        setIsAlphaFocused(false);
    }, []);
    const onAlphaMouseDown = _react.useCallback((e)=>{
        if (e.target !== alphaInputRef.current) {
            e.stopPropagation();
            e.preventDefault();
            alphaInputRef.current?.focus();
        }
    }, []);
    const colorValue = fudgeHex(inputValue) === color ? inputValue : color;
    const { r, g, b } = _color.RgbColor.fromHexString(fudgeHex(colorValue));
    const valueWithAlpha = new _color.RgbaColor(r, g, b, alpha ?? 1).toRgbaString();
    const wrapperClassName = (0, _classnames.default)(_color_code_inputcss.default.inputWrapper, {
        [_color_code_inputcss.default.hexFocused]: isHexFocused && !isAlphaFocused && !isMouseAccessMode
    });
    const numInputWrapperClassName = (0, _classnames.default)(_color_code_inputcss.default.numInputWrapper, {
        [_color_code_inputcss.default.alphaFocused]: isAlphaFocused && !isMouseAccessMode
    });
    return (0, _jsxruntime.jsx)(_text_input.TextInput, {
        className: wrapperClassName,
        inputClassName: _color_code_inputcss.default.input,
        start: withSwatch ? (0, _jsxruntime.jsx)(_swatch.Swatch, {
            size: "xxsmall",
            fill: [
                valueWithAlpha
            ]
        }) : undefined,
        value: colorValue,
        end: showAlpha && (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                (0, _jsxruntime.jsx)(_box.Box, {
                    className: _color_code_inputcss.default.divider
                }),
                (0, _jsxruntime.jsxs)("div", {
                    className: numInputWrapperClassName,
                    onMouseDown: onAlphaMouseDown,
                    children: [
                        (0, _jsxruntime.jsx)(_number_input.NumberInput, {
                            ref: alphaInputRef,
                            className: _color_code_inputcss.default.numInput,
                            value: Math.round(alpha * 100),
                            borderless: true,
                            max: 100,
                            min: 0,
                            onChange: onAlphaChange,
                            onChangeComplete: colorPicker?.onChangeComplete,
                            onFocus: onAlphaFocus,
                            onBlur: onAlphaBlur,
                            ariaLabel: _color_code_inputmessages.ColorCodeInputMessages.alphaInputLabel(),
                            textAlignCenter: true
                        }),
                        (0, _jsxruntime.jsx)(_typography.Text, {
                            tone: "tertiary",
                            children: "%"
                        })
                    ]
                })
            ]
        }),
        disableSpellcheck: true,
        onChange: onChange,
        onChangeComplete: colorPicker?.onChangeComplete,
        onFocus: onFocus,
        onBlur: onBlur,
        ref: colorInputRef,
        textAlignCenter: !withSwatch && !showAlpha,
        autoFocus: autoFocus,
        ariaLabel: ariaLabel,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy
    });
}
const fudgeHex = (hex)=>{
    hex = hex.toLowerCase().replace(/[^0-9a-f]/g, '').slice(0, 6);
    hex = hex || 'ffffff';
    if (hex.length <= 3) {
        hex += '0'.repeat(3 - hex.length);
        hex = hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2);
    } else if (hex.length < 6) hex += '0'.repeat(6 - hex.length);
    return `#${hex}`;
};
