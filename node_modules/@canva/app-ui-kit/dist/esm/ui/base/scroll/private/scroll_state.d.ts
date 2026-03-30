import type { CoreScrollState, ScrollContainer } from './scroll_core';
import type { PageScrollState } from './scroll_pages';
export type ScrollState = CoreScrollState & PageScrollState;
export type ScrollStateOptions = {
    rtl?: boolean
};
export declare function getScrollState(container: ScrollContainer, options?: ScrollStateOptions): ScrollState;
