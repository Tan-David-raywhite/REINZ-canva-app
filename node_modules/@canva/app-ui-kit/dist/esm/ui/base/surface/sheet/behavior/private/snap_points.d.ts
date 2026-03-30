export type SnapPoint = {
    type: 'fixed';
    height: number;
} | {
    type: 'auto';
    height: number;
};
export type ResolvedSnapPoint = {
    height: number
    indices: number[]
};
export type UseResolvedSnapPointsOptions = {
    snapPoints: SnapPoint[]
    getScrollHeight: () => number
};
export type SnapPointControls = {
    get: () => ResolvedSnapPoint[]
    clear: () => void
};
export declare function useResolvedSnapPoints({ snapPoints, getScrollHeight, }: UseResolvedSnapPointsOptions): {
    snapPointControls: SnapPointControls;
};
export declare function pointForIndex(points: ResolvedSnapPoint[], snapPointIndex: number): ResolvedSnapPoint;
