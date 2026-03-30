"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getItemPositions", {
    enumerable: true,
    get: function() {
        return getItemPositions;
    }
});
const getItemPositions = ({ itemCount, getItemSize, gap = 0 })=>{
    const itemStartEdges = [];
    const itemCenterPoints = [];
    const itemEndEdges = [];
    const itemSizes = [];
    let totalSize = 0;
    Array.from({
        length: itemCount
    }, ()=>{}).forEach((_value, index)=>{
        if (index !== 0) totalSize += gap;
        itemStartEdges.push(totalSize);
        const itemSize = getItemSize(index);
        itemSizes.push(itemSize);
        itemCenterPoints.push(totalSize + itemSize / 2);
        totalSize += itemSize;
        itemEndEdges.push(totalSize);
        return totalSize;
    });
    return {
        itemEndEdges,
        itemCenterPoints,
        itemStartEdges,
        itemSizes,
        totalSize
    };
};
