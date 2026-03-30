"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Draggable", {
    enumerable: true,
    get: function() {
        return Draggable;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _preconditions = require('../../../base/preconditions');
const _mobx = require("mobx");
const _client_position = require("./client_position");
const _drag_handler = require("./drag_handler");
const _mouse_tracker = require("./mouse_tracker");
const _touch_tracker = require("./touch_tracker");
class Draggable {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            stopInProgressDrag: _mobx.action.bound
        });
    }
    getCursorReactionCallbacks() {
        const { cursorOverride, toggleCursorClassName = (c, e)=>document.body.classList.toggle(c, e) } = this.opts;
        if (!cursorOverride) return {};
        let disposeCursorReaction;
        let oldCursorClassName;
        return {
            didStart: ()=>{
                disposeCursorReaction = (0, _mobx.reaction)(()=>cursorOverride.get(), (newCursorClassName)=>{
                    oldCursorClassName && toggleCursorClassName(oldCursorClassName, false);
                    toggleCursorClassName(newCursorClassName, true);
                    oldCursorClassName = newCursorClassName;
                }, {
                    fireImmediately: true
                });
            },
            willStop: ()=>{
                oldCursorClassName && toggleCursorClassName(oldCursorClassName, false);
                disposeCursorReaction && disposeCursorReaction();
            }
        };
    }
    getDragCallbacks(dragType) {
        let pendingDragMove;
        const processDragMove = ()=>{
            const event = _preconditions.Preconditions.checkExists(pendingDragMove).event;
            this.opts.onDragMove?.(event);
            pendingDragMove = undefined;
        };
        return {
            onDragStart: (e)=>{
                this.opts.onDragStart && this.opts.onDragStart(e, this.stopInProgressDrag, dragType);
            },
            onDragMove: (e)=>{
                if (this.opts.unthrottleEvents) {
                    this.opts.onDragMove?.(e);
                    return;
                }
                if (pendingDragMove) pendingDragMove.event = e;
                else {
                    const { raf = window.requestAnimationFrame } = this.opts;
                    const requestId = raf(processDragMove);
                    pendingDragMove = {
                        requestId,
                        event: e
                    };
                }
            },
            onDragEnd: (e)=>{
                if (pendingDragMove) {
                    const { caf = window.cancelAnimationFrame } = this.opts;
                    caf(pendingDragMove.requestId);
                    processDragMove();
                }
                this.opts.onDragEnd && this.opts.onDragEnd(e);
            },
            onDragKeyChange: (e)=>{
                if (pendingDragMove) {
                    const { caf = window.cancelAnimationFrame } = this.opts;
                    caf(pendingDragMove.requestId);
                    processDragMove();
                }
                this.opts.onKeyChange && this.opts.onKeyChange(e);
            }
        };
    }
    stopInProgressDrag() {
        this.tracker && this.tracker.stop();
    }
    constructor(opts) {
        this.opts = opts;
        this.tracker = (Draggable._makeObservable(this), undefined);
        this.onMouseDown = (e)=>{
            const { canDrag, simulateDragMove, browserWindow } = this.opts;
            if (e.button !== 0)
                return;
            if (isInputElement(e.target)) return;
            if (this.tracker) this.tracker.stop();
            if (canDrag && !canDrag(e)) return;
            if (!this.opts.focusable)
                e.preventDefault();
            const cursorReactionCallbacks = this.getCursorReactionCallbacks();
            const holdToDrag = this.opts.holdToDrag?.enabled === 'always' ? this.opts.holdToDrag.duration || 'default' : 'off';
            const drag = new _drag_handler.DragHandler(_client_position.ClientPosition.fromEvent(e), this.getDragCallbacks('mouse'), holdToDrag, cursorReactionCallbacks.didStart, cursorReactionCallbacks.willStop);
            this.tracker = new _mouse_tracker.MouseTracker(drag, simulateDragMove, this.onTrackerStopped, browserWindow?.document);
        };
        this.onTouchStart = (e)=>{
            const { canDrag } = this.opts;
            if (this.tracker) switch(this.tracker.type){
                case 'touch':
                    return;
                case 'mouse':
                    this.tracker.stop();
                    break;
                default:
                    throw new _preconditions.UnreachableError(this.tracker);
            }
            if (isInputElement(e.target)) return;
            if (canDrag) {
                const { clientX, clientY, pageX, pageY } = e.changedTouches[0];
                const modifiers = _drag_handler.DragHandler.modifiersFromEvent(e);
                if (!canDrag({
                    clientX,
                    clientY,
                    pageX,
                    pageY,
                    ...modifiers
                })) return;
            }
            const holdToDrag = this.opts.holdToDrag?.enabled === 'always' || this.opts.holdToDrag?.enabled === 'touch-only' ? this.opts.holdToDrag.duration || 'default' : 'off';
            const drag = new _drag_handler.DragHandler(_client_position.ClientPosition.fromEvent(e.changedTouches[0]), this.getDragCallbacks('touch'), holdToDrag);
            this.tracker = new _touch_tracker.TouchTracker(drag, e.changedTouches[0], holdToDrag !== 'off', this.onTrackerStopped);
        };
        this.onTrackerStopped = ()=>{
            this.tracker = undefined;
        };
    }
}
function isInputElement(element) {
    return element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement && element.type !== 'submit' || element instanceof HTMLElement && element.isContentEditable;
}
