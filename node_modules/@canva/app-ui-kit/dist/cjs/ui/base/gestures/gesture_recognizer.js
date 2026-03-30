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
    get GestureRecognizer () {
        return GestureRecognizer;
    },
    get PanRecognizer () {
        return _pan_recognizer.PanRecognizer;
    },
    get PinchRecognizer () {
        return _pinch_recognizer.PinchRecognizer;
    },
    get PressRecognizer () {
        return _press_recognizer.PressRecognizer;
    },
    get TapRecognizer () {
        return _tap_recognizer.TapRecognizer;
    },
    get longPressTime () {
        return longPressTime;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _exists = require('../../../base/exists');
const _mobx = _interop_require_wildcard(require("mobx"));
const _handle = require('../handle/handle');
const _combine_allowed_touch_actions = require("./combine_allowed_touch_actions");
const _gesture_recognizercss = _interop_require_default(require("./gesture_recognizer.css"));
const _pointer_tracker = require("./pointer_tracker");
const _touch_action_polyfill = require("./touch_action_polyfill");
const _pan_recognizer = require("./pan_recognizer");
const _pinch_recognizer = require("./pinch_recognizer");
const _press_recognizer = require("./press_recognizer");
const _tap_recognizer = require("./tap_recognizer");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const longPressTime = 750;
class GestureRecognizer {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            onPointerDown: _mobx.action.bound,
            onPointerEnd: _mobx.action.bound,
            processMoved: _mobx.action.bound
        });
    }
    onPointerDown(pointer) {
        const state = {
            start: pointer,
            previous: pointer,
            current: pointer
        };
        this.allPointers.set(pointer.id, state);
        (0, _touch_action_polyfill.manuallyApplyTouchAction)(this.actions, pointer, this.allPointers);
        this.processMoved();
        for (const recognizer of this.recognizers)
            recognizer.onPointerDown(state, this.allPointers);
    }
    onPointerEnd(pointer, action) {
        const state = this.allPointers.get(pointer.id);
        if (!state) return;
        this.processMoved();
        state.current = pointer;
        (0, _touch_action_polyfill.manuallyApplyTouchAction)(this.actions, pointer, this.allPointers);
        this.allPointers.delete(pointer.id);
        for (const recognizer of this.recognizers) switch(action){
            case 'up':
                recognizer.onPointerUp(state, this.allPointers);
                break;
            case 'cancel':
                recognizer.onPointerCancel ? recognizer.onPointerCancel(state, this.allPointers) : recognizer.onPointerUp(state, this.allPointers);
                break;
            default:
        }
    }
    processMoved() {
        if (this.moveFrame) {
            const { caf = window.cancelAnimationFrame } = this;
            caf(this.moveFrame);
        }
        this.moveFrame = 0;
        if (!this.currentBatchPointerIds.size)
            return;
        const pointers = Array.from(this.currentBatchPointerIds, (id)=>this.allPointers.get(id)).filter(_exists.exists);
        this.currentBatchPointerIds.clear();
        for (const recognizer of this.recognizers)recognizer.onPointerMove?.(pointers, this.allPointers);
        for (const pointer of pointers)
            pointer.previous = pointer.current;
    }
    constructor(recognizers, raf, caf){
        this.raf = raf;
        this.caf = caf;
        this.element = (GestureRecognizer._makeObservable(this), null);
        this.allPointers = new Map();
        this.currentBatchPointerIds = new Set();
        this.moveFrame = 0;
        this.actions = new Set();
        this._setRef = (elementOrHandle)=>{
            if (this.element) {
                this.processMoved();
                for (const recognizer of this.recognizers)recognizer.onUnmount?.(this.allPointers);
                this.element.style.touchAction = '';
            }
            this.tracker?.disconnect();
            this.tracker = undefined;
            this.element = (0, _handle.dangerouslyGetElement)(elementOrHandle);
            if (this.element) {
                this.tracker = new _pointer_tracker.PointerTracker(this.element, this.onPointerDown, this.onPointerMove, this.onPointerUp, this.onPointerCancel);
                const actions = (0, _combine_allowed_touch_actions.combineAllowedTouchActions)(this.recognizers.map((r)=>r.getBrowserHandledTouchActions()));
                if (this.recognizers.some((r)=>r.shouldDisableTextSelect)) this.element.classList.add(_gesture_recognizercss.default.textSelectDisabled);
                this.element.classList.add(_gesture_recognizercss.default.gestureElement);
                this.element.style.touchAction = actions.join(' ');
                this.actions = new Set(actions);
            }
        };
        this.onPointerMove = (pointer)=>{
            const state = this.allPointers.get(pointer.id);
            if (!state) return;
            state.current = pointer;
            (0, _touch_action_polyfill.manuallyApplyTouchAction)(this.actions, pointer, this.allPointers);
            this.currentBatchPointerIds.add(pointer.id);
            this.moveFrame = this.moveFrame || this.raf?.(this.processMoved) || requestAnimationFrame(this.processMoved);
        };
        this.onPointerUp = (pointer)=>{
            this.onPointerEnd(pointer, 'up');
        };
        this.onPointerCancel = (pointer)=>{
            this.onPointerEnd(pointer, 'cancel');
        };
        this.recognizers = recognizers.slice();
        this.setRef = this.recognizers.length ? this._setRef : undefined;
    }
}
