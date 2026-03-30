import * as React from 'react';
/**
 * 
 * The props for the `MasonryItem` component.
 */
export type MasonryItemProps = {
    /** 
         * Target height of the item in pixels.
         */
    targetHeightPx: number;
    /** 
         * Target width of the item in pixels.
         */
    targetWidthPx: number;
    /** 
         * Minimum width of the item in pixels.
         */
    minWidthPx?: number;
    /** 
         * The content of the MasonryItem.
         */
    children?: React.ReactNode;
};
/** 
 * The props for the `Masonry` component.
 */
export type MasonryProps = {
    /** 
         * Target height of each row in pixels.
         */
    targetRowHeightPx: number;
    /** 
         * Minimum row height in pixels.
         */
    minRowHeightPx?: number;
    /** 
         * Maximum row height in pixels.
         */
    maxRowHeightPx?: number;
    /** 
         * Minimum item width in pixels.
         */
    minItemWidthPx?: number;
    /** 
         * Use the `MasonryItem` component for best results.
         */
    children?: React.JSX.Element[];
};
/** 
 * A horizontal Masonry component.
 *
 * Unlike common Masonry layouts which have a constant width and variable heights
 * this layout aims for a target height per row. Not all rows will have the same height so that
 * elements can be resized to fit the row width.
 *
 * The result is a layout similar to:
 *
 * +----------------------------------------------+
 * |                                              |
 * | +--------------------+ +------+ +----------+ |
 * | |                    | |      | |          | |
 * | |                    | |      | |          | |
 * | |                    | |      | |          | |
 * | +--------------------+ +------+ +----------+ |
 * |                                              |
 * | +----------------+ +-----------------------+ |
 * | |                | |                       | |
 * | |                | |                       | |
 * | |                | |                       | |
 * | |                | |                       | |
 * | +----------------+ +-----------------------+ |
 * |                                              |
 * | +----------+ +-----+ +---+ +---------------+ |
 * | |          | |     | |   | |               | |
 * | |          | |     | |   | |               | |
 * | |          | |     | |   | |               | |
 * | +----------+ +-----+ +---+ +---------------+ |
 * |                                              |
 * +----------------------------------------------+
 */
export declare function Masonry(props: MasonryProps): React.JSX.Element;
export declare function MasonryItem(props: MasonryItemProps): React.JSX.Element;
