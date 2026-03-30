import * as React from 'react';
import type { TouchOrMouseEvent } from '../../button/button';
/** 
 * The value of an individual checkbox within a checkbox group.
 */
type CheckboxGroupValue = string;
/** 
 * The props for the `CheckboxGroup` component.
 */
export type CheckboxGroupProps<T> = {
    /** 
         * The initial, uncontrolled values of the checkboxes.
         */
    defaultValue?: T[];
    /** 
         * If `true`, the user can't interact with the checkbox group.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * An ID for the `HTMLDivElement` that contains the checkbox group.
         */
    id?: string;
    /** 
         * A callback that runs when the value of a checkbox changes.
         * @param value - The values of the checkboxes.
         * @param event - The change event for a checkbox.
         */
    onChange?: (value: T[], event?: React.ChangeEvent<HTMLInputElement> | TouchOrMouseEvent<HTMLInputElement>) => void;
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
         * The checkboxes to render within the checkbox group.
         */
    options: CheckboxOption<T>[];
    /** 
         * The values of the checkboxes.
         */
    value?: T[];
};
/** 
 * The props for a checkbox within a checkbox group.
 */
export type CheckboxOption<T> = {
    /** 
         * If `true`, the user can't interact with the checkbox.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * A human-readable label for the checkbox.
         *
         * @remarks
         * The `label` is typically a string, but can also be a ReactNode when additional elements
         * like badges, pills, or icons are needed for display alongside the label text.
         */
    label: React.ReactNode;
    /** 
         * A human readable description of the checkbox, appears below the `label`.
         */
    description?: string;
    /** 
         * The value of the checkbox. This must be unique within the checkbox group.
         */
    value: T;
};
/** 
 * An accessible list of checkboxes.
 */
export declare function CheckboxGroup(props: CheckboxGroupProps<CheckboxGroupValue>): React.JSX.Element;
export {};
