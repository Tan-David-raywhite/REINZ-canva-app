import * as React from 'react';
export type InputDecoration = (() => React.ReactNode) | React.ReactNode;
/** 
 * The props for the `TextInput` component.
 */
export type TextInputProps = {
    /** 
         * The default value of the input.
         */
    defaultValue?: string;
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
         * The type of input.
         * @defaultValue "text"
         */
    type?: 'search' | 'tel' | 'text' | 'url';
    /** 
         * The DOM ID for the underlying `HTMLInputElement`.
         */
    id?: string;
    /** 
         * The maximum number of characters the user can enter into the input.
         */
    maxLength?: number;
    /** 
         * The name of the input.
         */
    name?: string;
    /** 
         * A callback that runs when the value of the input changes.
         * @param value - The value of the input.
         */
    onChange?: (value: string) => void;
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
         * The placeholder text that appears when the input is empty.
         */
    placeholder?: string;
    /** 
         * The current value of the input.
         * If `undefined`, the component manages its own state.
         */
    value?: string;
    /** 
         * An element to render at the start of the input box.
         */
    start?: InputDecoration;
    /** 
         * An element to render at the end of the input box.
         */
    end?: InputDecoration;
};
/** 
 * An input that accepts textual values.
 * */
export declare function TextInput(props: TextInputProps): React.JSX.Element;
