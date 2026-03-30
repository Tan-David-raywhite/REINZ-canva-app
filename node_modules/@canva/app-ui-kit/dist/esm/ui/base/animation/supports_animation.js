import * as React from 'react';
export function prefersReducedMotion() {
    const listener = getPrefersReducedMotionListener();
    return listener.prefersReducedMotion;
}
export function usePrefersReducedMotion() {
    const listener = getPrefersReducedMotionListener();
    const [reduce, setReduce] = React.useState(listener.prefersReducedMotion);
    React.useEffect(()=>{
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
