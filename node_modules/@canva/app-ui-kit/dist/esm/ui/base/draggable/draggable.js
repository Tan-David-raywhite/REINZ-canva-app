import { makeObservable } from '../../../base/make_observable/make_observable';
import { Preconditions, UnreachableError } from '../../../base/preconditions';
import { action, reaction } from 'mobx';
import { ClientPosition } from './client_position';
import { DragHandler } from './drag_handler';
import { MouseTracker } from './mouse_tracker';
import { TouchTracker } from './touch_tracker';
export class Draggable {
    static _makeObservable(instance) {
        makeObservable(instance, {
            stopInProgressDrag: action.bound
        });
    }
    getCursorReactionCallbacks() {
        const { cursorOverride, toggleCursorClassName = (c, e)=>document.body.classList.toggle(c, e) } = this.opts;
        if (!cursorOverride) return {};
        let disposeCursorReaction;
        let oldCursorClassName;
        return {
            didStart: ()=>{
                disposeCursorReaction = reaction(()=>cursorOverride.get(), (newCursorClassName)=>{
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
            const event = Preconditions.checkExists(pendingDragMove).event;
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
            const drag = new DragHandler(ClientPosition.fromEvent(e), this.getDragCallbacks('mouse'), holdToDrag, cursorReactionCallbacks.didStart, cursorReactionCallbacks.willStop);
            this.tracker = new MouseTracker(drag, simulateDragMove, this.onTrackerStopped, browserWindow?.document);
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
                    throw new UnreachableError(this.tracker);
            }
            if (isInputElement(e.target)) return;
            if (canDrag) {
                const { clientX, clientY, pageX, pageY } = e.changedTouches[0];
                const modifiers = DragHandler.modifiersFromEvent(e);
                if (!canDrag({
                    clientX,
                    clientY,
                    pageX,
                    pageY,
                    ...modifiers
                })) return;
            }
            const holdToDrag = this.opts.holdToDrag?.enabled === 'always' || this.opts.holdToDrag?.enabled === 'touch-only' ? this.opts.holdToDrag.duration || 'default' : 'off';
            const drag = new DragHandler(ClientPosition.fromEvent(e.changedTouches[0]), this.getDragCallbacks('touch'), holdToDrag);
            this.tracker = new TouchTracker(drag, e.changedTouches[0], holdToDrag !== 'off', this.onTrackerStopped);
        };
        this.onTrackerStopped = ()=>{
            this.tracker = undefined;
        };
    }
}
function isInputElement(element) {
    return element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement && element.type !== 'submit' || element instanceof HTMLElement && element.isContentEditable;
}
