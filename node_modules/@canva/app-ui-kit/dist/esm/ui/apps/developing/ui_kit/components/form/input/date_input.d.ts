import * as React from 'react';
export type DateObj = {
    year: number;
    month: number;
    day: number;
};
export type DateTimeObj = DateObj & {
    hours: number;
    minutes: number;
};
/** 
 * Base props shared by all DateInput modes
 */
type BaseDateInputProps = {
    /** 
         * If `true`, the user can't interact with the input.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * If `true`, the input is rendered in an error state and screen readers are alerted of the error.
         * @defaultValue false
         */
    error?: boolean;
    /** 
         * If `true`, the input is read-only.
         * @defaultValue false
         */
    readOnly?: boolean;
    /** 
         * If `true`, the input is marked as required.
         * @defaultValue false
         */
    required?: boolean;
    /** 
         * A callback that runs when the DateInput loses focus.
         * @param event - The blur event of the DateInput.
         */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the DateInput gains focus.
         * @param event - The focus event of the DateInput.
         */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the input is clicked.
         * @param event - The mouse event of the input.
         */
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    /** 
         * A short description of the purpose of this DateInput.
         */
    ariaLabel?: string;
    /** 
         * The ID of the element that labels the input.
         */
    ariaLabelledBy?: string;
};
/** 
 * Props specific to DateInput in date-only mode
 */
export type DateInputDateProps = BaseDateInputProps & {
    /** 
         * The input mode - determines whether time selection is included
         * @defaultValue 'date'
         */
    mode?: 'date';
    /** 
         * The current value selected in the input
         */
    value?: DateObj;
    /** 
         * The earliest value the user can select.
         * For date mode: DateObj or 'today' to set minimum to current date
         * For datetime mode: DateTimeObj only
         */
    min?: DateObj | 'today';
    /** 
         * The latest value the user can select
         */
    max?: DateObj;
    /** 
         * A callback that runs when the value of the DateInput changes.
         * @param value - The value selected by user.
         */
    onChange?: (value?: DateObj) => void;
    /** 
         * A callback that runs when the change is complete.
         * @param value - The value selected by user.
         */
    onChangeComplete?: (value?: DateObj) => void;
};
/** 
 * Props specific to DateInput in datetime mode
 */
export type DateInputDateTimeProps = BaseDateInputProps & {
    /** 
         * The input mode - determines whether time selection is included
         * @defaultValue 'datetime'
         */
    mode?: 'datetime';
    /** 
         * The current value selected in the input
         */
    value?: DateTimeObj;
    /** 
         * The earliest value the user can select.
         * For date mode: DateObj or 'today' to set minimum to current date
         * For datetime mode: DateTimeObj only
         */
    min?: DateTimeObj;
    /** 
         * The latest value the user can select
         */
    max?: DateTimeObj;
    /** 
         * A callback that runs when the value of the DateInput changes.
         * @param value - The value selected by user.
         */
    onChange?: (value?: DateTimeObj) => void;
    /** 
         * A callback that runs when the change is complete.
         * @param value - The value selected by user.
         */
    onChangeComplete?: (value?: DateTimeObj) => void;
};
/** 
 * The props for the `DateInput` component.
 */
export type DateInputProps = DateInputDateProps | DateInputDateTimeProps;
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
 */
export declare function DateInput(props: DateInputProps): React.JSX.Element;
export {};
