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
    get getViewportHeightVariance () {
        return getViewportHeightVariance;
    },
    get useViewportHeightVariance () {
        return useViewportHeightVariance;
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
function useViewportHeightVariance() {
    const watcher = getWatcher();
    return _react.useSyncExternalStore(watcher.subscribe, watcher.getSnapshot);
}
function getViewportHeightVariance() {
    return getWatcher().getSnapshot();
}
function getWatcher() {
    const supportsCssStrategy = window.CSS && window.CSS.supports && window.CSS.supports(`top: ${dynamicHeightVarianceCss}`);
    if (supportsCssStrategy) return {
        subscribe: ()=>()=>{},
        getSnapshot: ()=>dynamicHeightVarianceCss
    };
    return {
        subscribe: (callback)=>{
            window.addEventListener('resize', callback);
            return ()=>window.removeEventListener('resize', callback);
        },
        getSnapshot: ()=>`${window.innerHeight - document.documentElement.clientHeight}px`
    };
}
const dynamicHeightVarianceCss = 'calc(100lvh - 100svh)';
