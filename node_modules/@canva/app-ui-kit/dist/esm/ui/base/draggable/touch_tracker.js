import { makeObservable } from '../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
import { ClientPosition } from './client_position';
import { DragHandler } from './drag_handler';
export class TouchTracker {
    static _makeObservable(instance) {
        makeObservable(instance, {
            onTouchStart: mobx.action.bound,
            onTouchMove: mobx.action.bound,
            onTouchEnd: mobx.action.bound
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
            this.drag.handleMove(ClientPosition.fromEvent(touch), DragHandler.modifiersFromEvent(e));
        }
    }
    onTouchEnd(e) {
        const touch = this.getChangedTouch(e);
        if (touch) try {
            this.drag.updateAndMayStart(ClientPosition.fromEvent(touch), DragHandler.modifiersFromEvent(e));
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
