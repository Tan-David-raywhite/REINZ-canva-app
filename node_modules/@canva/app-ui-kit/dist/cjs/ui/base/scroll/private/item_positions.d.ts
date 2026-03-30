export type ItemPositions = {
    itemStartEdges: number[]
    itemEndEdges: number[]
    itemCenterPoints: number[]
    itemSizes: number[]
    totalSize: number
};
export type GetItemSize = (index: number) => number;
export declare const getItemPositions: ({ itemCount, getItemSize, gap, }: {
    itemCount: number
    getItemSize: GetItemSize
    gap?: number
}) => ItemPositions;
