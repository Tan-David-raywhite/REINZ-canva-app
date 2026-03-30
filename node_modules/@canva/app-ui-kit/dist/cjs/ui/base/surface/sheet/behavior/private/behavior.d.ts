import * as React from 'react';
import type { GestureElement } from '../../../../gestures/recognizer';
import type { GestureHandle } from '../../../../handle/handle';
import type { ResizeControls, UseResizeOptions } from './resize';
import type { SnapPoint, SnapPointControls, UseResolvedSnapPointsOptions } from './snap_points';
export type { SnapPoint };
export type UseSheetControlsOptions = UseResolvedSnapPointsOptions & Omit<UseResizeOptions, 'snapPointControls'>;
export type UseSheetControlsResult = {
    resizing: boolean
    controls: SheetControls
};
export type SheetControls = {
    resizeControls: ResizeControls;
    snapPointControls: SnapPointControls;
    snapPoints: SnapPoint[];
    snapPointIndex: number;
};
export declare function useSheetControls(
    { snapPoints, snapPointIndex, setSnapPointIndex, getScrollHeight, setOffset, }: UseSheetControlsOptions
): UseSheetControlsResult;
export type UseSheetDragOptions = {
    controls: SheetControls
};
export declare function useSheetDrag({ controls }: UseSheetDragOptions): {
    dragRef: ((elementOrHandle: GestureElement | GestureHandle | null) => void) | undefined;
};
export type UseSheetScrollOptions = {
    controls: SheetControls
    scrollToResizeBelow?: SnapPoint
};
export declare function useSheetScroll({ controls, scrollToResizeBelow }: UseSheetScrollOptions): {
    contentRef: React.Ref<HTMLElement>;
};
export declare function useSheetScrollIsolation<E extends HTMLElement>(): React.Ref<E>;
