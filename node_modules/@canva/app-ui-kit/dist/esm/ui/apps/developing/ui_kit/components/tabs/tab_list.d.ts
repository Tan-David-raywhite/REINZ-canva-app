import * as React from 'react';
import type { UnitSpace as Space } from '../metrics/metrics';
/** 
 * The horizontal alignment of Tab items within the TabList.
 */
export declare const align: readonly ["start", "end", "stretch"];
/** 
 * The horizontal alignment of Tab items within the TabList.
 */
export type Align = (typeof align)[number];
/** 
 * The props for the `TabList` component.
 */
export type TabListProps = {
    /** 
         * The content of the TabList component.
         */
    children?: React.ReactNode;
    /** 
         * Controls the horizontal alignment of Tab items within the TabList.
         * - 'start': Aligns tabs to the left
         * - 'center': Centers tabs
         * - 'end': Aligns tabs to the right
         * - 'stretch': Attempts to distribute tabs evenly across the full width
         * @remarks
         * The 'stretch' option may not work as expected when there are too many tabs for the container.
         * @defaultValue 'stretch'
         */
    align?: Align;
    /** 
         * Adjust the spacing between tab items.
         * When `align` is 'stretch', this prop has no effect.
         * @defaultValue '2u'
         */
    spacing?: Extract<Space, '0' | '1u' | '2u' | '3u' | '4u'>;
};
/** 
 * Wrapper component for Tab and other children elements.
 *
 * This enables keyboard navigation (such as left and right arrow, home, end) for the
 * Tab items and other focusable elements within.
 */
export declare function TabList(props: TabListProps): React.JSX.Element;
