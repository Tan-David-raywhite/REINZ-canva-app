import * as React from 'react';
/** 
 * The props for the `MultiLineInput` component.
 */
export type MultilineInputProps = {
    /** 
         * If `true`, the input grows to fit its content.
         * @defaultValue false
         */
    autoGrow?: boolean;
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
         * The DOM ID for the underlying `HTMLTextAreaElement`.
         */
    id?: string;
    /** 
         * The maximum number of characters allowed in the input.
         */
    maxLength?: number;
    /** 
         * The maximum number of rows to render when `autoGrow` is `true`.
         */
    maxRows?: number;
    /** 
         * The minimum number of rows to render.
         */
    minRows?: number;
    /** 
         * A callback that runs when the value of the input changes.
         * @param value - The value of the input.
         * @param event - The change event for the input.
         */
    onChange?(value: string, event?: React.ChangeEvent<HTMLTextAreaElement>): void;
    /** 
         * A callback that runs when the input loses focus.
         * @param event - The blur event of the input.
         */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** 
         * A callback that runs when the input gains focus.
         * @param event - The focus event of the input.
         */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** 
         * A callback that runs when a key is pressed down while the input is focused.
         * @param event - The keyboard event of the input.
         */
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    /** 
         * The placeholder text to render when the input is empty.
         */
    placeholder?: string;
    /** 
         * Additional content to render beneath the input.
         * The content is rendered as a flex column item.
         */
    footer?: React.ReactNode;
    /** 
         * If `true`, the value of the input is copyable but not modifiable.
         * @defaultValue false
         */
    readOnly?: boolean;
    /** 
         * If `true`, the input is marked as required for validation and accessibility reasons.
         * @defaultValue false
         */
    required?: boolean;
    /** 
         * The current value of the input.
         */
    value?: string;
};
/** 
 * A textarea that can automatically grow or shrink based on its contents.
 */
export declare function MultilineInput(props: MultilineInputProps): React.JSX.Element;
