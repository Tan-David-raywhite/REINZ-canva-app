import { getCommonEventProperties } from './recognizer';
export class TapRecognizer {
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
        if (timeDelta <= 250 && distanceSqrd <= 81) this.opts.onTap?.(getCommonEventProperties(start));
        this.state = undefined;
    }
    onPointerCancel(pointer) {
        this.state = undefined;
    }
    constructor(opts){
        this.opts = opts;
    }
}
