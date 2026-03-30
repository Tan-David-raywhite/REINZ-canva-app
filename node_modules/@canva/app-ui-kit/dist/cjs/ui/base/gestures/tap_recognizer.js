"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TapRecognizer", {
    enumerable: true,
    get: function() {
        return TapRecognizer;
    }
});
const _recognizer = require("./recognizer");
class TapRecognizer {
    getBrowserHandledTouchActions() {
        return [
            'pan-x',
            'pan-y',
            'pinch-zoom'
        ];
    }
    onPointerDown(pointer, allPointers) {
        if (pointer.start.button != null && pointer.start.button !== 0)
            return;
        if (this.opts.disabled?.get()) return;
        if (allPointers.size === 1) this.state = pointer;
        else
        this.state = undefined;
    }
    onPointerUp(pointer) {
        if (!this.state) return;
        const start = this.state.start;
        const current = pointer.current;
        const timeDelta = current.timestamp - start.timestamp;
        const distanceSqrd = (current.x - start.x) ** 2 + (current.y - start.y) ** 2;
        if (timeDelta <= 250 && distanceSqrd <= 81) this.opts.onTap?.((0, _recognizer.getCommonEventProperties)(start));
        this.state = undefined;
    }
    onPointerCancel(pointer) {
        this.state = undefined;
    }
    constructor(opts){
        this.opts = opts;
    }
}
