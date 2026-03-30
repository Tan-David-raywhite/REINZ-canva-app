import * as React from 'react';
export type SpinButtonRelatedProps = {
    hasSpinButtons: true;
    /** 
         * Label for spin button that decrements the value.
         */
    decrementAriaLabel: string;
    /** 
         * Label for spin button that increments the value.
         */
    incrementAriaLabel: string;
} | {
    hasSpinButtons?: false;
    decrementAriaLabel?: never;
    incrementAriaLabel?: never;
};
export type NumberInputProps = {
    /** 
         * Initial value of the input in uncontrolled mode.
         */
    defaultValue?: number;
    /** 
         * When true, it blocks interaction with the number input.
         */
    disabled?: boolean;
    /** 
         * If true, applies error styling and alerts screen readers that there is an error.
         */
    error?: boolean;
    /** 
         * If true, spin buttons to increment and decrement value are rendered as decorators.
         */
    hasSpinButtons?: boolean;
    /** 
         * DOM ID for the input element.
         */
    id?: string;
    /** 
         * Maximum value.
         */
    max?: number;
    /** 
         * The maximum number of fraction digits to format the final value.
         * Note that this will round the final value after user commits their change in number input
         * but will not format `value` prop.
         */
    maximumFractionDigits?: number;
    /** 
         * Maximum length of characters of input value.
         */
    maxLength?: number;
    /** 
         * Minimum value.
         */
    min?: number;
    /** 
         * Name of the form control.
         */
    name?: string;
    /** 
         * A callback that runs whenever the value changes. This includes React change events on the input element as well as `onChangeComplete` events.
         * @param valueAsNumber - The value of the input as a number. It is `undefined` for an empty value and `NaN` if the value is not a valid number.
         * @param valueAsString - The current value of the input as a string.
         * See the `value` prop for controlled mode details.
         */
    onChange?(valueAsNumber: number | undefined, valueAsString: string): void;
    /** 
         * A callback that runs when the value is committed, such as on input blur, key down events for ArrowUp and ArrowDown, or spin button clicks.
         * @param value - The committed value as a number. It is `undefined` if the input is empty or contains an invalid string value.
         */
    onChangeComplete?(value: number | undefined): void;
    /** 
         * A callback that runs when the input loses focus.
         * @param event - The blur event of the input.
         */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the input gains focus.
         * @param event - The focus event of the input.
         */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when a key is pressed down while the input is focused.
         * @param event - The keyboard event of the input.
         */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /** 
         * Regular expression which the input's value must match
         * for the value to pass constraint validation.
         */
    pattern?: string;
    /** 
         * Text that appears when this input has no value.
         */
    placeholder?: string;
    /** 
         * Value to increment by.
         */
    step?: number;
    /** 
         * Value of the input in controlled mode.
         * It can be number or string because while value input is still in progress,
         * some valid values may not be represented accurately as a number value.
         * For example, '-' will parse as `NaN` and '2.' will parse as 2 without the trailing period.
         *
         * If you want to handle number value only, it is recommended to use uncontrolled mode
         * with `onChangeComplete` prop instead of `value` and `onChange` prop combination.
         * Alternatively if value can be non-negative number only, you can use `onChange`
         * and rely on `value` always being a valid number.
         */
    value?: string | number;
} & SpinButtonRelatedProps;
/** 
 *  Input for number-based values. */
export declare function NumberInput(props: NumberInputProps): React.JSX.Element;
