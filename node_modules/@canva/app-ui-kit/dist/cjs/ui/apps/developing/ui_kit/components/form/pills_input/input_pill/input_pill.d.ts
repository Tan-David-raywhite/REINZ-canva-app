import * as React from 'react';
import type { PillMaxWidth } from '../../../../../../../base/pill/pill';
/** 
 * The props of the `InputPill` component.
 */
export type InputPillProps = {
    /** 
         * Text to display inside the pill.
         */
    text: string;
    /** 
         * Whether the pill is disabled.
         *
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * Set the maximum width of the pill. Use '25u' to truncate long text, and '100%' to fit the text.
         */
    maxWidth?: PillMaxWidth;
    /** 
         * A callback that runs when the remove button is clicked.
         * If provided, the Pill will have a small remove button with a CloseIcon at the end.
         */
    onRemoveClick?(): void;
};
/** 
 * Pills to represent the items entered in an input.
 */
export declare function InputPill(props: InputPillProps): React.JSX.Element;
