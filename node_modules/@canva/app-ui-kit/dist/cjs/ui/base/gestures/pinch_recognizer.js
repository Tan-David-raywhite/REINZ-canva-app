"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PinchRecognizer", {
    enumerable: true,
    get: function() {
        return PinchRecognizer;
    }
});
const _pan_recognizer = require("./pan_recognizer");
class PinchRecognizer {
    getBrowserHandledTouchActions() {
        return [
            'pan-x',
            'pan-y'
        ];
    }
    onPointerDown(pointer, allPointers) {
        if (pointer.start.button != null && pointer.start.button !== 0)
            return;
        this.checkPointerState(pointer, allPointers);
    }
    onPointerMove(pointers, allPointers) {
        if (!this.state) return;
        if (!this.state.recognized) {
            this.state.recognized = true;
            this.opts.onStart?.(getPinchEventProperties(this.state, pointers[0].current, allPointers));
        } else
            this.opts.onMove?.(getPinchEventProperties(this.state, pointers[0].current, allPointers));
    }
    onPointerUp(pointer, allPointers) {
        this.checkPointerState(pointer, allPointers);
    }
    onUnmount(allPointers) {
        if (this.state?.recognized) this.opts.onEnd?.(getPinchEventProperties(this.state, this.state.p1Start, allPointers));
    }
    checkPointerState(pointer, allPointers) {
        if (!this.state && allPointers.size === 2) {
            const [p1Start, p2Start] = Array.from(allPointers.values(), (p)=>p.current);
            this.state = {
                startTime: Date.now(),
                recognized: false,
                p1Start,
                p2Start
            };
        } else if (this.state) {
            const state = this.state;
            this.state = undefined;
            if (state.recognized) this.opts.onEnd?.(getPinchEventProperties(state, pointer.current, allPointers));
        }
    }
    constructor(opts){
        this.opts = opts;
        this.shouldDisableTextSelect = true;
    }
}
function getPinchEventProperties(state, currentPointer, allPointers) {
    const { p1Start, p2Start } = state;
    const p1Current = currentPointer.id === p1Start.id ? currentPointer : allPointers.get(p1Start.id).current;
    const p2Current = currentPointer.id === p2Start.id ? currentPointer : allPointers.get(p2Start.id).current;
    const start = midpoint(p1Start, p2Start);
    const current = midpoint(p1Current, p2Current);
    const startDis = dist2(p1Start, p2Start);
    const currentDis = dist2(p1Current, p2Current);
    const scale = Math.sqrt(currentDis / startDis);
    const rotation = Math.atan2(p2Current.y - p1Current.y, p2Current.x - p1Current.x);
    return {
        ...(0, _pan_recognizer.getPanEventProperties)(currentPointer, start, current),
        scale,
        rotation
    };
}
const midpoint = (p1, p2)=>({
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
        timestamp: Math.max(p1.timestamp, p2.timestamp)
    });
const dist2 = (p1, p2)=>(p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2;
