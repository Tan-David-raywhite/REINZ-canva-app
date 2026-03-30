import type { SnapPointControls } from './snap_points';
export type UseResizeOptions = {
    snapPointControls: SnapPointControls
    snapPointIndex: number
    setSnapPointIndex: (value: number) => void
    setOffset: (offset: number | undefined, snapPointHeight: number | undefined) => void
};
export type ResizeControls = {
    start: () => void
    update: (offset: number) => void
    end: () => void
};
export declare function useResize(
 { snapPointControls, snapPointIndex, setSnapPointIndex, setOffset, }: UseResizeOptions
): {
    resizing: boolean;
    resizeControls: ResizeControls;
};
