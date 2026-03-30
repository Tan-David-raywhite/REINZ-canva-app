export function toCallbackRef(ref) {
    if (ref == null || typeof ref === 'function') return ref;
    return getOrCreateCallbackRef(ref);
}
function getOrCreateCallbackRef(ref) {
    const cachedRef = callbackRefCache.get(ref);
    if (cachedRef != null) return cachedRef;
    const callbackRef = (instance)=>{
        ref.current = instance;
        return ()=>{
            ref.current = null;
        };
    };
    callbackRefCache.set(ref, callbackRef);
    return callbackRef;
}
const callbackRefCache = new WeakMap();
