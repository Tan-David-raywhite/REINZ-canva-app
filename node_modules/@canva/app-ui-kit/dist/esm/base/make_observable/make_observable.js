import {
    _getGlobalState as getGlobalState,
    action,
    makeObservable as mobxMakeObservable,
} from 'mobx';
export function makeObservable(target, decorators) {
    const forwardedProperties = {};
    let alreadyApplied = appliedDecorators.get(target);
    alreadyApplied || appliedDecorators.set(target, alreadyApplied = {});
    for (const [key, decorator] of Object.entries(decorators)){
        if (!decorator) continue;
        if (checkAlreadyApplied(alreadyApplied, key, decorator)) continue;
        if (maybeApplyAction(target, key, decorator)) continue;
        if (!(key in target)) Object.defineProperty(target, key, {
            configurable: true
        });
        forwardedProperties[key] = decorator;
    }
    return mobxMakeObservable(target, forwardedProperties);
}
const appliedDecorators = new WeakMap();
function checkAlreadyApplied(alreadyApplied, key, decorator) {
    if (key in alreadyApplied) {
        if (alreadyApplied[key] !== decorator) throw new MakeObservableError(`Can not apply a different decorator to the already decorated ${key} property. Check the parent class decorator is the same.`);
        return true;
    }
    alreadyApplied[key] = decorator;
    return false;
}
function maybeApplyAction(target, key, decorator) {
    if (decorator !== action && decorator !== action.bound) return false;
    let setAction = maybeMakeAction(target, decorator, target[key]);
    Object.defineProperty(target, key, {
        get () {
            return setAction;
        },
        set (v) {
            setAction = maybeMakeAction(target, decorator, v);
        },
        configurable: !getGlobalState().safeDescriptors
    });
    return true;
}
function maybeMakeAction(target, decorator, fn) {
    if (typeof fn !== 'function') return fn;
    else if (fn?._isMockFunction)
    return fn;
    else if (decorator === action.bound)
    return action(fn.bind(target));
    else return action(fn);
}
class MakeObservableError extends Error {
    constructor(message){
        super(message);
        this.name = 'MakeObservableError';
        Object.setPrototypeOf(this, MakeObservableError.prototype);
    }
}
