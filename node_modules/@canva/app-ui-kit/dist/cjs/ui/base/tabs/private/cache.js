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
    get createCache () {
        return createCache;
    },
    get useCache () {
        return useCache;
    }
});
const _react = require("react");
function createCache() {
    const cache = new Map();
    const setItem = (key, value)=>{
        cache.set(key, value);
    };
    const getItem = (key)=>{
        return cache.get(key);
    };
    return {
        setItem,
        getItem
    };
}
function useCache() {
    const [cache] = (0, _react.useState)(createCache);
    return cache;
}
