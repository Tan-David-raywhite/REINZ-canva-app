const SNAP_TOLERANCE_PX = 1;
function isCloseEnough(a, b, epsilon = SNAP_TOLERANCE_PX) {
    return Math.abs(a - b) <= epsilon;
}
export function scrollPositionByPage(itemSizes, pageSize, scrollPosition, pages) {
    const target = scrollPosition + pageSize * pages;
    const itemPositions = itemSizes.reduce((arr, width, index)=>{
        arr.push(width + arr[index]);
        return arr;
    }, [
        0
    ]);
    let targetIndex;
    if (pages > 0) {
        targetIndex = itemPositions.findIndex((p)=>p > target) - 1;
        if (isCloseEnough(itemPositions[targetIndex], scrollPosition))
            targetIndex += 1;
        return itemPositions[targetIndex] || itemPositions[itemPositions.length - 1];
    } else {
        targetIndex = itemPositions.findIndex((p)=>p >= target);
        if (isCloseEnough(itemPositions[targetIndex], scrollPosition)) targetIndex -= 1;
        return itemPositions[targetIndex] || 0;
    }
}
export function scrollPositionByItem(itemSizes, pageSize, scrollPosition, index, scrollLogicalPosition) {
    const boundIndex = Math.min(Math.max(index, 0), itemSizes.length);
    const itemPosition = itemSizes.slice(0, boundIndex).reduce((sum, width)=>sum + width, 0);
    const itemWidth = itemSizes[boundIndex] ?? 0;
    const isBeforePage = itemPosition < scrollPosition;
    const isAfterPage = itemPosition + itemWidth > scrollPosition + pageSize;
    if (isBeforePage || isAfterPage) return scrollLogicalPosition === 'nearest' && isAfterPage ? itemPosition - pageSize + itemWidth : itemPosition;
    return scrollPosition;
}
