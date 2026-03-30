"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SkipRenderOnClient", {
    enumerable: true,
    get: function() {
        return SkipRenderOnClient;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
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
const SkipRenderOnClient = ({ children, shouldRenderOnClient, initiallyVisible, tagName: TagName = 'div', className })=>{
    const id = _react.useId();
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
    return (0, _jsxruntime.jsx)(TagName, {
        ...props,
        children: shouldRender && children
    });
};
const useIsFirstRender = ()=>{
    const isFirstRender = _react.useRef(true);
    if (isFirstRender.current) {
        isFirstRender.current = false;
        return true;
    } else return false;
};
