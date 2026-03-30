export function composeRefs(...refs) {
    if (refs.length === 2)
    return composeTwoRefs(refs[0], refs[1]) || null;
    const composedRef = refs.slice(1).reduce((semiCombinedRef, refToInclude)=>{
        return composeTwoRefs(semiCombinedRef, refToInclude);
    }, refs[0]);
    return composedRef || null;
}
const composedRefCache = new WeakMap();
function composeTwoRefs(ref1, ref2) {
    if (ref1 && ref2) {
        const ref1Cache = composedRefCache.get(ref1) || new WeakMap();
        composedRefCache.set(ref1, ref1Cache);
        const composedRef = ref1Cache.get(ref2) || ((instance)=>{
            const ref1Return = updateRef(ref1, instance);
            const ref2Return = updateRef(ref2, instance);
            const ref1Cleanup = typeof ref1Return === 'function' ? ref1Return : ()=>{
                updateRef(ref1, null);
            };
            const ref2Cleanup = typeof ref2Return === 'function' ? ref2Return : ()=>{
                updateRef(ref2, null);
            };
            return ()=>{
                ref1Cleanup();
                ref2Cleanup();
            };
        });
        ref1Cache.set(ref2, composedRef);
        return composedRef;
    }
    if (!ref1) return ref2;
    else return ref1;
}
function updateRef(ref, instance) {
    if (typeof ref === 'function') return ref(instance);
    else ref.current = instance;
}
