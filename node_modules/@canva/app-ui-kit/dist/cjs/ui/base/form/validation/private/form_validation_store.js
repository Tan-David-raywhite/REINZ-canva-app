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
    get FormValidationContext () {
        return FormValidationContext;
    },
    get FormValidationStore () {
        return FormValidationStore;
    },
    get useRegisterFormValidation () {
        return useRegisterFormValidation;
    }
});
const _make_observable = require('../../../../../base/make_observable/make_observable');
const _mobx = _interop_require_wildcard(require("mobx"));
const _react = _interop_require_wildcard(require("react"));
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
class FormValidationStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            fields: _mobx.observable.shallow
        });
    }
    constructor(){
        this.fields = (FormValidationStore._makeObservable(this), new Map());
    }
}
const registerField = _mobx.action((store, fieldName, fieldValidationStore)=>{
    store.fields.set(fieldName, fieldValidationStore);
});
const deregisterField = _mobx.action((store, fieldName)=>{
    store.fields.delete(fieldName);
});
const FormValidationContext = _react.createContext(null);
function useRegisterFormValidation({ name, fieldValidation }) {
    const store = _react.useContext(FormValidationContext)?.store;
    _react.useEffect(()=>{
        if (store == null || name == null) return;
        registerField(store, name, fieldValidation);
        return ()=>{
            deregisterField(store, name);
        };
    }, [
        fieldValidation,
        name,
        store
    ]);
}
