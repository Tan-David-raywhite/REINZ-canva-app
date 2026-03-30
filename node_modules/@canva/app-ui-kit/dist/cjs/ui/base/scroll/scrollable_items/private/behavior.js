"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get deriveScrollableItemsState () {
        return deriveScrollableItemsState;
    },
    get getCurrentItemIndex () {
        return getCurrentItemIndex;
    },
    get getItemScrollTarget () {
        return getItemScrollTarget;
    },
    get getPageScrollBy () {
        return getPageScrollBy;
    },
    get useScrollableItems () {
        return useScrollableItems;
    }
});
const _compose_refs = require('../../../../../base/react/compose_refs');
const _react = _interop_require_wildcard(require("react"));
const _scroll = require('../../scroll');
const _scrollable = require('../../scrollable/scrollable');
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function useScrollableItems(options) {
    const { onScroll: onScrollOption, onScrollStateChange: onScrollStateChangeOption, debounceMs = 0, gap = 0, getItemWidth: getItemWidthOption, getItemHeight: getItemHeightOption, itemCount: itemCountOption } = options;
    const itemPositionsXRef = _react.useRef(null);
    const itemPositionsYRef = _react.useRef(null);
    const scrollStateRef = _react.useRef(undefined);
    const scrollContainerRef = _react.useRef(null);
    const getItemWidth = _react.useCallback((index)=>{
        if (getItemWidthOption != null) return typeof getItemWidthOption === 'number' ? getItemWidthOption : getItemWidthOption(index);
        const item = scrollContainerRef.current?.children.item(index);
        if (item != null) return getElementWidth(item);
        return 0;
    }, [
        scrollContainerRef,
        getItemWidthOption
    ]);
    const getItemHeight = _react.useCallback((index)=>{
        if (getItemHeightOption != null) return typeof getItemHeightOption === 'number' ? getItemHeightOption : getItemHeightOption(index);
        const item = scrollContainerRef.current?.children.item(index);
        if (item != null) return getElementHeight(item);
        return 0;
    }, [
        scrollContainerRef,
        getItemHeightOption
    ]);
    const updateState = _react.useCallback((element, scrollableState)=>{
        const itemCount = itemCountOption ?? element.children.length;
        itemPositionsXRef.current = scrollableState.scrollableX ? (0, _scroll.getItemPositions)({
            getItemSize: getItemWidth,
            itemCount,
            gap
        }) : null;
        itemPositionsYRef.current = scrollableState.scrollableY ? (0, _scroll.getItemPositions)({
            getItemSize: getItemHeight,
            itemCount,
            gap
        }) : null;
        const newScrollableItemsState = deriveScrollableItemsState({
            scrollableState,
            itemPositionsX: itemPositionsXRef.current,
            itemPositionsY: itemPositionsYRef.current
        });
        onScrollStateChangeOption?.(newScrollableItemsState);
        scrollStateRef.current = newScrollableItemsState;
    }, [
        gap,
        getItemHeight,
        getItemWidth,
        onScrollStateChangeOption,
        itemCountOption
    ]);
    const onScroll = _react.useCallback((scrollableState)=>{
        const newScrollableItemsState = deriveScrollableItemsState({
            scrollableState,
            itemPositionsX: itemPositionsXRef.current,
            itemPositionsY: itemPositionsYRef.current
        });
        onScrollOption?.(newScrollableItemsState);
    }, [
        onScrollOption
    ]);
    const onScrollStateChange = _react.useCallback((scrollableState)=>{
        if (scrollContainerRef.current != null && scrollContainerRef.current.offsetParent != null)
        updateState(scrollContainerRef.current, scrollableState);
    }, [
        updateState
    ]);
    const { handle: baseHandle, ref: baseRef, onScroll: baseOnScroll } = (0, _scrollable.useScrollable)({
        onScroll,
        onScrollStateChange,
        debounceMs
    });
    const handle = _react.useMemo(()=>{
        return {
            ...baseHandle,
            getScrollState: ()=>scrollStateRef.current,
            scrollByPage: (options)=>{
                baseHandle.scrollBy({
                    ...options,
                    x: options.x != null && scrollStateRef.current?.containerWidth != null && scrollStateRef.current?.itemX?.currentItemIndex != null && itemPositionsXRef.current != null ? getPageScrollBy({
                        pageAmount: options.x,
                        currentItemIndex: scrollStateRef.current?.itemX?.currentItemIndex,
                        containerSize: scrollStateRef.current?.containerWidth,
                        itemPositions: itemPositionsXRef.current,
                        scrollPosition: scrollStateRef.current?.x
                    }) : undefined,
                    y: options.y != null && scrollStateRef.current?.containerHeight != null && scrollStateRef.current?.itemY?.currentItemIndex != null && itemPositionsYRef.current != null ? getPageScrollBy({
                        pageAmount: options.y,
                        currentItemIndex: scrollStateRef.current?.itemY?.currentItemIndex,
                        containerSize: scrollStateRef.current?.containerHeight,
                        itemPositions: itemPositionsYRef.current,
                        scrollPosition: scrollStateRef.current?.y
                    }) : undefined
                });
            },
            scrollToItem: (options)=>{
                baseHandle.scrollTo({
                    ...options,
                    x: options.x != null && itemPositionsXRef.current != null && scrollStateRef.current?.containerWidth != null ? getItemScrollTarget({
                        itemIndex: options.x,
                        containerSize: scrollStateRef.current?.containerWidth,
                        scrollPosition: scrollStateRef.current?.x,
                        itemAlign: options.itemAlign,
                        itemPositions: itemPositionsXRef.current
                    }) : undefined,
                    y: options.y != null && itemPositionsYRef.current != null && scrollStateRef.current?.containerHeight != null ? getItemScrollTarget({
                        itemIndex: options.y,
                        containerSize: scrollStateRef.current?.containerHeight,
                        scrollPosition: scrollStateRef.current?.y,
                        itemAlign: options.itemAlign,
                        itemPositions: itemPositionsYRef.current
                    }) : undefined
                });
            },
            scrollByItem: (options)=>{
                const { itemAlign = 'start' } = options;
                const targetIndexX = options.x != null && scrollStateRef.current?.itemX != null ? clamp(scrollStateRef.current.itemX.currentItemIndex[itemAlign] + options.x, 0, scrollStateRef.current.itemX.numberOfItems - 1) : undefined;
                const targetIndexY = options.y != null && scrollStateRef.current?.itemY != null ? clamp(scrollStateRef.current.itemY.currentItemIndex[itemAlign] + options.y, 0, scrollStateRef.current.itemY.numberOfItems - 1) : undefined;
                handle.scrollToItem({
                    x: targetIndexX,
                    y: targetIndexY,
                    itemAlign
                });
            }
        };
    }, [
        baseHandle
    ]);
    const setRef = _react.useCallback((element)=>{
        scrollContainerRef.current = element;
    }, []);
    return {
        ref: (0, _compose_refs.composeRefs)(setRef, baseRef),
        handle,
        onScroll: baseOnScroll
    };
}
const getElementWidth = (element)=>{
    const HTMLElement = (element.ownerDocument?.defaultView ?? window).HTMLElement;
    return element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
};
const getElementHeight = (element)=>{
    const HTMLElement = (element.ownerDocument?.defaultView ?? window).HTMLElement;
    return element instanceof HTMLElement ? element.offsetHeight : element.clientHeight;
};
const clamp = (num, min, max)=>Math.min(Math.max(min, num), max);
const TOLERANCE_PX = 1;
function isCloseEnough(a, b) {
    return Math.abs(a - b) <= TOLERANCE_PX;
}
const getCurrentItemIndex = ({ itemPositions, scrollPosition, containerSize })=>{
    const containerStartEdge = scrollPosition;
    const containerCenter = scrollPosition + containerSize / 2;
    const containerEndEdge = scrollPosition + containerSize;
    const itemCount = itemPositions.itemSizes.length;
    let startItemIndex = -1;
    let centerItemIndex = -1;
    let endItemIndex = -1;
    let closestDistanceToCenter = Infinity;
    let foundCenterItem = false;
    for(let index = 0; index < itemCount; index++){
        const itemStartEdge = itemPositions.itemStartEdges[index];
        const itemEndEdge = itemPositions.itemEndEdges[index];
        if (startItemIndex === -1)
        {
            if (itemStartEdge > containerStartEdge || isCloseEnough(itemStartEdge, containerStartEdge)) {
                if (itemStartEdge > containerEndEdge) {
                    startItemIndex = index - 1;
                    centerItemIndex = index - 1;
                    endItemIndex = index - 1;
                    break;
                } else if (itemEndEdge < containerEndEdge || isCloseEnough(itemEndEdge, containerEndEdge))
                startItemIndex = index;
                else {
                    startItemIndex = index;
                    centerItemIndex = index;
                    endItemIndex = index;
                    break;
                }
            }
        }
        if (!foundCenterItem) {
            const itemCenter = itemPositions.itemCenterPoints[index];
            const itemDistanceToCenter = Math.abs(containerCenter - itemCenter);
            if (itemDistanceToCenter < closestDistanceToCenter) {
                closestDistanceToCenter = itemDistanceToCenter;
                centerItemIndex = index;
            } else
                foundCenterItem = true;
        }
        if (foundCenterItem) {
            if (itemEndEdge < containerEndEdge || isCloseEnough(itemEndEdge, containerEndEdge))
            endItemIndex = index;
            else break;
        }
    }
    return {
        start: startItemIndex === -1 ? centerItemIndex : startItemIndex,
        center: centerItemIndex,
        end: endItemIndex === -1 ? centerItemIndex : endItemIndex
    };
};
const getSingleDirectionItemState = ({ itemPositions, scrollPosition, containerSize })=>{
    return {
        currentItemIndex: getCurrentItemIndex({
            itemPositions,
            scrollPosition,
            containerSize
        }),
        numberOfItems: itemPositions.itemEndEdges.length
    };
};
function deriveScrollableItemsState({ scrollableState, itemPositionsX, itemPositionsY }) {
    const itemX = itemPositionsX != null ? getSingleDirectionItemState({
        itemPositions: itemPositionsX,
        scrollPosition: scrollableState.x,
        containerSize: scrollableState.containerWidth
    }) : null;
    const itemY = itemPositionsY != null ? getSingleDirectionItemState({
        itemPositions: itemPositionsY,
        scrollPosition: scrollableState.y,
        containerSize: scrollableState.containerHeight
    }) : null;
    return {
        ...scrollableState,
        itemX,
        itemY
    };
}
const getItemScrollTarget = ({ itemIndex, containerSize, scrollPosition, itemPositions, itemAlign = 'start' })=>{
    const itemStartEdge = itemPositions.itemStartEdges[itemIndex];
    const itemEndEdge = itemPositions.itemEndEdges[itemIndex];
    if (itemAlign === 'nearest') {
        const isBeforePage = itemStartEdge < scrollPosition;
        const isAfterPage = itemEndEdge > scrollPosition + containerSize;
        if (!isBeforePage && !isAfterPage)
        return scrollPosition;
        return getItemScrollTarget({
            itemIndex,
            containerSize,
            scrollPosition,
            itemPositions,
            itemAlign: isAfterPage ? 'end' : 'start'
        });
    }
    if (itemAlign === 'start') return itemStartEdge;
    if (itemAlign === 'end') return Math.max(0, itemPositions.itemEndEdges[itemIndex] - containerSize);
    return Math.max(0, itemStartEdge - containerSize / 2 + itemPositions.itemSizes[itemIndex] / 2);
};
const getPageScrollBy = ({ pageAmount, currentItemIndex, containerSize, itemPositions, scrollPosition })=>{
    const { start: startItemIndex, end: endItemIndex } = currentItemIndex;
    const { itemStartEdges, itemEndEdges, totalSize } = itemPositions;
    if (pageAmount === 1) {
        if (endItemIndex === itemStartEdges.length - 1)
        return Math.min(containerSize, totalSize - containerSize - scrollPosition);
        const firstItemIndexInNextPage = endItemIndex + 1;
        return itemStartEdges[firstItemIndexInNextPage] - itemStartEdges[startItemIndex];
    }
    if (pageAmount === -1) {
        if (startItemIndex === 0)
        return Math.max(-containerSize, -scrollPosition);
        const lastItemIndexInPreviousPage = startItemIndex - 1;
        return itemEndEdges[lastItemIndexInPreviousPage] - itemEndEdges[endItemIndex];
    }
    return containerSize * pageAmount;
};
