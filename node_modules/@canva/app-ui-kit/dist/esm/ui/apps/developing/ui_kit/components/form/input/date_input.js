import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { DateTimeInput as EaselDateTimeInput, DateTimePickerDecorator } from '../../../../../../base/form/date_time_input/date_time_input';
function getCommonProps(props) {
    return {
        disabled: props.disabled,
        error: props.error,
        readOnly: props.readOnly,
        required: props.required,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onClick: props.onClick,
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy,
        end: (endProps)=>_jsx(DateTimePickerDecorator, {
                ...endProps,
                locale: document.documentElement.lang
            })
    };
}
/** 
 * An input that accepts dates and optionally time.
 *
 * @example
 * ```tsx
 * import { DateInput } from '@canva/app-ui-kit';
 *
 * // Basic date input
 * <DateInput
 *   mode="date"
 *   value={{ year: 2025, month: 6, day: 15 }}
 *   onChange={(value) => setValue(value)}
 * />
 *
 * // Date input with constraints
 * <DateInput
 *   mode="date"
 *   value={dateValue}
 *   min="today"
 *   max={{ year: 2025, month: 12, day: 31 }}
 *   onChange={handleDateChange}
 *   required
 * />
 *
 * // DateTime input
 * <DateInput
 *   mode="datetime"
 *   value={{ year: 2025, month: 6, day: 15, hours: 14, minutes: 30 }}
 *   onChange={handleDateTimeChange}
 * />
 *
 * // DateTime input with business hours constraints
 * <DateInput
 *   mode="datetime"
 *   value={appointmentTime}
 *   min={{ year: 2025, month: 6, day: 1, hours: 9, minutes: 0 }}
 *   max={{ year: 2025, month: 12, day: 31, hours: 17, minutes: 0 }}
 *   onChange={setAppointmentTime}
 *   onChangeComplete={saveAppointment}
 *   ariaLabel="Select appointment date and time"
 * />
 * ```
 */ export function DateInput(props) {
    const { mode = 'date' } = props;
    const commonProps = getCommonProps(props);
    if (mode === 'date') {
        const dateProps = props;
        return _jsx(EaselDateTimeInput, {
            mode: "date",
            value: dateProps.value,
            min: dateProps.min,
            max: dateProps.max,
            onChange: dateProps.onChange,
            onChangeComplete: dateProps.onChangeComplete,
            ...commonProps
        });
    }
    const dateTimeProps = props;
    return _jsx(EaselDateTimeInput, {
        mode: "datetime",
        value: dateTimeProps.value,
        min: dateTimeProps.min,
        max: dateTimeProps.max,
        onChange: dateTimeProps.onChange,
        onChangeComplete: dateTimeProps.onChangeComplete,
        ...commonProps
    });
}
