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
    get WithIsHoveringInput () {
        return WithIsHoveringInput;
    },
    get pointerInputState () {
        return pointerInputState;
    },
    get useIsHoveringInput () {
        return useIsHoveringInput;
    },
    get useIsMouseInput () {
        return useIsMouseInput;
    },
    get useIsPenInput () {
        return useIsPenInput;
    },
    get useIsTouchInput () {
        return useIsTouchInput;
    }
});
const _make_observable = require('../../../../base/make_observable/make_observable');
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _device_capabilities = require('../../device_capabilities/device_capabilities');
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
const initialPointerInput = 'mouse';
class PointerInputStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            _pointerInput: _mobx.observable.ref,
            isTouchInput: _mobx.computed,
            isMouseInput: _mobx.computed,
            isPenInput: _mobx.computed,
            isHoveringInput: _mobx.computed,
            setPointerInput: _mobx.action
        });
    }
    get isTouchInput() {
        return this._pointerInput === 'touch';
    }
    get isMouseInput() {
        return this._pointerInput === 'mouse';
    }
    get isPenInput() {
        return this._pointerInput === 'pen';
    }
    get isHoveringInput() {
        return this._pointerInput !== 'touch' && (0, _device_capabilities.canHover)();
    }
    setPointerInput(input) {
        this._pointerInput = input;
        return this._pointerInput;
    }
    constructor(){
        this._pointerInput = (PointerInputStore._makeObservable(this), initialPointerInput);
    }
}
const pointerInputStore = new PointerInputStore();
const pointerInputState = pointerInputStore;
function registerDocumentListeners(document1) {
    const initialState = (0, _device_capabilities.isTouchSupported)() ? 'touch' : 'mouse';
    pointerInputStore.setPointerInput(initialState);
    document1.addEventListener('pointerdown', (e)=>{
        switch(e.pointerType){
            case 'mouse':
                pointerInputStore.setPointerInput('mouse');
                break;
            case 'touch':
                pointerInputStore.setPointerInput('touch');
                break;
            case 'pen':
                pointerInputStore.setPointerInput('pen');
                break;
            default:
        }
    }, true);
}
if (typeof document !== 'undefined') registerDocumentListeners(document);
const subscribePointerInputState = (callback)=>(0, _mobx.observe)(pointerInputState, callback);
function useIsTouchInput() {
    return _react.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isTouchInput, ()=>false);
}
function useIsMouseInput() {
    return _react.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isMouseInput, ()=>true);
}
function useIsPenInput() {
    return _react.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isPenInput, ()=>false);
}
function useIsHoveringInput() {
    return _react.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isHoveringInput, ()=>true);
}
const WithIsHoveringInput = (props)=>{
    const isHoveringInput = useIsHoveringInput();
    return props.children(isHoveringInput);
};
