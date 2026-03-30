import { getNormalizedScrollLeft } from '../normalized_scroll';
export const calculateScrollStatePosition = (scrollableEl, layout, isRtl)=>{
    let containerSize, scrollSize, scrollPosition;
    if (layout === 'horizontal') {
        scrollSize = scrollableEl.scrollWidth;
        containerSize = scrollableEl.clientWidth;
        scrollPosition = isRtl ? scrollSize - containerSize - getNormalizedScrollLeft(scrollableEl, isRtl) : getNormalizedScrollLeft(scrollableEl, isRtl);
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
