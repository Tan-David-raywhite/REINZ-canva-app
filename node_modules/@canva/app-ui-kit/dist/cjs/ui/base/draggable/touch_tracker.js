"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TouchTracker", {
    enumerable: true,
    get: function() {
        return TouchTracker;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _mobx = _interop_require_wildcard(require("mobx"));
const _client_position = require("./client_position");
const _drag_handler = require("./drag_handler");
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
class TouchTracker {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            onTouchStart: _mobx.action.bound,
            onTouchMove: _mobx.action.bound,
            onTouchEnd: _mobx.action.bound
        });
    }
    stop() {
        try {
            this.drag.stop();
        } finally{
            this.target.removeEventListener('touchmove', this.onTouchMove);
            this.target.removeEventListener('touchend', this.onTouchEnd);
            this.target.removeEventListener('touchcancel', this.onTouchEnd);
            document.removeEventListener('touchstart', this.onTouchStart);
            this.onStopped();
        }
    }
    getChangedTouch(evt) {
        for (const touch of evt.changedTouches){
            if (touch.identifier === this.identifier) return touch;
        }
    }
    onTouchStart(e) {
        if (e.touches.length !== 1 || e.changedTouches[0].identifier !== this.identifier)
            this.stop();
    }
    onTouchMove(e) {
        const touch = this.getChangedTouch(e);
        if (touch) {
            if (!this.holdToDrag || this.drag.started)
            e.preventDefault();
            this.drag.handleMove(_client_position.ClientPosition.fromEvent(touch), _drag_handler.DragHandler.modifiersFromEvent(e));
        }
    }
    onTouchEnd(e) {
        const touch = this.getChangedTouch(e);
        if (touch) try {
            this.drag.updateAndMayStart(_client_position.ClientPosition.fromEvent(touch), _drag_handler.DragHandler.modifiersFromEvent(e));
        } finally{
            this.stop();
        }
    }
    constructor(drag, touch, holdToDrag, onStopped){
        this.drag = drag;
        this.holdToDrag = holdToDrag;
        this.onStopped = onStopped;
        this.type = (TouchTracker._makeObservable(this), 'touch');
        this.identifier = touch.identifier;
        this.target = touch.target;
        this.target.addEventListener('touchmove', this.onTouchMove);
        this.target.addEventListener('touchend', this.onTouchEnd);
        this.target.addEventListener('touchcancel', this.onTouchEnd);
        document.addEventListener('touchstart', this.onTouchStart);
    }
}
