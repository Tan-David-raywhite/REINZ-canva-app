import * as React from 'react';
import type { UnitSpace as Space } from '../../metrics/metrics';
/** 
 * The horizontal alignment of a column.
 */
type AlignX = 'start' | 'center' | 'end' | 'spaceBetween';
/** 
 * The vertical alignment of a column.
 */
type AlignY = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
/** 
 * The width of a column.
 * @defaultValue 'fluid'
 */
type Width = 'fluid' | 'content' | 'containedContent' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5';
/** 
 * The props for the `Column` component.
 */
export type ColumnProps = {
    /** 
         * Width of the column, given as:
         * - A fraction (e.g. `"2/3"`) to fill a fixed proportion of the available width.
         * - `"fluid"` to equally share the available width between columns.
         * - `"content"` to fit the width of the content, without wrapping text.
         * - `"containedContent"` to fit the width of the content, wrapping text if needed.
         * @defaultValue "fluid"
         */
    width?: Width;
    /** 
         * The contents of the column.
         */
    children?: React.ReactNode;
};
export declare function Column(props: ColumnProps): React.JSX.Element;
export type ColumnsProps = {
    /** 
         * The `Column` components to align horizontally.
         */
    children?: React.ReactNode;
    /** 
         * The space between each column.
         */
    spacing: Space;
    /** 
         * The horizontal alignment of the columns.
         * @defaultValue "start"
         */
    align?: AlignX;
    /** 
         * The vertical alignment of the columns.
         * @defaultValue "stretch"
         */
    alignY?: AlignY;
};
/** 
 * Arranges one or more `Column` components into a horizontal layout.
 */
export declare function Columns(props: ColumnsProps): React.JSX.Element;
export {};
