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
    get BaseSelectPresenter () {
        return BaseSelectPresenter;
    },
    get BaseSelectStore () {
        return BaseSelectStore;
    }
});
const _make_observable = require('../../../../../base/make_observable/make_observable');
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
class BaseSelectStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            open: _mobx.observable.ref,
            value: _mobx.observable.ref,
            query: _mobx.observable.ref
        });
    }
    constructor(){
        this.open = (BaseSelectStore._makeObservable(this), false);
        this.query = '';
    }
}
class BaseSelectPresenter {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            toggle: _mobx.action,
            setValue: _mobx.action
        });
    }
    toggle(store, open) {
        store.open = open != null ? open : !store.open;
    }
    setValue(store, value) {
        store.value = value;
    }
    constructor(){
        BaseSelectPresenter._makeObservable(this);
    }
}
