export const getItemPositions = ({ itemCount, getItemSize, gap = 0 })=>{
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
