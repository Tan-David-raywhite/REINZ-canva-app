export class TouchTracker {
    disconnect() {
        if (this.element instanceof HTMLElement) this.element.removeEventListener('touchstart', this.onTouchStart);
        else this.element.removeEventListener('touchstart', this.onTouchStart);
        for (const tracker of this.trackers)tracker.disconnect();
        this.trackers.clear();
    }
    constructor(element, onPointerDown, onPointerMove, onPointerUp, onPointerCancel){
        this.element = element;
        this.onPointerDown = onPointerDown;
        this.onPointerMove = onPointerMove;
        this.onPointerUp = onPointerUp;
        this.onPointerCancel = onPointerCancel;
        this.trackers = new Set();
        this.onTouchStart = (evt)=>{
            for(let i = 0; i < evt.changedTouches.length; ++i){
                const touch = evt.changedTouches[i];
                const tracker = new SingleTouchTracker(touch.identifier, touch.target, this.onPointerMove, (pointer)=>{
                    this.trackers.delete(tracker);
                    this.onPointerUp(pointer);
                }, (pointer)=>{
                    this.trackers.delete(tracker);
                    this.onPointerCancel(pointer);
                });
                this.trackers.add(tracker);
                this.onPointerDown(touchEventToPointer(evt, touch));
            }
        };
        if (element instanceof HTMLElement) element.addEventListener('touchstart', this.onTouchStart);
        else element.addEventListener('touchstart', this.onTouchStart);
    }
}
class SingleTouchTracker {
    disconnect() {
        this.target.removeEventListener('touchmove', this.onTouchMove);
        this.target.removeEventListener('touchend', this.onTouchEnd);
        this.target.removeEventListener('touchcancel', this.onTouchEnd);
    }
    getChangedTouch(evt) {
        for (const touch of evt.changedTouches){
            if (touch.identifier === this.identifier) return touch;
        }
    }
    constructor(identifier, target, onPointerMove, onPointerUp, onPointerCancel){
        this.identifier = identifier;
        this.target = target;
        this.onPointerMove = onPointerMove;
        this.onPointerUp = onPointerUp;
        this.onPointerCancel = onPointerCancel;
        this.onTouchMove = (evt)=>{
            const touch = this.getChangedTouch(evt);
            if (touch) this.onPointerMove(touchEventToPointer(evt, touch));
        };
        this.onTouchEnd = (evt)=>{
            const touch = this.getChangedTouch(evt);
            if (touch) {
                this.disconnect();
                this.onPointerUp(touchEventToPointer(evt, touch));
            }
        };
        this.onTouchCancel = (evt)=>{
            const touch = this.getChangedTouch(evt);
            if (touch) {
                this.disconnect();
                this.onPointerCancel(touchEventToPointer(evt, touch));
            }
        };
        target.addEventListener('touchmove', this.onTouchMove);
        target.addEventListener('touchend', this.onTouchEnd);
        target.addEventListener('touchcancel', this.onTouchCancel);
    }
}
function touchEventToPointer(evt, touch) {
    return {
        timestamp: Date.now(),
        id: `touch_${touch.identifier}`,
        target: touch.target,
        currentTarget: evt.currentTarget,
        x: touch.clientX,
        y: touch.clientY,
        sourceEvent: evt,
        pointerType: 'touch'
    };
}
