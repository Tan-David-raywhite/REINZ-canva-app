"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "calculateScrollStatePosition", {
    enumerable: true,
    get: function() {
        return calculateScrollStatePosition;
    }
});
const _normalized_scroll = require("../normalized_scroll");
const calculateScrollStatePosition = (scrollableEl, layout, isRtl)=>{
    let containerSize, scrollSize, scrollPosition;
    if (layout === 'horizontal') {
        scrollSize = scrollableEl.scrollWidth;
        containerSize = scrollableEl.clientWidth;
        scrollPosition = isRtl ? scrollSize - containerSize - (0, _normalized_scroll.getNormalizedScrollLeft)(scrollableEl, isRtl) : (0, _normalized_scroll.getNormalizedScrollLeft)(scrollableEl, isRtl);
    } else {
        scrollSize = scrollableEl.scrollHeight;
        containerSize = scrollableEl.clientHeight;
        scrollPosition = scrollableEl.scrollTop;
    }
    scrollPosition = Math.min(Math.max(scrollPosition, 0), scrollSize - containerSize);
    return {
        scrollPosition,
        containerSize
    };
};
