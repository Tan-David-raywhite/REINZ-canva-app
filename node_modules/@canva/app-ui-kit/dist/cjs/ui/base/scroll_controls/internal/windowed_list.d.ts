import * as React from 'react';
import type { Layout, ScrollState } from '../scroll_window';
type WindowedListProps<L extends Layout> = {
    scrollState: ScrollState<L>
    itemSizes: number[]
    overscan?: number
    children(
     windowedListState: {
         firstVisible: number;
         lastVisible: number;
     } | undefined,
     itemPositions: number[]
    ): React.ReactNode
    throttledUpdateMs?: number
};
export declare class WindowedList<L extends Layout> extends React.Component<WindowedListProps<L>> {
    private visibleRange;
    private get itemPositions();
    componentDidMount(): void;
    private setVisibleRange;
    render(): React.ReactNode;
}
export {};
