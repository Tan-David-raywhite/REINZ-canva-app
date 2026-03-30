"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getScrollState", {
    enumerable: true,
    get: function() {
        return getScrollState;
    }
});
const _scroll_core = require("./scroll_core");
const _scroll_pages = require("./scroll_pages");
function getScrollState(container, options) {
    const coreScrollState = (0, _scroll_core.getCoreScrollState)(container, {
        rtl: options?.rtl
    });
    return {
        ...coreScrollState,
        ...(0, _scroll_pages.derivePageScrollState)(coreScrollState)
    };
}
