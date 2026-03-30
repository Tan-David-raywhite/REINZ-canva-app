import type { ResizeControls } from './resize';
import type { SnapPointControls } from './snap_points';
export type UseScrollPanOptions = {
    resizeControls: ResizeControls
    snapPointControls: SnapPointControls
    snapPointIndex: number
    maxPanIndex: number | undefined
    isContentScrolled: () => boolean
};
export type ScrollPanControls = {
    start: () => void
    update: (delta: number) => boolean
    end: () => void
};
export declare function useScrollPan({ resizeControls, snapPointControls, snapPointIndex, maxPanIndex, isContentScrolled, }: UseScrollPanOptions): {
    panControls: ScrollPanControls;
};
