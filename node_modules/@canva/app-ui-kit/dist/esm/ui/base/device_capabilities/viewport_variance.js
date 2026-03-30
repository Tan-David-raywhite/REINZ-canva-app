import * as React from 'react';
export function useViewportHeightVariance() {
    const watcher = getWatcher();
    return React.useSyncExternalStore(watcher.subscribe, watcher.getSnapshot);
}
export function getViewportHeightVariance() {
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
