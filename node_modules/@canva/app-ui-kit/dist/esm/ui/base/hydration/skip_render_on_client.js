import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
export const SkipRenderOnClient = ({ children, shouldRenderOnClient, initiallyVisible, tagName: TagName = 'div', className })=>{
    const id = React.useId();
    const isJest = typeof jest !== 'undefined' && jest != null;
    const hasWindow = typeof window !== 'undefined';
    const hasDocumentGetElementById = typeof document !== 'undefined' && typeof document.getElementById === 'function';
    const isJsdom = hasWindow && window.navigator.userAgent.includes('jsdom');
    const isClient = isJest || hasWindow && hasDocumentGetElementById && !isJsdom;
    const isFirstRender = useIsFirstRender();
    const shouldRenderOnClientResult = shouldRenderOnClient();
    if (isClient && isFirstRender && shouldRenderOnClientResult === false) {
        const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
        if (el != null) el.innerHTML = '';
    }
    if (isClient && isFirstRender) {
        const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
        if (el != null) el.removeAttribute('style');
    }
    const shouldRender = isClient ? shouldRenderOnClientResult : true;
    const props = {
        id,
        style: initiallyVisible === false && !isClient ? {
            display: 'none'
        } : {},
        className
    };
    return _jsx(TagName, {
        ...props,
        children: shouldRender && children
    });
};
const useIsFirstRender = ()=>{
    const isFirstRender = React.useRef(true);
    if (isFirstRender.current) {
        isFirstRender.current = false;
        return true;
    } else return false;
};
