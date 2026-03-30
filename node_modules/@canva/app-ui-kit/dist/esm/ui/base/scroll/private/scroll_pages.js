import { getCoreScrollState, getScrollContainer, scrollBy, scrollTo } from './scroll_core';
export function derivePageScrollState(scrollState) {
    const pageX = scrollState.scrollableX ? {
        numberOfPages: Math.ceil(scrollState.scrollWidth / scrollState.containerWidth),
        currentPageIndex: Math.floor(scrollState.x / scrollState.containerWidth)
    } : null;
    const pageY = scrollState.scrollableY ? {
        numberOfPages: Math.ceil(scrollState.scrollHeight / scrollState.containerHeight),
        currentPageIndex: Math.floor(scrollState.y / scrollState.containerHeight)
    } : null;
    return {
        pageX,
        pageY
    };
}
export function scrollToPage(container, options = {}) {
    const { x, y, easing, duration, rtl } = options;
    const containerElement = getScrollContainer(container);
    const scrollState = getCoreScrollState(containerElement);
    scrollTo(containerElement, {
        x: x != null ? x * scrollState.containerWidth : undefined,
        y: y != null ? y * scrollState.containerHeight : undefined,
        easing,
        duration,
        rtl
    });
}
export function scrollByPage(container, options = {}) {
    const { x, y, easing, duration, rtl } = options;
    const containerElement = getScrollContainer(container);
    const scrollState = getCoreScrollState(containerElement);
    scrollBy(containerElement, {
        x: x != null ? x * scrollState.containerWidth : undefined,
        y: y != null ? y * scrollState.containerHeight : undefined,
        easing,
        duration,
        rtl
    });
}
