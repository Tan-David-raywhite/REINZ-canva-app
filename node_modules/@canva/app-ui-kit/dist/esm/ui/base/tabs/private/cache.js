import { useState } from 'react';
export function createCache() {
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
export function useCache() {
    const [cache] = useState(createCache);
    return cache;
}
