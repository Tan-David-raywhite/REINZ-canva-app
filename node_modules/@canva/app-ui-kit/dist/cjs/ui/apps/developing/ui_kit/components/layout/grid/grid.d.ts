import * as React from 'react';
import type { UnitSpace as Space } from '../../metrics/metrics';
/** 
 * The alignment of an item in a grid.
 */
type Align = 'stretch' | 'start' | 'center' | 'end';
/** 
 * The number of columns to render in a grid.
 */
type GridColumn = 1 | 2 | 3 | 4 | 5 | 6;
/** 
 * The props for the `Grid` component.
 */
export type GridProps = {
    /** 
         * The items to arrange in a grid layout.
         */
    children?: React.ReactNode;
    /** 
         * The number of the columns in the grid.
         */
    columns: GridColumn;
    /** 
         * The space between the columns and rows in the grid.
         * @defaultValue "0"
         */
    spacing?: Space;
    /** 
         * The space between the columns in the grid.
         * @defaultValue "0"
         */
    spacingX?: Space;
    /** 
         * The space between the rows in the grid.
         * @defaultValue "0"
         */
    spacingY?: Space;
    /** 
         * The vertical alignment of the items in the grid.
         * @defaultValue "start"
         */
    alignY?: Align;
    /** 
         * The horizontal alignment of the items in the grid.
         */
    alignX?: Align;
};
/** 
 * Arranges its children into a grid layout, with each item in the grid being the same size.
 */
export declare function Grid(props: GridProps): React.JSX.Element;
export {};
