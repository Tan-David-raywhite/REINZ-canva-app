import * as React from 'react';
/** 
 * The props for the `TimeInput` component.
 */
export type TimeInputProps = {
    /** 
         * The time of day represented as milliseconds since midnight.
         */
    value?: number;
    /** 
         * Function that is called anytime the input value changes.
         *
         * @param value - The number of milliseconds since midnight.
         */
    onChange?: (value: number | undefined) => void;
    /** 
         * The lowest time that can be entered.
         * Represented as milliseconds since midnight.
         */
    min?: number;
    /** 
         * The highest time that can be entered.
         * Represented as milliseconds since midnight.
         */
    max?: number;
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
         * A decorator to show at the end of the TimeInput.
         * If omitted, it defaults to showing a TimezoneDecorator.
         * Pass <></> if you want the decorator to be hidden.
         */
    end?: React.ReactNode;
    /** 
         * A callback that runs when the TimeInput loses focus.
         * @param event - The blur event of the TimeInput.
         */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the TimeInput gains focus.
         * @param event - The focus event of the TimeInput.
         */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * The DOM ID for the underlying `HTMLInputElement`.
         */
    id?: string;
    /** 
         * The name of the input.
         */
    name?: string;
    /** 
         * A short description of the purpose of this TimeInput.
         */
    ariaLabel?: string;
    /** 
         * The ID of the element that labels the input.
         */
    ariaLabelledBy?: string;
};
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
 */
export declare function TimeInput(props: TimeInputProps): React.JSX.Element;
