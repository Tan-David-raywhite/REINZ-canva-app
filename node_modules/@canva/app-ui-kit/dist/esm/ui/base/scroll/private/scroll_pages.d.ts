import type { CoreScrollState, ScrollByOptions, ScrollContainer, ScrollToOptions } from './scroll_core';
export type SingleDirectionPageScrollState = {
    currentPageIndex: number
    numberOfPages: number
};
export type PageScrollState = {
    pageX: SingleDirectionPageScrollState | null;
    pageY: SingleDirectionPageScrollState | null;
};
export declare function derivePageScrollState(scrollState: CoreScrollState): PageScrollState;
export type ScrollToPageOptions = {
    x?: number
    y?: number
} & Pick<ScrollToOptions, 'easing' | 'duration' | 'rtl'>;
export declare function scrollToPage(container: ScrollContainer, options?: ScrollToPageOptions): void;
export type ScrollByPageOptions = {
    x?: number
    y?: number
} & Pick<ScrollByOptions, 'easing' | 'duration' | 'rtl'>;
export declare function scrollByPage(container: ScrollContainer, options?: ScrollByPageOptions): void;
