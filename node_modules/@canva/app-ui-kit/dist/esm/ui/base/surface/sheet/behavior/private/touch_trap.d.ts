import type * as React from 'react';
type DirectionFlag = {
    horizontal: boolean;
    vertical: boolean;
};
export type ScrollableElementType = {
    element: HTMLElement;
    currentlyScrolling: DirectionFlag;
};
export declare const elementHasVerticalScrollAtEnd: (element: HTMLElement) => boolean;
export declare const elementHasHorizontalScrollAtEnd: (element: HTMLElement) => boolean;
export declare const elementMaybePannable: (element: Element) => boolean;
export declare const inputElementCanScroll: (element: HTMLElement) => boolean;
export declare const findClosestScrollableElement: (element: Element, rootElement: Element) => ScrollableElementType | undefined;
export declare const handleScrollableElement: (scrollableElement: React.MutableRefObject<ScrollableElementType | undefined>, rootElement: HTMLElement, touchDistance: {
    x: number;
    y: number;
}) => boolean;
export {};
