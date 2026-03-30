"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get prefersReducedMotion () {
        return prefersReducedMotion;
    },
    get usePrefersReducedMotion () {
        return usePrefersReducedMotion;
    }
});
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
function prefersReducedMotion() {
    const listener = getPrefersReducedMotionListener();
    return listener.prefersReducedMotion;
}
function usePrefersReducedMotion() {
    const listener = getPrefersReducedMotionListener();
    const [reduce, setReduce] = _react.useState(listener.prefersReducedMotion);
    _react.useEffect(()=>{
        if (listener != null) {
            const callback = (e)=>setReduce(e.matches);
            listener.addListener(callback);
            return ()=>{
                listener.removeListener(callback);
            };
        }
    }, [
        listener,
        setReduce
    ]);
    return reduce;
}
function getPrefersReducedMotionListener() {
    return globalListener ?? (globalListener = new PrefersReducedMotionListener());
}
class PrefersReducedMotionListener {
    get prefersReducedMotion() {
        return this.mediaQuery != null && this.mediaQuery.matches;
    }
    addListener(listener) {
        this.mediaQuery?.addListener(listener);
    }
    removeListener(listener) {
        this.mediaQuery?.removeListener(listener);
    }
    constructor(){
        this.mediaQuery = typeof window === 'undefined' ? undefined : window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    }
}
let globalListener;
