import * as React from 'react';
export type SegmentedControlOption<T> = {
    /** 
         * If `true`, the user can't interact with the option.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * A human readable label for the option.
         */
    label: React.ReactNode;
    /** 
         * The value of the option.
         * This value must be unique within the segmented control.
         */
    value: T;
};
/** 
 * The props for the `SegmentedControl` component.
 */
export type SegmentedControlProps<T> = {
    /** 
         * The initial, uncontrolled value of the segmented control.
         */
    defaultValue?: T;
    /** 
         * If `true`, the user can't interact with the segmented control.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * The DOM ID for the underlying element.
         */
    id?: string;
    /** 
         * A callback that runs when the value of the segmented control changes.
         * @param value - The value of the segmented control.
         */
    onChange?: (value: T) => void;
    /** 
         * A callback that runs when the segmented control loses focus.
         * @param event - The blur event of the segmented control.
         */
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    /** 
         * A callback that runs when the segmented control focus.
         * @param event - The focus event of the segmented control.
         */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** 
         * The options a user can choose between.
         * There must be at least 2 options and at most 4 options.
         */
    options: SegmentedControlOption<T>[];
    /** 
         * The current value of the segmented control.
         */
    value?: T;
};
/** 
 * A horizontal list of options, of which the user can select one.
 */
export declare function SegmentedControl<T>(props: SegmentedControlProps<T>): React.JSX.Element;
