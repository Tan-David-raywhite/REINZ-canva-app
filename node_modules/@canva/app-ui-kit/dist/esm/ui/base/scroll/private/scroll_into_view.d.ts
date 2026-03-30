import type { LayoutHandle } from '../../handle/handle';
import type { ScrollContainer, ScrollToOptions } from './scroll_core';
type ScrollIntoViewOptions = {
    align?: 'start' | 'center' | 'end';
} & Pick<ScrollToOptions, 'easing' | 'duration' | 'rtl'>;
export declare function scrollIntoView(
 container: ScrollContainer,
 element: LayoutHandle,
 options?: ScrollIntoViewOptions
): void;
export declare function isAboveView(container: ScrollContainer, element: LayoutHandle): boolean;
export declare function isBelowView(container: ScrollContainer, element: LayoutHandle): boolean;
export declare function isFullyInView(container: ScrollContainer, element: LayoutHandle): boolean;
export {};
