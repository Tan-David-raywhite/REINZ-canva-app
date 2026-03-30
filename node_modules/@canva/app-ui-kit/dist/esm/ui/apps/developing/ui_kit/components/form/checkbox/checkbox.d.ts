import * as React from 'react';
/** 
 * The value of a checkbox.
 */
type CheckboxValue = string;
/** 
 * The props for the `Checkbox` component.
 */
export type CheckboxProps = {
    /** 
         * If `true`, the checkbox is rendered in a checked state.
         * @defaultValue false
         */
    checked?: boolean;
    /** 
         * The initial, uncontrolled state of the checkbox.
         * @defaultValue false
         */
    defaultChecked?: boolean;
    /** 
         * If `true`, the user can't interact with the checkbox.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * An ID for the checkbox's `HTMLInputElement`.
         */
    id?: string;
    /** 
         * A human-readable label for the checkbox.
         *
         * @remarks
         * The `label` is typically a string, but can also be a ReactNode when additional elements
         * like badges, pills, or icons are needed for display alongside the label text.
         */
    label?: React.ReactNode;
    /** 
         * A human-readable description of the checkbox, appears below the `label`.
         *
         * @remarks
         * Only checkboxes with labels can have descriptions.
         */
    description?: string;
    /** 
         * A callback that runs when the value of the checkbox changes.
         * @param value - The value of the checkbox, or an empty string if there is no value.
         * @param checked - If `true`, the checkbox is checked.
         */
    onChange?: (value: CheckboxValue | '', checked: boolean) => void;
    /** 
         * A callback that runs when the checkbox loses focus.
         * @param event - The blur event of the checkbox.
         */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the checkbox gains focus.
         * @param event - The focus event of the checkbox.
         */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * The value of the checkbox.
         */
    value?: CheckboxValue;
} & ({
    label: React.ReactNode;
    description?: string;
} | {
    label?: undefined;
    description: never;
});
/** 
 * A box that can be checked or unchecked, representing a binary choice.
 */
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
export {};
