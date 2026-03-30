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
    get useBreakpoint () {
        return useBreakpoint;
    },
    get useResponsiveValue () {
        return useResponsiveValue;
    }
});
const _react = _interop_require_wildcard(require("react"));
const _metrics = require('../../metrics/metrics');
const _breakpoint_store = require("./breakpoint_store");
const _responsive = require("./responsive");
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
function useResponsiveValue(value) {
    return _react.useSyncExternalStore(_breakpoint_store.breakpointStore.subscribe, ()=>(0, _responsive.resolveResponsiveObject)(value, _breakpoint_store.breakpointStore.getSnapshot()), ()=>(0, _responsive.resolveResponsiveObject)(value, _breakpoint_store.breakpointStore.getServerSnapshot()));
}
function useBreakpoint() {
    return useResponsiveValue({
        default: _metrics.Breakpoint.DEFAULT,
        smallUp: _metrics.Breakpoint.SMALL,
        mediumUp: _metrics.Breakpoint.MEDIUM,
        largeUp: _metrics.Breakpoint.LARGE,
        xLargeUp: _metrics.Breakpoint.XLARGE
    });
}
