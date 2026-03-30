import * as React from 'react';
/** 
 * The props passed from the `FormField` component, to a form input component.
 */
type AllowedFormFieldControlProps<T> = {
    /** 
         * If `true`, the control is rendered in an error state and screen readers are alerted of the error.
         */
    error: boolean;
    /** 
         * The DOM ID for the underlying form input component.
         */
    id: string;
    /** 
         * The value of the control.
         */
    value?: T;
};
/** 
 * The props for the `FormField` component.
 */
export type FormFieldProps<T> = {
    /** 
         * A function that returns a form input component, such as a `TextInput` or `Select` component:
         *
         * ```tsx
         * <FormField
         *   label="Name"
         *   description="Enter your name"
         *   control={props => <TextInput onChange={onChange} {...props} />}
         * />
         * ```
         *
         * @param props - The props to pass from the `FormField` component, to the form input component.
         */
    control: (props: AllowedFormFieldControlProps<T>) => React.ReactNode;
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
         * The marker to display next to the label.
         *
         * @defaultValue "none"
         */
    labelMarker?: 'none' | 'optional';
    /** 
         * A human readable description for the form field.
         * If a string is passed into the `error` prop, this description is not displayed.
         */
    description?: string;
    /** 
         * A human readable error message to display beneath the form field or a value of `true` to render the field in an error state without an error message.
         */
    error?: string | boolean;
    /** 
         * The value of the form input component, such as text for a `TextInput` component.
         */
    value?: T;
};
/** 
 * An accessible form field with a label.
 */
export declare function FormField<T = string>(props: FormFieldProps<T>): React.JSX.Element;
export {};
