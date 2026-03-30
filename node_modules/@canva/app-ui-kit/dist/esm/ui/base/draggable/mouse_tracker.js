import { makeObservable } from '../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
import { ClientPosition } from './client_position';
import { DragHandler } from './drag_handler';
export class MouseTracker {
    static _makeObservable(instance) {
        makeObservable(instance, {
            onMouseMove: mobx.action.bound,
            onMouseUp: mobx.action.bound
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
        this.drag.handleMove(ClientPosition.fromEvent(evt), DragHandler.modifiersFromEvent(evt));
    }
    onMouseUp(evt) {
        try {
            this.drag.updateAndMayStart(ClientPosition.fromEvent(evt), DragHandler.modifiersFromEvent(evt));
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
