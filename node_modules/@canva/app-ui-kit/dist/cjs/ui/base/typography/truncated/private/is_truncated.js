"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIsTruncated", {
    enumerable: true,
    get: function() {
        return useIsTruncated;
    }
});
const _memoize = require('../../../../../base/memoize');
const _react = _interop_require_wildcard(require("react"));
const _resizeobserverpolyfill = _interop_require_default(require("resize-observer-polyfill"));
const _handle = require('../../../handle/handle');
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
const resizedEventName = 'resized';
const getResizeObserver = (0, _memoize.memoize)(()=>new _resizeobserverpolyfill.default((els)=>{
        for (const el of els)el.target.dispatchEvent(new Event(resizedEventName, {
            bubbles: false
        }));
    }));
function useIsTruncated(text, measure = 'onRender') {
    const [isTruncated, setIsTruncated] = _react.useState(false);
    const targetRef = _react.useRef(null);
    const updateTruncated = _react.useCallback(()=>{
        const target = targetRef.current;
        if (target == null) return;
        setIsTruncated(target.scrollWidth - target.offsetWidth > 1 || target.scrollHeight - target.offsetHeight > 1);
    }, []);
    const setRef = _react.useCallback((target)=>{
        const oldTarget = targetRef.current;
        const newTarget = (0, _handle.dangerouslyGetElement)(target);
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
    _react.useEffect(()=>{
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
