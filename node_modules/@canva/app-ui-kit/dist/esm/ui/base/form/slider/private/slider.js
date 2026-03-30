import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Box } from '../../../box/box';
import { useControllableValue } from '../../../controllable_value/controllable_value';
import { Label } from '../../label/label';
import { NumberInput } from '../../number_input/number_input';
import { Column, Columns, Rows } from '../../../layout/layout';
import { Snap } from './bar_snap_behavior';
import { BaseSlider } from './base_slider';
import styles from './slider.css';
export const Slider = observer(function Slider({ id: idProp, min, max, snap, step, origin, value: valueProp, defaultValue, onDragStart, onDragEnd: onDragEndProp, trackColor, fillColor, label, labelSize = 'medium', ariaLabelledBy, disabled, autoFocusNumericInput, NumericInput, blurOnDragEnd, ariaLabel, ariaDescribedBy, ariaValueText, onChange: onChangeProp, onChangeComplete }) {
    const [value, setValue] = useControllableValue({
        value: valueProp,
        defaultValue
    });
    const [initialValue, setInitialValue] = React.useState(value);
    const snapBehaviour = React.useMemo(()=>snap != null ? new Snap(snap) : undefined, [
        snap
    ]);
    const onChange = React.useCallback((newValue)=>{
        setValue(newValue);
        setInitialValue(newValue);
        onChangeProp?.(newValue);
    }, [
        setValue,
        onChangeProp
    ]);
    const onInputChangeComplete = React.useCallback((newValue)=>{
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
    const generatedId = React.useId();
    const id = idProp || generatedId;
    const labelId = React.useId();
    const internalAriaLabelledBy = ariaLabelledBy ?? (label == null ? undefined : labelId);
    const slider = _jsx(Box, {
        width: "full",
        className: styles.slider,
        children: _jsx(BaseSlider, {
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
    const numberInput = _jsx(_Fragment, {
        children: NumericInput !== 'none' && _jsx(SliderNumberInput, {
            className: styles.numberInputContainer,
            inputClassName: styles.numberInput,
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
    const maybeWithNumberInput = NumericInput !== 'none' ? _jsxs(Columns, {
        spacing: "2u",
        alignY: "center",
        children: [
            _jsx(Column, {
                children: slider
            }),
            _jsx(Column, {
                width: "content",
                children: numberInput
            })
        ]
    }) : slider;
    const maybeWithLabel = label ? _jsxs(Rows, {
        align: "stretch",
        spacing: "0",
        children: [
            _jsx(Label, {
                id: labelId,
                htmlFor: id,
                size: labelSize,
                variant: "regular",
                children: label
            }),
            maybeWithNumberInput
        ]
    }) : maybeWithNumberInput;
    return _jsx(Box, {
        className: styles.container,
        children: maybeWithLabel
    });
});
function SliderNumberInput({ className, inputClassName, min, max, step, disabled, NumericInput = NumberInput, ariaLabel, ariaLabelledBy, autoFocus, ariaDescribedBy, value, onChangeComplete, ...rest }) {
    const [inputStringValue, setInputStringValue] = React.useState(value == null ? '' : value.toString());
    const previousValueProp = React.useRef(value);
    const inlineInputRef = React.useRef(null);
    React.useEffect(()=>{
        if (value !== previousValueProp.current) {
            setInputStringValue(value == null ? '' : value.toString());
            previousValueProp.current = value;
        }
    }, [
        value
    ]);
    const handleChange = React.useCallback((_numberValue, stringValue)=>{
        if (!disabled) setInputStringValue(stringValue);
    }, [
        disabled
    ]);
    const handleChangeComplete = React.useCallback((newValue)=>{
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
    const handleFocus = React.useCallback(()=>{
        window.setTimeout(()=>{
            inlineInputRef.current && inlineInputRef.current.select();
        }, 0);
    }, []);
    const handleBlur = React.useCallback(()=>{
        const selection = window.getSelection();
        selection && selection.removeAllRanges();
    }, []);
    return _jsx(NumericInput, {
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
