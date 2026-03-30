import type { Argument as ClassNameArgument } from 'classnames';
import * as React from 'react';
import * as scroll from '../../scroll';
import type { ScrollByOptions as BaseScrollByOptions, ScrollByPageOptions, ScrollState, ScrollToOptions as BaseScrollToOptions, ScrollToPageOptions } from '../../scroll';
export type ScrollToOptions = Omit<BaseScrollToOptions, 'easing'> & {
    easing?: scroll.ScrollEasing
};
export type ScrollByOptions = Omit<BaseScrollByOptions, 'easing'> & Pick<ScrollToOptions, 'easing'>;
export type ScrollDirection = 'vertical' | 'horizontal';
export type ScrollableState = ScrollState;
export type ScrollableHandle = {
    getScrollState: () => ScrollableState | undefined
    scrollTo: (options: ScrollToOptions) => void
    scrollBy: (options: ScrollByOptions) => void
    scrollToPage: (options: ScrollToPageOptions) => void
    scrollByPage: (options: ScrollByPageOptions) => void
};
export type UseScrollableOptions = {
    onScroll?: (scrollState: ScrollableState) => void
    onScrollStateChange?: (scrollState: ScrollableState) => void
    debounceMs?: number
};
export declare function useScrollable<T extends HTMLElement>(options: UseScrollableOptions): {
    ref: React.Ref<T | null>;
    handle: ScrollableHandle;
    onScroll: (() => void) | undefined;
};
export type BaseScrollableProps = {
    ref?: React.Ref<ScrollableHandle>
    children?: React.ReactNode
    direction: ScrollDirection
    onScroll?: (scrollState: ScrollableState) => void
    onScrollStateChange?: (scrollState: ScrollableState) => void
    debounceMs?: number
    ariaLabel?: string
    role?: 'region' | 'group' | 'list'
    className?: ClassNameArgument
};
export declare const BaseScrollable: (props: BaseScrollableProps) => React.JSX.Element;
