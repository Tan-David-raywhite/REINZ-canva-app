import * as React from 'react';
import type { IconElement } from '../../../icons/icons';
/** 
 * The props of an individual pill in `PillsInput` component.
 */
export type PillsInputItem = {
    /** 
         * The text content of the pill.
         */
    value: string;
    /** 
         * Whether the pill is in loading status, for example, being validated.
         */
    isLoading?: boolean;
    /** 
         * When specified, an icon will be shown at the start of the pill.
         */
    icon?: () => IconElement;
    /** 
         * When specified, there will be a clear button at the end of the pill, and the clear button triggers this callback when clicked.
         */
    onRemoveClick?(): void;
};
/** 
 * The props of the `PillsInput` component.
 */
export type PillsInputProps = {
    /** 
         * The pills added to the input.
         */
    value: PillsInputItem[];
    /** 
         * The value typed by the user that are not added as a pill yet.
         */
    inputValue: string;
    /** 
         * Controls whether the pills input is disabled.
         */
    disabled?: boolean;
    /** 
         * Controls whether the pills input is loading.
         */
    loading?: boolean;
    /** 
         * Indicates invalid value or inputValue.
         */
    error?: boolean;
    /** 
         * The placeholder text shown when there is no content in the input box.
         */
    placeholder?: string;
    /** 
         * The placeholder text shown when there are already pills in the input box.
         */
    additionalPlaceholder?: string;
    /** 
         * Controls the minimum number of rows the input container will occupy.
         */
    minRows?: number;
    /** 
         * Controls the maximum number of rows of input container will occupy.
         * If the pills overflow, user can scroll vertically.
         */
    maxRows?: number;
    /** 
         * Invoked when the text value typed by the user changes.
         */
    onInputChange?(value: string): void;
    /** 
         * Invoked when user hits the Enter key.
         * @param `value` the current input value that has been typed in by user.
         */
    onPillAdd?(value: string): void;
    /** 
         * Invoked when user hits the Backspace key to remove the last pill in the input.
         */
    onLastPillRemove?(): void;
    /** 
         * Invoked when user clicks the input container.
         */
    onClick?(): void;
    /** 
         * If defined, there will be a clear button on the left of the input container.
         * Invoked when user clicks this clear button.
         */
    onClearClick?(): void;
    /** 
         * Invoked when the input takes focus.
         */
    onBlur?(): void;
    /** 
         * Invoked when the input loses focus.
         */
    onFocus?(): void;
    /** 
         * An accessible name for the `PillsInput` that is read aloud to screen readers.
         */
    ariaLabel?: string;
};
/** 
 * An input that uses pills to represent the items entered.
 */
export declare function PillsInput(props: PillsInputProps): React.JSX.Element;
