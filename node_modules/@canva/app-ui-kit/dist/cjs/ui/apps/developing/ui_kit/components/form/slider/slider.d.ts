import * as React from 'react';
/** 
 * The props for the `Slider` component.
 */
export type SliderProps = {
    /** 
         * The DOM ID for the underlying `HTMLInputElement`.
         */
    id?: string;
    /** 
         * The minimum value of the slider.
         */
    min: number;
    /** 
         * The maximum value of the slider.
         */
    max: number;
    /** 
         * The step value of the slider.
         * If `step` is a number, `value` is always a multiple of `step`, starting from `min`.
         * If `step` is `"any"`, `value` can be any floating point number between `min` and `max`.
         */
    step?: number | 'any';
    /** 
         * The point from which the colored indicator should start.
         */
    origin?: number;
    /** 
         * The current value of the slider.
         */
    value?: number;
    /** 
         * The initial, uncontrolled value of the slider.
         */
    defaultValue?: number;
    /** 
         * A callback that runs as the value of the slider changes.
         * @param value - The value of the slider.
         */
    onChange?: (value: number) => void;
    /** 
         * A callback that runs after the value of the slider has changed.
         */
    onChangeComplete?: (previousValue: number, newValue: number) => void;
    /** 
         * If `true`, the user can't interact with the slider.
         * @defaultValue false
         */
    disabled?: boolean;
};
/** 
 * An input for choosing a number between a range of values.
 */
export declare function Slider(props: SliderProps): React.JSX.Element;
