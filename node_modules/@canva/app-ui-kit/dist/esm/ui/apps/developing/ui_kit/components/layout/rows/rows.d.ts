import * as React from 'react';
import type { UnitSpace as Space } from '../../metrics/metrics';
/** 
 * The props for the `Rows` component.
 */
export type RowsProps = {
    /** 
         * The horizontal alignment of the rows.
         * @defaultValue "stretch"
         */
    align?: 'start' | 'center' | 'end' | 'stretch';
    /** 
         * The items to arrange into rows.
         */
    children?: React.ReactNode;
    /** 
         * The space between each row.
         */
    spacing: Space;
};
/** 
 * Arranges its children vertically, into rows, with consistent spacing between each row.
 */
export declare function Rows(props: RowsProps): React.JSX.Element;
