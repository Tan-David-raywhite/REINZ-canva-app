import * as React from 'react';
/** 
 * The color of a swatch.
 */
export type Color = string | undefined;
/** 
 * The appearance of a swatch.
 * If a swatch uses the `"outline"` variant, it's rendered as a white box and outlined with the value of the `fill` property.
 */
export declare const variants: readonly ["solid", "outline"];
/** 
 * The appearance of a swatch.
 * If a swatch uses the `"outline"` variant, it's rendered as a white box and outlined with the value of the `fill` property.
 */
export type Variant = (typeof variants)[number];
/** 
 * The click event for a swatch.
 */
export type TouchOrMouseEvent<T> = React.SyntheticEvent & Partial<Omit<React.MouseEvent<T>, 'nativeEvent'>> & Partial<Omit<React.TouchEvent<T>, 'nativeEvent'>>;
/** 
 * The props for a `Swatch` component.
 */
export type SwatchProps = {
    /** 
         * A callback that runs when the swatch is clicked.
         * @param event - The click event for the swatch.
         */
    onClick?: (event: TouchOrMouseEvent<any>) => void;
    /** 
         * If defined, a delete button appears when a user hovers over the swatch.
         * The callback runs when the button is clicked.
         */
    onDelete?: () => void;
    /** 
         * The color of the swatch, provided as an array of one or more CSS values (hex code, RGB, or HSL).
         * If multiple colors are defined, the swatch has a stripe for each color.
         * If an item in the array is `undefined`, it's rendered as transparent.
         * The array must not be empty.
         */
    fill: readonly [Color, ...Color[]];
    /** 
         * A human readable name for the color.
         * If `fill` contains multiple colors, the name should describe the collection of colors.
         *
         * @defaultValue The hex codes of the selected colors as a comma-separated list. For example, "#ff0000" or "[#ff0000, #000000, #ffffff]".
         */
    tooltipLabel?: string;
    /** 
         * The appearance of the swatch.
         * If a swatch uses the `"outline"` variant, it's rendered as a white box and the `fill` property is used as its outline.
         * @defaultValue "solid"
         */
    variant?: Variant;
    /** 
         * If `true`, the swatch is rendered in its selected state.
         * @defaultValue false
         */
    active?: boolean;
    /** 
         * If `true`, the user can't interact with the swatch.
         * @defaultValue false
         */
    disabled?: boolean;
};
/** 
 * A selectable square that displays one or more colors.
 */
export declare function Swatch(props: SwatchProps): React.JSX.Element;
