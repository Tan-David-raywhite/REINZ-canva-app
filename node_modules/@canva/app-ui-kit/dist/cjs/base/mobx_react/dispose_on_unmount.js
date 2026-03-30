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
    get disposeOnUnmount () {
        return disposeOnUnmount;
    },
    get instStoreKey () {
        return instStoreKey;
    }
});
const _react = _interop_require_wildcard(require("react"));
const _utils = require("./utils/utils");
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
const instStoreKey = Symbol('disposeOnUnmountInst');
function runDisposersOnWillUnmount() {
    [
        ...(this[instStoreKey] || [])
    ].forEach((prop)=>{
        if (prop != null) prop();
    });
    if (this[instStoreKey])
        this[instStoreKey].length = 0;
}
function disposeOnUnmount(target, propertyFunctions) {
    if (Array.isArray(propertyFunctions))
    return propertyFunctions.map((fn)=>disposeOnUnmount(target, fn));
    const c = Object.getPrototypeOf(target).constructor;
    const c2 = Object.getPrototypeOf(target.constructor);
    const c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));
    if (!(c === _react.Component || c === _react.PureComponent || c2 === _react.Component || c2 === _react.PureComponent || c3 === _react.Component || c3 === _react.PureComponent)) throw new Error('[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.');
    const componentWasAlreadyModified = !!target[instStoreKey];
    const store = target[instStoreKey] || (target[instStoreKey] = []);
    store.push(propertyFunctions);
    if (!componentWasAlreadyModified)
        (0, _utils.patch)(target, 'componentWillUnmount', runDisposersOnWillUnmount);
    return propertyFunctions;
}
