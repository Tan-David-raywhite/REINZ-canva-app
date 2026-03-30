import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { TimeInput as EaselTimeInput } from '../../../../../../base/form/time_input/time_input';
/** 
 * An input that accepts time values.
 *
 * Time input field used for collecting time of the day.
 * 12 or 24 hour time format is chosen for display depending on the user's region.
 *
 * @example
 * ```tsx
 * // Basic time input
 * <TimeInput
 *   value={timeInMs}
 *   onChange={(value) => setTimeInMs(value)}
 * />
 *
 * // Time input with constraints
 * <TimeInput
 *   value={timeInMs}
 *   min={8 * 60 * 60 * 1000} // 8:00 AM
 *   max={17 * 60 * 60 * 1000} // 5:00 PM
 *   onChange={(value) => setTimeInMs(value)}
 * />
 * ```
 */ export function TimeInput(props) {
    return _jsx(EaselTimeInput, {
        value: props.value,
        onChange: props.onChange,
        min: props.min,
        max: props.max,
        disabled: props.disabled,
        error: props.error,
        readOnly: props.readOnly,
        required: props.required,
        end: props.end,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        id: props.id,
        name: props.name,
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy
    });
}
