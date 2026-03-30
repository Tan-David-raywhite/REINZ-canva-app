import { MouseTracker } from './mouse_tracker';
import { TouchTracker } from './touch_tracker';
const DEDUPE_TIMEOUT = 2500;
const DEDUPE_DISTANCE = 25;
export class PointerTracker {
    onTouchEvent(handler) {
        return (pointer)=>{
            this.recentTouchEvents.add(pointer);
            setTimeout(()=>this.recentTouchEvents.delete(pointer), DEDUPE_TIMEOUT);
            handler(pointer);
        };
    }
    onMouseEvent(handler) {
        return (pointer)=>{
            if (!this.isSynthetic(pointer)) handler(pointer);
        };
    }
    isSynthetic(mouse) {
        if (mouse.sourceEvent.sourceCapabilities?.firesTouchEvents)
            return true;
        for (const touch of this.recentTouchEvents) {
            const dx = Math.abs(mouse.x - touch.x);
            const dy = Math.abs(mouse.y - touch.y);
            if (dx <= DEDUPE_DISTANCE && dy <= DEDUPE_DISTANCE) return true;
        }
    }
    disconnect() {
        this.mouseTracker.disconnect();
        this.touchTracker.disconnect();
    }
    constructor(element, onPointerDown, onPointerMove, onPointerUp, onPointerCancel){
        this.recentTouchEvents = new Set();
        this.mouseTracker = new MouseTracker(element, this.onMouseEvent(onPointerDown), this.onMouseEvent(onPointerMove), this.onMouseEvent(onPointerUp));
        this.touchTracker = new TouchTracker(element, this.onTouchEvent(onPointerDown), this.onTouchEvent(onPointerMove), this.onTouchEvent(onPointerUp), this.onTouchEvent(onPointerCancel));
    }
}
