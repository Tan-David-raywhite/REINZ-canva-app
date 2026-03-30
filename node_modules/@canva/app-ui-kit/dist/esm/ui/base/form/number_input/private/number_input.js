import { jsx as _jsx } from "react/jsx-runtime";
import { composeRefs } from '../../../../../base/react/compose_refs';
import classNames from 'classnames';
import * as React from 'react';
import { Button } from '../../../button/button';
import { useRepeatClickOnHold } from '../../../button/repeat_click_on_hold/repeat_click_on_hold';
import { useControllableValue } from '../../../controllable_value/controllable_value';
import { BaseInput } from '../../base_input/base_input';
import { MinusIcon } from '../../../icons/minus/icon';
import { PlusIcon } from '../../../icons/plus/icon';
import styles, { getStyle } from './number_input.css';
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
export function NumberInput(
    { value: valueProp, defaultValue, onChange: onChangeProp, onChangeComplete: onChangeCompleteProp, onKeyDown: onKeyDownProp, step = 1, min, max, maximumFractionDigits, isValidCharacter: isValidCharacterProp, hasSpinButtons, decrementAriaLabel, incrementAriaLabel, ref, className: classNameProp, size = 'medium', ...passThroughProps }
) {
    const [value, setValue] = useControllableValue({
        value: valueProp != null ? valueProp.toString() : undefined,
        defaultValue: defaultValue != null ? defaultValue.toString() : undefined
    });
    const hasDecimals = maximumFractionDigits == null || maximumFractionDigits > 0;
    const hasNegative = min == null || min < 0;
    const [inputMode, setInputMode] = React.useState(hasDecimals ? 'decimal' : 'numeric');
    React.useEffect(()=>{
        if (isIphone() && hasNegative)
        setInputMode('text');
        else if (isAndroid() && hasNegative)
        setInputMode('numeric');
    }, [
        hasNegative
    ]);
    const isValidCharacter = React.useMemo(()=>{
        if (isValidCharacterProp) return isValidCharacterProp;
        if (hasDecimals) return hasNegative ? isDecimalCharacter : isNonNegativeDecimalCharacter;
        return hasNegative ? isIntegerCharacter : isNonNegativeIntegerCharacter;
    }, [
        isValidCharacterProp,
        hasDecimals,
        hasNegative
    ]);
    const updateValue = React.useCallback((newNumberValue, newValue)=>{
        if (newValue !== value) {
            setValue(newValue);
            onChangeProp && onChangeProp(newNumberValue, newValue);
        }
    }, [
        onChangeProp,
        value,
        setValue
    ]);
    const commit = React.useCallback((finalNumberValue)=>{
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
    const getNextStep = React.useCallback((operation)=>{
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
    const increment = React.useCallback(()=>{
        if (!canStep) return;
        const newValue = getNextStep('+');
        commit(newValue);
    }, [
        canStep,
        commit,
        getNextStep
    ]);
    const decrement = React.useCallback(()=>{
        if (!canStep) return;
        const newValue = getNextStep('-');
        commit(newValue);
    }, [
        canStep,
        commit,
        getNextStep
    ]);
    const setToMin = React.useCallback(()=>{
        if (!canChange || min == null) return;
        commit(min);
    }, [
        canChange,
        min,
        commit
    ]);
    const setToMax = React.useCallback(()=>{
        if (!canChange || max == null) return;
        commit(max);
    }, [
        canChange,
        max,
        commit
    ]);
    const onChange = React.useCallback((text)=>{
        if (!canChange) return;
        const newValue = sanitize(text, isValidCharacter);
        updateValue(cast(newValue), newValue);
    }, [
        canChange,
        updateValue,
        isValidCharacter
    ]);
    const onChangeComplete = React.useCallback((text)=>{
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
    const inputRef = React.createRef();
    const onKeyDown = React.useCallback((e)=>{
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
    const start = hasSpinButtons ? _jsx("div", {
        className: classNames(styles.startWrapper, getStyle(size)),
        children: _jsx(SpinButton, {
            operation: "-",
            onClick: decrement,
            ariaLabel: decrementAriaLabel,
            disabled: !canChange
        })
    }) : undefined;
    const end = hasSpinButtons ? _jsx("div", {
        className: classNames(styles.endWrapper, getStyle(size)),
        children: _jsx(SpinButton, {
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
    return _jsx(BaseInput, {
        ref: composeRefs(ref, inputRef),
        type: "text",
        inputMode: inputMode,
        value: value == null ? '' : value,
        onChange: onChange,
        onChangeComplete: onChangeComplete,
        onKeyDown: onKeyDown,
        start: start,
        end: end,
        textAlignCenter: hasSpinButtons ? true : undefined,
        className: classNames({
            [styles.withSpinButtons]: hasSpinButtons
        }, classNameProp),
        size: size,
        ...spinButtonProps,
        ...passThroughProps
    });
}
const SpinButton = ({ onClick, operation, disabled, ariaLabel })=>{
    const repeatClickProps = useRepeatClickOnHold({
        onClick,
        disabled,
        speed: 'slow'
    });
    return _jsx(Button, {
        variant: "tertiary",
        size: "small",
        icon: operation === '+' ? PlusIcon : MinusIcon,
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
export const isNonNegativeIntegerCharacter = (character)=>{
    return /^[0-9０-９]$/.test(character);
};
export const isIntegerCharacter = (character)=>{
    return /^[0-9０-９-−－ー]$/.test(character);
};
export const isNonNegativeDecimalCharacter = (character)=>{
    return /^[0-9０-９.．。]$/.test(character);
};
export const isDecimalCharacter = (character)=>{
    return /^[0-9０-９-−－ー.．。]$/.test(character);
};
export const isValidNumericKeyboardEvent = (e, isValidCharacter, value,
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
export const convertFullWidthNumerics = (text)=>{
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
export const getFractionDigits = (value)=>{
    const stringValue = value.toString();
    const index = stringValue.indexOf('.');
    return index === -1 ? 0 : stringValue.length - index - 1;
};
const roundToPrecision = (value, maximumFractionDigits)=>{
    const pow = Math.pow(10, maximumFractionDigits);
    return Math.round(value * pow) / pow;
};
export const getRoundedNumberValue = (value, maximumFractionDigits)=>{
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
export const snapToStep = (value, step, min, max)=>{
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
