import * as React from 'react';
import type { TouchOrMouseEvent } from '../../button/button';
export type SwitchProps = {
    /** 
         * The DOM ID for the underlying element.
         */
    id?: string;
    /** 
         * The initial, uncontrolled value of the switch.
         * @defaultValue false
         */
    defaultValue?: boolean;
    /** 
         * If `true`, the user can't interact with the switch.
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
    label?: React.ReactNode;
    /** 
         * A human readable description that provides additional context.
         */
    description?: string;
    /** 
         * A callback that runs when the value of the switch changes.
         * @param value - The value of the switch.
         * @param event - The change event for the switch.
         */
    onChange?: (value: boolean, event?: TouchOrMouseEvent<HTMLElement>) => void;
    /** 
         * A callback that runs when the switch loses focus.
         * @param event - The blur event of the switch.
         */
    onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
    /** 
         * A callback that runs when the switch gains focus.
         * @param event - The focus event of the switch.
         */
    onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
    /** 
         * The current value of the switch.
         * If `true`, it's rendered in the "on" state. Otherwise, it's rendered in the "off" state.
         * @defaultValue false
         */
    value?: boolean;
};
/** 
 * A toggle that can be turned on and off.
 */
export declare function Switch(props: SwitchProps): React.JSX.Element;
