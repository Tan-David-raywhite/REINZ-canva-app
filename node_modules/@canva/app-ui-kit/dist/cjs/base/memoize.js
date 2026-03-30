"use strict"
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
    get memoize () {
        return memoize;
    },
    get memoize1 () {
        return memoize1;
    }
});
const _preconditions = require("./preconditions");
const _result = require("./result");
function isPromiseLike(p) {
    return p != null && p.then != null;
}
function memoize(fn, { invalidateOnError } = {
    invalidateOnError: false
}) {
    let promiseDidReject = false;
    let result;
    const memoFn = (...args)=>{
        _preconditions.Preconditions.checkArgument(args.length === 0);
        if (result == null || invalidateOnError && (!result.ok || promiseDidReject)) try {
            promiseDidReject = false;
            result = _result.Result.Ok(fn());
            if (isPromiseLike(result.value))
            result.value.then(null, (_e)=>promiseDidReject = true);
        } catch (e) {
            result = _result.Result.Err(e);
        }
        if (result.ok) return result.value;
        else throw result.error;
    };
    return memoFn;
}
function memoize1(fn) {
    const cache = new WeakMap();
    const memoFn = (key, ...rest)=>{
        _preconditions.Preconditions.checkArgument(rest.length === 0);
        if (!cache.has(key)) cache.set(key, fn(key));
        return cache.get(key);
    };
    return memoFn;
}
