import * as React from 'react';
import type { ScrollState } from '../scroll_controls/scroll_window';
export type RowVisibility = {
    renderedFirstVisible: number;
    renderedLastVisible: number;
    scrollingFirstVisible: number;
    scrollingLastVisible: number;
};
type MasonryVirtualizationControllerProps = {
    virtualization: {
        scrollState: ScrollState<'vertical'>
        overscan?: number
    }
    verticalOffset: number
    rowHeights: number[]
    children(
        opts: {
            rowVisibility: RowVisibility
        }
    ): React.ReactNode
};
export declare class MasonryVirtualizationController extends React.Component<MasonryVirtualizationControllerProps> {
    debouncedScrollState: ScrollState<'vertical'>;
    private verticalOffset;
    componentDidMount(): void;
    componentDidUpdate(prevProps: MasonryVirtualizationControllerProps): void;
    get offsetScrollState(): ScrollState<'vertical'>;
    render(): React.JSX.Element;
}
export declare const SingleWindowMasonryVirtualizationController: (props: MasonryVirtualizationControllerProps) => React.JSX.Element;
export {};
