import * as React from 'react';
import type { ReactNode } from 'react';
import type { ScrollState } from '../scroll_controls/scroll_window';
import type { MasonryRowFooterProps } from './masonry_presenter';
import type { SkipLinkMessages } from './skip_links';
export type MasonryItemFooter = {
    expandable?: React.ReactNode;
    nonExpandable?: React.ReactNode;
};
type Children = ReactNode | ((p: {
    resizing: boolean;
}) => ReactNode);
export type MasonryItemProps = {
    resizing?: boolean
    targetHeightPx: number
    targetWidthPx: number
    minWidthPx?: number
    footer?: MasonryItemFooter
    children?: Children
    onLayoutSet?(
        opts: {
            row: number
            column: number
            index: number
            elementAboveIndex?: number
            elementBelowIndex?: number
        }
    ): void
};
export type MasonryProps = {
    minRowHeightPx?: number
    maxRowHeightPx?: number
    targetRowHeightPx: number
    minItemWidthPx?: number
    minElements?: number
    rowLimit?: number
    containerWidth?: number
    defaultContainerWidth?: number
    children?: React.JSX.Element[]
    gutterPx: number | {
        horizontal: number
        vertical: number
    }
    hideIncompleteRow?: boolean
    onRenderedItems?: (numberOfItems: number) => void
    virtualization?: {
        scrollState: ScrollState<'vertical'>
        overscan?: number
        enableRealTimeScrollVirtualization?: boolean
    }
    skipLinkMessages?: SkipLinkMessages
    computeMidPoints?: boolean
    Banner?: React.ComponentType<MasonryRowFooterProps>
    alignLastRowHeight?: boolean
};
export declare class Masonry extends React.Component<MasonryProps> {
    private readonly masonryState;
    private readonly presenter;
    private MasonryVirtualizationControllerComponent;
    constructor(props: MasonryProps);
    componentDidMount(): void;
    private initState;
    private readonly onContainerResize;
    private readonly measureContainerWidth;
    private readonly measureVerticalOffset;
    private get horizontalGutterPx();
    private get verticalGutterPx();
    private readonly ComposedSkipLinks;
    render(): React.JSX.Element;
}
export declare const MasonryItem: React.ComponentType<MasonryItemProps>;
export {};
