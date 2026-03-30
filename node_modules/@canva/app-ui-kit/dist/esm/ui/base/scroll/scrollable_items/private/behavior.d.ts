import * as React from 'react';
import type { ItemPositions, ScrollByPageOptions } from '../../scroll';
import type { ScrollableHandle, ScrollableState, ScrollByOptions, ScrollToOptions } from '../../scrollable/scrollable';
export type { ScrollByOptions, ScrollToOptions };
export type CurrentItemIndex = {
    start: number;
    center: number;
    end: number;
};
type SingleDirectionItemScrollState = {
    currentItemIndex: CurrentItemIndex
    numberOfItems: number
};
export type ItemScrollState = {
    itemX: SingleDirectionItemScrollState | null;
    itemY: SingleDirectionItemScrollState | null;
};
export type ScrollableItemsState = ScrollableState & ItemScrollState;
export type ScrollableScrollToItemAlign = 'start' | 'center' | 'end' | 'nearest';
export type ScrollableScrollByItemAlign = 'start' | 'center' | 'end';
export type ScrollToItemOptions = {
    x?: number
    y?: number
    itemAlign?: ScrollableScrollToItemAlign
} & Pick<ScrollToOptions, 'easing' | 'duration' | 'rtl'>;
export type ScrollByItemOptions = {
    x?: number
    y?: number
    itemAlign?: ScrollableScrollByItemAlign
} & Pick<ScrollByOptions, 'easing' | 'duration' | 'rtl'>;
export type ScrollableItemsHandle = Pick<ScrollableHandle, 'scrollTo' | 'scrollBy' | 'scrollToPage'> & {
    getScrollState: () => ScrollableItemsState | undefined
    scrollByPage: (options: ScrollByPageOptions) => void
    scrollToItem: (options: ScrollToItemOptions) => void
    scrollByItem: (options: ScrollByItemOptions) => void
};
export type UseScrollableItemsOptions = {
    onScroll?: (scrollState: ScrollableItemsState) => void
    onScrollStateChange?: (scrollState: ScrollableItemsState) => void
    debounceMs?: number
    gap?: number
    getItemWidth?: ((index: number) => number) | number
    getItemHeight?: ((index: number) => number) | number
    itemCount?: number
};
export declare function useScrollableItems<T extends HTMLElement>(options: UseScrollableItemsOptions): {
    ref: React.Ref<T | null>;
    handle: ScrollableItemsHandle;
    onScroll: (() => void) | undefined;
};
export declare const getCurrentItemIndex: ({ itemPositions, scrollPosition, containerSize, }: {
    itemPositions: ItemPositions;
    scrollPosition: number;
    containerSize: number;
}) => CurrentItemIndex;
export declare function deriveScrollableItemsState({ scrollableState, itemPositionsX, itemPositionsY, }: {
    scrollableState: ScrollableState;
    itemPositionsX: ItemPositions | null;
    itemPositionsY: ItemPositions | null;
}): ScrollableItemsState;
export declare const getItemScrollTarget: ({ itemIndex, containerSize, scrollPosition, itemPositions, itemAlign, }: {
    itemIndex: number;
    containerSize: number;
    scrollPosition: number;
    itemPositions: ItemPositions;
    itemAlign?: ScrollableScrollToItemAlign;
}) => number;
export declare const getPageScrollBy: ({ pageAmount, currentItemIndex, containerSize, itemPositions, scrollPosition, }: {
    pageAmount: number;
    currentItemIndex: CurrentItemIndex;
    containerSize: number;
    itemPositions: ItemPositions;
    scrollPosition: number;
}) => number;
