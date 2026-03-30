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
    get TooltipPresenter () {
        return TooltipPresenter;
    },
    get TooltipState () {
        return TooltipState;
    }
});
const _make_observable = require('../../../../base/make_observable/make_observable');
const _mobx = _interop_require_wildcard(require("mobx"));
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
class TooltipState {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            open: _mobx.observable.ref
        });
    }
    constructor({ open = false } = {}){
        this.open = (TooltipState._makeObservable(this), undefined);
        this.timeoutId = 0;
        this.open = open;
    }
}
class TooltipPresenter {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            setOpen: _mobx.action
        });
    }
    showTooltip(tooltip, fadeInDelayMs) {
        this.clearDelay(tooltip);
        return TooltipPresenter.fadeWithDelay(tooltip, fadeInDelayMs, ()=>this.setOpen(tooltip, true));
    }
    hideTooltip(tooltip, fadeOutDelayMs) {
        this.clearDelay(tooltip);
        return TooltipPresenter.fadeWithDelay(tooltip, fadeOutDelayMs, ()=>this.setOpen(tooltip, false));
    }
    setOpen({ state }, open) {
        state.open = open;
    }
    static fadeWithDelay({ state }, delay, cb) {
        if (!delay) return Promise.resolve(cb());
        return new Promise((res)=>{
            state.timeoutId = window.setTimeout(()=>res(cb()), delay);
        });
    }
    clearDelay({ state }) {
        window.clearTimeout(state.timeoutId);
    }
    constructor(){
        TooltipPresenter._makeObservable(this);
    }
}
