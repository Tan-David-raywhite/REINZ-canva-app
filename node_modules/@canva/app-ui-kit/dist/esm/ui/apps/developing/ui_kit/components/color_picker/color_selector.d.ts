import * as React from 'react';
export type ColorSelectorChangeSource = 'hex' | 'satVal' | 'hue';
/** 
 * The props for the `ColorSelector` component.
 */
export type ColorSelectorProps = {
    /** 
         * The current value of the color selector.
         * This must be a valid, six-digit hex code, prefixed with a `#` symbol.
         * @example "#ff0099"
         */
    color: string;
    /** 
         * A callback that runs when the color is changed.
         * @param color - A valid, six-digit hex code, prefixed with a `#` symbol.
         */
    onChange(color: string, source?: ColorSelectorChangeSource): void;
    /** 
         * Callback for when the delete button is clicked.
         * If provided, ColorPicker shows a delete button to delete the selected color.
         */
    onDeleteColor?(): void;
    /** 
         * If `true`, the user cannot interact with the color selector
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * Callback for when the flyout opens.
         * @remarks Useful in cases when you need to trigger something once during the opening and not on every onChange call.
         */
    onOpen?(): void;
    /** 
         * Callback for when the flyout closes.
         * @remarks Useful in cases when you need to trigger something once during the closing and not on every onChange call.
         */
    onClose?(): void;
    /** 
         * The mode of the trigger button, showing either a Swatch or an AddColorButton.
         * @defaultValue 'swatch'
         */
    triggerMode?: 'swatch' | 'addColorButton';
};
/** 
 * A square that displays a color and, when clicked, opens a flyout for selecting a color.
 */
export declare function ColorSelector(props: ColorSelectorProps): React.JSX.Element;
