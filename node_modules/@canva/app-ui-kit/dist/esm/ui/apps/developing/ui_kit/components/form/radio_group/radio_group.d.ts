import * as React from 'react';
import type { TouchOrMouseEvent } from '../../button/button';
/** 
 * The props for the `RadioGroup` component.
 */
export type RadioGroupProps<T> = {
    /** 
         * The initial, uncontrolled value of the radio group.
         */
    defaultValue?: T;
    /** 
         * If `true`, the user can't interact with the radio group.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * The DOM ID for the `HTMLDivElement` that wraps around the radio group.
         */
    id?: string;
    /** 
         * The name of the radio group.
         * This name identifies the radio group during a form submission.
         */
    name?: string;
    /** 
         * A callback that runs when the value of the radio group changes.
         * @param value - The value of the radio group.
         * @param event - The change event for the radio group.
         */
    onChange?(value: T, event?: React.ChangeEvent | TouchOrMouseEvent<HTMLElement>): void;
    /** 
         * A callback that runs when the radio group loses focus.
         * @param event - The blur event of the radio group.
         */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * A callback that runs when the radio group gains focus.
         * @param event - The focus event of the radio group.
         */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /** 
         * The radio buttons to render within the radio group.
         */
    options: RadioOption<T>[];
    /** 
         * The current value of the radio group.
         */
    value?: T;
};
export type RadioOption<T> = {
    /** 
         * If `true`, the user can't interact with the radio button.
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
         * 
         * A human readable description for the radio button to supplement the `label` which appears below it.
         */
    description?: string;
    /** 
         * The value of the radio button.
         * This value must be unique within the radio group.
         */
    value: T;
};
/** 
 * An accessible list of radio buttons.
 */
export declare function RadioGroup<T>(props: RadioGroupProps<T>): React.JSX.Element;
