import * as React from 'react';
import '../smooth_scroll_polyfill/smooth_scroll_polyfill';
export type ScrollState = {
    atEnd?: boolean;
    atStart?: boolean;
    closestItemFromStartIndex?: number;
};
export type ScrollControlsProps = {
    ref?: React.Ref<ScrollControls>
    smoothScroll?: boolean
    itemWidths?: number[]
    itemGap?: number
    innerRef?: React.Ref<HTMLElement>
    doNotUseForceLTRForPageNavigator?: boolean
    onScroll?: (newState: ContextualScrollState) => void
    children(opts: {
        scrollableRef(el: HTMLElement | null): void;
        moveNext(): void;
        movePrev(): void;
        moveToItem(itemIndex: number): void;
        scrollState: ScrollState
    }): React.ReactNode;
};
export declare class ContextualScrollState {
    isRtl: boolean;
    atLeft?: boolean;
    atRight?: boolean;
    closestItemFromStartIndex?: number;
    constructor(isRtl: boolean);
    get atStart(): boolean | undefined;
    get atEnd(): boolean | undefined;
}
export type ScrollControls = {
    moveToItem: (itemIndex: number, scrollLogicalPosition?: 'start' | 'nearest', disableAnimations?: boolean) => void
    moveNext: () => void
    movePrev: () => void
    recalculateScrollState: () => void
};
export declare function ScrollControls(props: ScrollControlsProps): React.ReactNode;
