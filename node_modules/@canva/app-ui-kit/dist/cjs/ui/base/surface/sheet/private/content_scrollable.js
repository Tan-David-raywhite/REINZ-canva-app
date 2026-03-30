"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useContentScrollable", {
    enumerable: true,
    get: function() {
        return useContentScrollable;
    }
});
const _react = _interop_require_wildcard(require("react"));
const _resizeobserverpolyfill = _interop_require_default(require("resize-observer-polyfill"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
function useContentChange(setHasScroll) {
    const ref = _react.useCallback((el)=>{
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
        const resizeObserver = new _resizeobserverpolyfill.default(checkScroll);
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
function useContentScrollable() {
    const [hasScroll, setHasScroll] = _react.useState(false);
    const { ref: contentScrollRef } = useContentChange(setHasScroll);
    return {
        hasScroll,
        contentScrollRef
    };
}
