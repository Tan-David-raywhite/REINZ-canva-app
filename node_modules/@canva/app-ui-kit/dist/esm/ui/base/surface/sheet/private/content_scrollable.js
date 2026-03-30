import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
function useContentChange(setHasScroll) {
    const ref = React.useCallback((el)=>{
        if (!el) return;
        const checkScroll = ()=>{
            const hasContentScroll = el.scrollHeight > el.clientHeight;
            setHasScroll(hasContentScroll);
        };
        const mutationObserver = new MutationObserver(checkScroll);
        mutationObserver.observe(el, {
            childList: true,
            subtree: true
        });
        const resizeObserver = new ResizeObserver(checkScroll);
        resizeObserver.observe(el);
        checkScroll();
        return ()=>{
            mutationObserver.disconnect();
            resizeObserver.disconnect();
        };
    }, [
        setHasScroll
    ]);
    return {
        ref
    };
}
export function useContentScrollable() {
    const [hasScroll, setHasScroll] = React.useState(false);
    const { ref: contentScrollRef } = useContentChange(setHasScroll);
    return {
        hasScroll,
        contentScrollRef
    };
}
