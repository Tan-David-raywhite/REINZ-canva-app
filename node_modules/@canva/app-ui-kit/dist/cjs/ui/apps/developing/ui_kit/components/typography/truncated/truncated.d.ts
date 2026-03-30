import * as React from 'react';
import type { TextProps } from '../typography';
/** 
 * The props for the `TruncatedText` component.
 */
export type TruncatedTextProps = Omit<TextProps, 'children' | 'lineClamp'> & {
    children: string;
    /** 
         * The number of lines the text should be clamped to. If the content
         * overflows the specified number of lines, it is truncated and
         * a tooltip is shown with the full text.
         *
         * @default 1
         */
    lineClamp?: number;
    /** 
         * Placement of the tooltip relative to the text.
         */
    tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
    /** 
         * Alignment of the tooltip text.
         */
    tooltipAlignment?: 'start' | 'end' | 'center';
};
/** 
 * A component that styles text bodies and clamps them to a specified number of rows.
 * If the text is truncated, a tooltip provides access to the full content.
 */
export declare function TruncatedText(props: TruncatedTextProps): React.JSX.Element;
