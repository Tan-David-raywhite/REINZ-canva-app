import type { EasingFunction } from '../../animation/easings';
import type { LayoutHandle, ScrollHandle } from '../../handle/handle';
export type ScrollContainer = (ScrollHandle & LayoutHandle) | 'window';
export type ScrollEasing = 'auto' | 'instant' | 'smooth' | EasingFunction;
export type CoreScrollState = {
    x: number
    y: number
    atStart: boolean
    atEnd: boolean
    atTop: boolean
    atBottom: boolean
    scrollable: boolean
    scrollableX: boolean
    scrollableY: boolean
    containerWidth: number
    containerHeight: number
    scrollWidth: number
    scrollHeight: number
};
export declare const SUBPIXEL_ROUNDING_TOLERANCE = 2;
export declare function getScrollContainer(container: ScrollContainer): ScrollHandle & LayoutHandle;
export type GetCoreScrollStateOptions = {
    rtl?: boolean
};
export declare function getCoreScrollState(container?: ScrollContainer, options?: GetCoreScrollStateOptions): CoreScrollState;
export type ScrollToOptions = {
    x?: number | 'start' | 'end'
    y?: number | 'start' | 'end'
    easing?: ScrollEasing
    duration?: number
    rtl?: boolean
};
export declare function scrollTo(container: ScrollContainer, options: ScrollToOptions): void;
export type ScrollByOptions = {
    x?: number
    y?: number
} & Pick<ScrollToOptions, 'easing' | 'duration' | 'rtl'>;
export declare function scrollBy(container: ScrollContainer, options: ScrollByOptions): void;
