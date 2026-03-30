import { memoize } from '../../../../../base/memoize';
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { dangerouslyGetElement } from '../../../handle/handle';
const resizedEventName = 'resized';
const getResizeObserver = memoize(()=>new ResizeObserver((els)=>{
        for (const el of els)el.target.dispatchEvent(new Event(resizedEventName, {
            bubbles: false
        }));
    }));
export function useIsTruncated(text, measure = 'onRender') {
    const [isTruncated, setIsTruncated] = React.useState(false);
    const targetRef = React.useRef(null);
    const updateTruncated = React.useCallback(()=>{
        const target = targetRef.current;
        if (target == null) return;
        setIsTruncated(target.scrollWidth - target.offsetWidth > 1 || target.scrollHeight - target.offsetHeight > 1);
    }, []);
    const setRef = React.useCallback((target)=>{
        const oldTarget = targetRef.current;
        const newTarget = dangerouslyGetElement(target);
        targetRef.current = newTarget;
        if (measure === 'onRender')
        updateTruncated();
        if (measure === 'onResize') {
            const resizeObserver = getResizeObserver();
            if (oldTarget != null) {
                oldTarget.removeEventListener(resizedEventName, updateTruncated);
                resizeObserver.unobserve(oldTarget);
            }
            if (newTarget != null) {
                newTarget.addEventListener(resizedEventName, updateTruncated);
                resizeObserver.observe(newTarget);
            }
        }
    }, [
        measure,
        updateTruncated
    ]);
    React.useEffect(()=>{
        if (measure === 'onRender')
            updateTruncated();
    }, [
        text,
        measure,
        updateTruncated
    ]);
    return {
        ref: setRef,
        isTruncated
    };
}
