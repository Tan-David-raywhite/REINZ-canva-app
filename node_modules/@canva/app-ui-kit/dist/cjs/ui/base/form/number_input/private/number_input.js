"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get NumberInput () {
        return NumberInput;
    },
    get convertFullWidthNumerics () {
        return convertFullWidthNumerics;
    },
    get getFractionDigits () {
        return getFractionDigits;
    },
    get getRoundedNumberValue () {
        return getRoundedNumberValue;
    },
    get isDecimalCharacter () {
        return isDecimalCharacter;
    },
    get isIntegerCharacter () {
        return isIntegerCharacter;
    },
    get isNonNegativeDecimalCharacter () {
        return isNonNegativeDecimalCharacter;
    },
    get isNonNegativeIntegerCharacter () {
        return isNonNegativeIntegerCharacter;
    },
    get isValidNumericKeyboardEvent () {
        return isValidNumericKeyboardEvent;
    },
    get snapToStep () {
        return snapToStep;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _compose_refs = require('../../../../../base/react/compose_refs');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _button = require('../../../button/button');
const _repeat_click_on_hold = require('../../../button/repeat_click_on_hold/repeat_click_on_hold');
const _controllable_value = require('../../../controllable_value/controllable_value');
const _base_input = require('../../base_input/base_input');
const _icon = require('../../../icons/minus/icon');
const _icon1 = require('../../../icons/plus/icon');
const _number_inputcss = _interop_require_wildcard(require("./number_input.css"));
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
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
function NumberInput({ value: valueProp, defaultValue, onChange: onChangeProp, onChangeComplete: onChangeCompleteProp, onKeyDown: onKeyDownProp, step = 1, min, max, maximumFractionDigits, isValidCharacter: isValidCharacterProp, hasSpinButtons, decrementAriaLabel, incrementAriaLabel, ref, className: classNameProp, size = 'medium', ...passThroughProps }) {
    const [value, setValue] = (0, _controllable_value.useControllableValue)({
        value: valueProp != null ? valueProp.toString() : undefined,
        defaultValue: defaultValue != null ? defaultValue.toString() : undefined
    });
    const hasDecimals = maximumFractionDigits == null || maximumFractionDigits > 0;
    const hasNegative = min == null || min < 0;
    const [inputMode, setInputMode] = _react.useState(hasDecimals ? 'decimal' : 'numeric');
    _react.useEffect(()=>{
        if (isIphone() && hasNegative)
        setInputMode('text');
        else if (isAndroid() && hasNegative)
        setInputMode('numeric');
    }, [
        hasNegative
    ]);
    const isValidCharacter = _react.useMemo(()=>{
        if (isValidCharacterProp) return isValidCharacterProp;
        if (hasDecimals) return hasNegative ? isDecimalCharacter : isNonNegativeDecimalCharacter;
        return hasNegative ? isIntegerCharacter : isNonNegativeIntegerCharacter;
    }, [
        isValidCharacterProp,
        hasDecimals,
        hasNegative
    ]);
    const updateValue = _react.useCallback((newNumberValue, newValue)=>{
        if (newValue !== value) {
            setValue(newValue);
            onChangeProp && onChangeProp(newNumberValue, newValue);
        }
    }, [
        onChangeProp,
        value,
        setValue
    ]);
    const commit = _react.useCallback((finalNumberValue)=>{
        const stringValue = finalNumberValue == null ? '' : finalNumberValue.toString();
        updateValue(finalNumberValue, stringValue);
        onChangeCompleteProp && onChangeCompleteProp(finalNumberValue);
    }, [
        onChangeCompleteProp,
        updateValue
    ]);
    const castedValue = cast(value || '');
    const canChange = !passThroughProps.disabled && !passThroughProps.readOnly;
    const canStep = canChange && (value == null || value === '' || Number.isFinite(castedValue));
    const snapStep = step === 'any' ? 1 : step;
    const getNextStep = _react.useCallback((operation)=>{
        if (value == null || value === '') {
            const minOrMax = operation === '+' ? max : min;
            return minOrMax != null ? minOrMax : snapStep;
        }
        const currentNumberValue = castedValue;
        const snappedValue = snapToStep(currentNumberValue, snapStep, min, max);
        if (operation === '+' && snappedValue > currentNumberValue || operation === '-' && snappedValue < currentNumberValue)
        return snappedValue;
        if (operation === '+')
            return snapToStep(snappedValue + snapStep, snapStep, min, max);
        return snapToStep(snappedValue - snapStep, snapStep, min, max);
    }, [
        value,
        castedValue,
        min,
        max,
        snapStep
    ]);
    const increment = _react.useCallback(()=>{
        if (!canStep) return;
        const newValue = getNextStep('+');
        commit(newValue);
    }, [
        canStep,
        commit,
        getNextStep
    ]);
    const decrement = _react.useCallback(()=>{
        if (!canStep) return;
        const newValue = getNextStep('-');
        commit(newValue);
    }, [
        canStep,
        commit,
        getNextStep
    ]);
    const setToMin = _react.useCallback(()=>{
        if (!canChange || min == null) return;
        commit(min);
    }, [
        canChange,
        min,
        commit
    ]);
    const setToMax = _react.useCallback(()=>{
        if (!canChange || max == null) return;
        commit(max);
    }, [
        canChange,
        max,
        commit
    ]);
    const onChange = _react.useCallback((text)=>{
        if (!canChange) return;
        const newValue = sanitize(text, isValidCharacter);
        updateValue(cast(newValue), newValue);
    }, [
        canChange,
        updateValue,
        isValidCharacter
    ]);
    const onChangeComplete = _react.useCallback((text)=>{
        if (!canChange) return;
        const finalNumberValue = getFinalNumberValue(text, min, max, maximumFractionDigits);
        commit(finalNumberValue);
    }, [
        canChange,
        commit,
        min,
        max,
        maximumFractionDigits
    ]);
    const inputRef = _react.createRef();
    const onKeyDown = _react.useCallback((e)=>{
        const selectionStart = inputRef.current?.selectionStart || undefined;
        if (!isValidNumericKeyboardEvent(e, isValidCharacter, value, selectionStart)) {
            e.preventDefault();
            return;
        }
        onKeyDownProp && onKeyDownProp(e);
        switch(e.key){
            case 'ArrowUp':
                increment();
                break;
            case 'ArrowDown':
                decrement();
                break;
            case 'Home':
                e.preventDefault();
                setToMin();
                break;
            case 'End':
                e.preventDefault();
                setToMax();
                break;
            default:
                break;
        }
    }, [
        onKeyDownProp,
        isValidCharacter,
        value,
        increment,
        decrement,
        setToMax,
        setToMin,
        inputRef
    ]);
    const start = hasSpinButtons ? (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_number_inputcss.default.startWrapper, (0, _number_inputcss.getStyle)(size)),
        children: (0, _jsxruntime.jsx)(SpinButton, {
            operation: "-",
            onClick: decrement,
            ariaLabel: decrementAriaLabel,
            disabled: !canChange
        })
    }) : undefined;
    const end = hasSpinButtons ? (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_number_inputcss.default.endWrapper, (0, _number_inputcss.getStyle)(size)),
        children: (0, _jsxruntime.jsx)(SpinButton, {
            operation: "+",
            onClick: increment,
            ariaLabel: incrementAriaLabel,
            disabled: !canChange
        })
    }) : undefined;
    const spinButtonProps = isIOS() ? {} : {
        role: 'spinbutton',
        ariaValueNow: Number.isFinite(castedValue) ? castedValue : undefined,
        ariaValueText: value,
        ariaValueMin: min,
        ariaValueMax: max
    };
    return (0, _jsxruntime.jsx)(_base_input.BaseInput, {
        ref: (0, _compose_refs.composeRefs)(ref, inputRef),
        type: "text",
        inputMode: inputMode,
        value: value == null ? '' : value,
        onChange: onChange,
        onChangeComplete: onChangeComplete,
        onKeyDown: onKeyDown,
        start: start,
        end: end,
        textAlignCenter: hasSpinButtons ? true : undefined,
        className: (0, _classnames.default)({
            [_number_inputcss.default.withSpinButtons]: hasSpinButtons
        }, classNameProp),
        size: size,
        ...spinButtonProps,
        ...passThroughProps
    });
}
const SpinButton = ({ onClick, operation, disabled, ariaLabel })=>{
    const repeatClickProps = (0, _repeat_click_on_hold.useRepeatClickOnHold)({
        onClick,
        disabled,
        speed: 'slow'
    });
    return (0, _jsxruntime.jsx)(_button.Button, {
        variant: "tertiary",
        size: "small",
        icon: operation === '+' ? _icon1.PlusIcon : _icon.MinusIcon,
        ariaLabel: ariaLabel,
        tabIndex: -1,
        disabled: disabled,
        ...repeatClickProps
    });
};
const isIOS = ()=>{
    return globalNavigator != null && !!globalNavigator.userAgent.match(/iphone|ipad/gi);
};
const isIphone = ()=>{
    return globalNavigator != null && !!globalNavigator.userAgent.match(/iphone/gi);
};
const isAndroid = ()=>{
    return globalNavigator != null && !!globalNavigator.userAgent.match(/android/gi);
};
const isNonNegativeIntegerCharacter = (character)=>{
    return /^[0-9０-９]$/.test(character);
};
const isIntegerCharacter = (character)=>{
    return /^[0-9０-９-−－ー]$/.test(character);
};
const isNonNegativeDecimalCharacter = (character)=>{
    return /^[0-9０-９.．。]$/.test(character);
};
const isDecimalCharacter = (character)=>{
    return /^[0-9０-９-−－ー.．。]$/.test(character);
};
const isValidNumericKeyboardEvent = (e, isValidCharacter, value,
selectionStart = 0)=>{
    if (e.key == null || e.ctrlKey || e.altKey || e.metaKey)
        return true;
    if (e.key.length !== 1)
        return true;
    if (!isValidCharacter(e.key))
        return false;
    if (e.key === '-')
    return selectionStart === 0;
    if (e.key === '.')
    return value == null || !value.includes('.');
    return true;
};
const sanitize = (text, isValidCharacter)=>{
    return text.split('').filter(isValidCharacter).join('');
};
const FULL_WIDTH_NUMBERS = '０１２３４５６７８９';
const HALF_WIDTH_NUMBERS = '0123456789';
const convertFullWidthNumerics = (text)=>{
    return text.replace(/[０-９]/g, (fullWidthNumber)=>{
        return HALF_WIDTH_NUMBERS[FULL_WIDTH_NUMBERS.indexOf(fullWidthNumber)];
    }).replace(/[−－ー]/g, ()=>{
        return '-';
    }).replace(/[．。]/g, ()=>{
        return '.';
    });
};
const cast = (text)=>{
    if (text === '') return undefined;
    return Number(convertFullWidthNumerics(text));
};
const clamp = (value, min, max)=>{
    if (min != null && min > value) return min;
    if (max != null && max < value) return max;
    return value;
};
const getFractionDigits = (value)=>{
    const stringValue = value.toString();
    const index = stringValue.indexOf('.');
    return index === -1 ? 0 : stringValue.length - index - 1;
};
const roundToPrecision = (value, maximumFractionDigits)=>{
    const pow = Math.pow(10, maximumFractionDigits);
    return Math.round(value * pow) / pow;
};
const getRoundedNumberValue = (value, maximumFractionDigits)=>{
    if (value == null) return undefined;
    const numberValue = typeof value === 'string' ? cast(value) : value;
    return numberValue == null ? undefined : roundToPrecision(numberValue, maximumFractionDigits);
};
const getFinalNumberValue = (text, min, max, maximumFractionDigits)=>{
    const value = cast(text);
    if (Number.isNaN(value) || value == null) return undefined;
    let result = clamp(value, min, max);
    if (maximumFractionDigits != null) result = roundToPrecision(result, maximumFractionDigits);
    return result;
};
const snapToStep = (value, step, min, max)=>{
    const remainder = (value - (min == null ? 0 : min)) % step;
    let result = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (min != null) {
        if (result < min) result = min;
        else if (max != null && result > max) result = min + Math.floor((max - min) / step) * step;
    } else if (max != null && result > max) result = Math.floor(max / step) * step;
    const precision = getFractionDigits(step);
    if (precision > 0) result = roundToPrecision(result, precision);
    return result;
};
