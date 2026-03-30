"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MouseTracker", {
    enumerable: true,
    get: function() {
        return MouseTracker;
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
class MouseTracker {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            onMouseMove: _mobx.action.bound,
            onMouseUp: _mobx.action.bound
        });
    }
    stop() {
        try {
            this.drag.stop();
        } finally{
            this.browserDocument.removeEventListener('mousemove', this.onMouseMove, {
                capture: true
            });
            this.browserDocument.removeEventListener('mouseup', this.onMouseUp, {
                capture: true
            });
            this.browserDocument.removeEventListener('dragend', this.onMouseUp, {
                capture: true
            });
            if (this.simulateMoveSubscription) {
                this.simulateMoveSubscription.unsubscribe();
                this.simulateMoveSubscription = undefined;
            }
            this.onStopped();
        }
    }
    onMouseMove(evt) {
        this.drag.handleMove(_client_position.ClientPosition.fromEvent(evt), _drag_handler.DragHandler.modifiersFromEvent(evt));
    }
    onMouseUp(evt) {
        try {
            this.drag.updateAndMayStart(_client_position.ClientPosition.fromEvent(evt), _drag_handler.DragHandler.modifiersFromEvent(evt));
        } finally{
            this.stop();
        }
    }
    constructor(drag, simulateMove, onStopped, browserDocument = window.document){
        this.drag = drag;
        this.onStopped = onStopped;
        this.browserDocument = browserDocument;
        this.type = (MouseTracker._makeObservable(this), 'mouse');
        this.onSimulateMove = ()=>{
            this.drag.forceStart();
            this.drag.handleMove(this.drag.currentPosition, this.drag.modifiers);
        };
        this.browserDocument.addEventListener('mousemove', this.onMouseMove, {
            capture: true,
            passive: true
        });
        this.browserDocument.addEventListener('mouseup', this.onMouseUp, {
            capture: true,
            passive: true
        });
        this.browserDocument.addEventListener('dragend', this.onMouseUp, {
            capture: true,
            passive: true
        });
        this.simulateMoveSubscription = simulateMove && simulateMove.subscribe(this.onSimulateMove);
    }
}
