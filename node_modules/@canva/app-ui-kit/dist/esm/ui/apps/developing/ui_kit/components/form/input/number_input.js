import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { NumberInput as EaselNumberInput } from '../../../../../../base/form/number_input/number_input';
/** 
 *  Input for number-based values. */ export function NumberInput(props) {
    const spinProps = props.hasSpinButtons ? {
        hasSpinButtons: props.hasSpinButtons,
        decrementAriaLabel: props.decrementAriaLabel,
        incrementAriaLabel: props.incrementAriaLabel
    } : {
        hasSpinButtons: props.hasSpinButtons
    };
    return _jsx(EaselNumberInput, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        max: props.max,
        maximumFractionDigits: props.maximumFractionDigits,
        maxLength: props.maxLength,
        min: props.min,
        name: props.name,
        onChange: props.onChange,
        onChangeComplete: props.onChangeComplete,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        pattern: props.pattern,
        placeholder: props.placeholder,
        step: props.step,
        value: props.value,
        ...spinProps
    });
}
