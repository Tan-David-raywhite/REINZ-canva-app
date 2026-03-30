"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function() {
        return Slider;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _box = require('../../../box/box');
const _controllable_value = require('../../../controllable_value/controllable_value');
const _label = require('../../label/label');
const _number_input = require('../../number_input/number_input');
const _layout = require('../../../layout/layout');
const _bar_snap_behavior = require("./bar_snap_behavior");
const _base_slider = require("./base_slider");
const _slidercss = _interop_require_default(require("./slider.css"));
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
const Slider = (0, _mobxreactlite.observer)(function Slider({ id: idProp, min, max, snap, step, origin, value: valueProp, defaultValue, onDragStart, onDragEnd: onDragEndProp, trackColor, fillColor, label, labelSize = 'medium', ariaLabelledBy, disabled, autoFocusNumericInput, NumericInput, blurOnDragEnd, ariaLabel, ariaDescribedBy, ariaValueText, onChange: onChangeProp, onChangeComplete }) {
    const [value, setValue] = (0, _controllable_value.useControllableValue)({
        value: valueProp,
        defaultValue
    });
    const [initialValue, setInitialValue] = _react.useState(value);
    const snapBehaviour = _react.useMemo(()=>snap != null ? new _bar_snap_behavior.Snap(snap) : undefined, [
        snap
    ]);
    const onChange = _react.useCallback((newValue)=>{
        setValue(newValue);
        setInitialValue(newValue);
        onChangeProp?.(newValue);
    }, [
        setValue,
        onChangeProp
    ]);
    const onInputChangeComplete = _react.useCallback((newValue)=>{
        try {
            onChange(newValue);
            onChangeComplete?.(initialValue, newValue);
        } finally{
            setInitialValue(newValue);
        }
    }, [
        initialValue,
        setInitialValue,
        onChange,
        onChangeComplete
    ]);
    const generatedId = _react.useId();
    const id = idProp || generatedId;
    const labelId = _react.useId();
    const internalAriaLabelledBy = ariaLabelledBy ?? (label == null ? undefined : labelId);
    const slider = (0, _jsxruntime.jsx)(_box.Box, {
        width: "full",
        className: _slidercss.default.slider,
        children: (0, _jsxruntime.jsx)(_base_slider.BaseSlider, {
            id: id,
            value: value,
            min: min,
            max: max,
            step: step,
            snap: snap,
            origin: origin,
            onChange: onChange,
            onDragStart: onDragStart,
            onDragEnd: onDragEndProp,
            snapBehavior: snapBehaviour,
            disabled: disabled,
            blurOnDragEnd: blurOnDragEnd,
            ariaLabel: ariaLabel,
            ariaLabelledBy: internalAriaLabelledBy,
            ariaDescribedBy: ariaDescribedBy,
            ariaValueText: ariaValueText,
            onChangeComplete: onChangeComplete,
            trackColor: trackColor,
            fillColor: fillColor
        })
    });
    const numberInput = (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: NumericInput !== 'none' && (0, _jsxruntime.jsx)(SliderNumberInput, {
            className: _slidercss.default.numberInputContainer,
            inputClassName: _slidercss.default.numberInput,
            value: value,
            NumericInput: NumericInput,
            min: min,
            max: max,
            step: step,
            disabled: disabled,
            autoFocus: autoFocusNumericInput,
            onChangeComplete: onInputChangeComplete,
            ariaLabel: ariaLabel,
            ariaLabelledBy: internalAriaLabelledBy,
            ariaDescribedBy: ariaDescribedBy
        })
    });
    const maybeWithNumberInput = NumericInput !== 'none' ? (0, _jsxruntime.jsxs)(_layout.Columns, {
        spacing: "2u",
        alignY: "center",
        children: [
            (0, _jsxruntime.jsx)(_layout.Column, {
                children: slider
            }),
            (0, _jsxruntime.jsx)(_layout.Column, {
                width: "content",
                children: numberInput
            })
        ]
    }) : slider;
    const maybeWithLabel = label ? (0, _jsxruntime.jsxs)(_layout.Rows, {
        align: "stretch",
        spacing: "0",
        children: [
            (0, _jsxruntime.jsx)(_label.Label, {
                id: labelId,
                htmlFor: id,
                size: labelSize,
                variant: "regular",
                children: label
            }),
            maybeWithNumberInput
        ]
    }) : maybeWithNumberInput;
    return (0, _jsxruntime.jsx)(_box.Box, {
        className: _slidercss.default.container,
        children: maybeWithLabel
    });
});
function SliderNumberInput({ className, inputClassName, min, max, step, disabled, NumericInput = _number_input.NumberInput, ariaLabel, ariaLabelledBy, autoFocus, ariaDescribedBy, value, onChangeComplete, ...rest }) {
    const [inputStringValue, setInputStringValue] = _react.useState(value == null ? '' : value.toString());
    const previousValueProp = _react.useRef(value);
    const inlineInputRef = _react.useRef(null);
    _react.useEffect(()=>{
        if (value !== previousValueProp.current) {
            setInputStringValue(value == null ? '' : value.toString());
            previousValueProp.current = value;
        }
    }, [
        value
    ]);
    const handleChange = _react.useCallback((_numberValue, stringValue)=>{
        if (!disabled) setInputStringValue(stringValue);
    }, [
        disabled
    ]);
    const handleChangeComplete = _react.useCallback((newValue)=>{
        if (newValue == null || isNaN(newValue)) {
            setInputStringValue(value == null ? '' : value.toString());
            return;
        }
        setInputStringValue(newValue == null ? '' : newValue.toString());
        onChangeComplete?.(newValue);
    }, [
        onChangeComplete,
        value
    ]);
    const handleFocus = _react.useCallback(()=>{
        window.setTimeout(()=>{
            inlineInputRef.current && inlineInputRef.current.select();
        }, 0);
    }, []);
    const handleBlur = _react.useCallback(()=>{
        const selection = window.getSelection();
        selection && selection.removeAllRanges();
    }, []);
    return (0, _jsxruntime.jsx)(NumericInput, {
        className: className,
        inputClassName: inputClassName,
        value: inputStringValue,
        disabled: disabled,
        placeholder: "--",
        ariaLabel: ariaLabel,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy,
        onChange: handleChange,
        onChangeComplete: handleChangeComplete,
        onBlur: handleBlur,
        onFocus: handleFocus,
        blurOnEnterKeyDown: true,
        min: min,
        max: max,
        step: step,
        ref: inlineInputRef,
        autoFocus: autoFocus,
        ...rest
    });
}
