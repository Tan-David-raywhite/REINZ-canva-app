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
    get derivePageScrollState () {
        return derivePageScrollState;
    },
    get scrollByPage () {
        return scrollByPage;
    },
    get scrollToPage () {
        return scrollToPage;
    }
});
const _scroll_core = require("./scroll_core");
function derivePageScrollState(scrollState) {
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
function scrollToPage(container, options = {}) {
    const { x, y, easing, duration, rtl } = options;
    const containerElement = (0, _scroll_core.getScrollContainer)(container);
    const scrollState = (0, _scroll_core.getCoreScrollState)(containerElement);
    (0, _scroll_core.scrollTo)(containerElement, {
        x: x != null ? x * scrollState.containerWidth : undefined,
        y: y != null ? y * scrollState.containerHeight : undefined,
        easing,
        duration,
        rtl
    });
}
function scrollByPage(container, options = {}) {
    const { x, y, easing, duration, rtl } = options;
    const containerElement = (0, _scroll_core.getScrollContainer)(container);
    const scrollState = (0, _scroll_core.getCoreScrollState)(containerElement);
    (0, _scroll_core.scrollBy)(containerElement, {
        x: x != null ? x * scrollState.containerWidth : undefined,
        y: y != null ? y * scrollState.containerHeight : undefined,
        easing,
        duration,
        rtl
    });
}
