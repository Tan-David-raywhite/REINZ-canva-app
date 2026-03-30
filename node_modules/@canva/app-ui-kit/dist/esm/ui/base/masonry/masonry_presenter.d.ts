import type * as React from 'react';
import type { MasonryItemFooter, MasonryItemProps } from './masonry';
export type MeasuredChildren = {
    child: React.ReactElement<MasonryItemProps>;
    width: number;
    minWidth?: number;
    height: number;
    footer?: MasonryItemFooter;
};
export type MeasuredElement = {
    child: React.ReactElement<MasonryItemProps>;
    width: number;
    footer?: MasonryItemFooter;
};
export type MeasuredRow = {
    elements: MeasuredElement[];
    height: number;
    footerHeight: number;
    Footer?: React.ComponentType<MasonryRowFooterProps>;
};
export type MasonryRowFooterProps = {
    rowIndex: number
};
export declare class MasonryState {
    children: MeasuredChildren[];
    rows: MeasuredRow[];
    containerWidth?: number;
    minRowHeightPx?: number;
    maxRowHeightPx?: number;
    targetRowHeightPx: number;
    horizontalGutterPx: number;
    verticalGutterPx: number;
    rowLimit?: number;
    minElements?: number;
    minItemWidthPx: number;
    hideIncompleteRow?: boolean;
    verticalOffset: number;
    computeMidPoints?: boolean;
    alignLastRowHeight?: boolean;
    get rowHeights(): number[];
}
export declare class MasonryPresenter {
    private static layout;
    private static getNextIndexWithClosestMidPoint;
    private static getMidPoint;
    private static getInitFooterHeight;
    private static scaleChildren;
    private static scaleToTargetHeight;
    private static shouldRowExcludeEl;
    private static getRowHeight;
    private static getMeasuredRow;
    private static rowContainsEmptySpace;
    private static getTotalGutterSpace;
    private static getChildrenWidth;
    updateChildren(state: MasonryState, children?: React.ReactElement<MasonryItemProps>[]): void;
    static getMeasuredElement(child: React.ReactElement<MasonryItemProps>): {
        child: React.ReactElement<MasonryItemProps, string | React.JSXElementConstructor<any>>;
        width: number;
        height: number;
        footer: MasonryItemFooter | undefined;
        minWidth: number | undefined;
    };
    setContainerWidth(state: MasonryState, containerWidth: number): void;
    setContainerOffset(state: MasonryState, offset: number): void;
    applyBanner(state: MasonryState, Banner: React.ComponentType<MasonryRowFooterProps> | undefined): void;
}
