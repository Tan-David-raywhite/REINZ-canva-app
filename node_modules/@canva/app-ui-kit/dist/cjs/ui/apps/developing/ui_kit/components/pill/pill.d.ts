import * as React from 'react';
import type { PillMaxWidth } from '../../../../../base/pill/pill';
/** 
 * Decoration that appears at the start or end of the Pill.
 */
export type PillDecoration = (() => React.ReactNode) | React.ReactNode;
/** 
 * The role of the `Pill`.
 */
export type PillRole = 'button' | 'switch';
/** 
 * The tooltip placement relative to the `Pill`.
 */
export type Placement = 'top' | 'bottom';
/** 
 * The size of the `Pill`.
 */
export type PillSize = 'xsmall' | 'small' | 'medium';
/** 
 * The props for the `Pill` component.
 */
export type PillProps = {
    /** 
         * Text to display inside the pill.
         */
    text: string;
    /** 
         * Role of the pill.
         *
         * @remarks
         * Use `'switch'` when the pill is activable, selectable or toggleable, e.g. a filter that can be toggled.
         * Use `'button'` when clicking the pill will trigger some other action.
         *
         * @defaultValue 'button'
         */
    role?: PillRole;
    /** 
         * If `true`, the pill will show selected styles.
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * If `true`, the user can't interact with the pill.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * Set the maximum width of the pill. Use '25u' to truncate long text, and '100%' to fit the text.
         */
    maxWidth?: PillMaxWidth;
    /** 
         * A callback that runs when the pill is clicked.
         */
    onClick?: () => void;
    /** 
         * An element to render at the start side of the pill.
         */
    start?: PillDecoration;
    /** 
         * An element to render at the end side of the pill.
         */
    end?: PillDecoration;
    /** 
         * An accessible name for the pill that is read aloud to screen readers.
         */
    ariaLabel?: string;
    /**
         * 
         * The size of the pill. Defaults to `medium`, which is a better touch-target size.
         */
    size?: PillSize;
    /** 
         * Whether to render a tooltip for the pill.
         *
         * If `true`, the default tooltip behavior will be applied, which includes the following options:
         * - The tooltip content will be the same as the pill text.
         * - The tooltip will be shown below the pill (placement = "bottom").
         * - The tooltip is not disabled.
         *
         * Otherwise, if you want to customize the tooltip behavior, pass an object with the following properties:
         * - `label`: Optional, text to be used as tooltip content (if not provided, the pill text will be used).
         * - `placement`: Optional, tooltip placement position, relative to the Pill. Default is "bottom".
         * - `disabled`: Optional, if `true` the tooltip will not be shown.
         *
         * @defaultValue false
         */
    showTooltip?: boolean | {
        /** 
                 * Text to be used as tooltip content.
                 */
        label?: string;
        /** 
                 * Optional tooltip placement.
                 * @defaultValue 'bottom'
                 */
        placement?: Placement;
        /** 
                 * If `true`, the tooltip will not be shown.
                 * @defaultValue false
                 */
        disabled?: boolean;
    };
};
/** 
 * Pills show selected entities, and suggest or filter content.
 *
 * Use pills for:
 * - Presenting available filters in a view
 * - Making contextual suggestions for searching and navigating content
 */
export declare function Pill(props: PillProps): React.JSX.Element;
