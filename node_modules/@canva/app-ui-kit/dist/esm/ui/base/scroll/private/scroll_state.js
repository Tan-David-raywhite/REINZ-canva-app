import { getCoreScrollState } from './scroll_core';
import { derivePageScrollState } from './scroll_pages';
export function getScrollState(container, options) {
    const coreScrollState = getCoreScrollState(container, {
        rtl: options?.rtl
    });
    return {
        ...coreScrollState,
        ...derivePageScrollState(coreScrollState)
    };
}
