export function createHTMLElementHandle(ref, ...args) {
    return args.reduce((handle, prop)=>{
        let boundFn;
        Object.defineProperty(handle, prop, {
            get () {
                if (boundFn) return boundFn;
                const val = ref.current?.[prop];
                if (typeof val === 'function') {
                    boundFn = (...args)=>val.apply(ref.current, args);
                    return boundFn;
                }
                return val;
            }
        });
        return handle;
    }, {});
}
