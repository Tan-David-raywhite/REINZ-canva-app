import { isSomeInputActive } from '../dom/input/input';
import { getCommonEventProperties } from './recognizer';
export const DEFAULT_POINTER_DOWN_TIMEOUT = 251;
export class PressRecognizer {
    getBrowserHandledTouchActions() {
        return [
            'auto'
        ];
    }
    onPointerDown(pointer, allPointers) {
        if (pointer.start.button != null && pointer.start.button !== 0)
            return;
        if (allPointers.size === 1) {
            this.setupEventListeners(pointer.start);
            const timeoutId = window.setTimeout(this.timeout, this.opts.minTime ?? DEFAULT_POINTER_DOWN_TIMEOUT);
            this.state = {
                pointer,
                timeoutId,
                recognized: false
            };
        } else if (allPointers.size > 1 && this.state) {
            window.clearTimeout(this.state.timeoutId);
            this.state = undefined;
        }
    }
    onPointerMove(pointers, allPointers) {
        if (this.state && !this.isWithinMaxDistance()) {
            const state = this.state;
            this.state = undefined;
            window.clearTimeout(state.timeoutId);
            this.clearEventListeners(state.pointer.start);
            state.recognized && this.opts.onCancel?.(getCommonEventProperties(state.pointer.current));
        }
    }
    onPointerUp(pointer) {
        if (this.state) {
            const state = this.state;
            const withinMaxDistance = this.isWithinMaxDistance();
            this.state = undefined;
            window.clearTimeout(state.timeoutId);
            this.clearEventListeners(state.pointer.start);
            if (state.recognized) withinMaxDistance ? this.opts.onEnd?.(getCommonEventProperties(pointer.current)) : this.opts.onCancel?.(getCommonEventProperties(pointer.current));
        }
    }
    onUnmount() {
        if (this.state?.recognized) this.opts.onCancel?.(getCommonEventProperties(this.state.pointer.current));
    }
    isWithinMaxDistance() {
        if (!this.state) return false;
        const { start, current } = this.state.pointer;
        const distanceSqrd = (current.x - start.x) ** 2 + (current.y - start.y) ** 2;
        return distanceSqrd <= (this.opts.maxDistance ?? 9) ** 2;
    }
    constructor(opts){
        this.opts = opts;
        this.timeout = ()=>{
            if (this.state) {
                this.state.recognized = true;
                this.opts.onStart?.(getCommonEventProperties(this.state.pointer.start));
            }
        };
        this.setupEventListeners = (pointer)=>{
            pointer.currentTarget.addEventListener('contextmenu', this.onContextMenu);
        };
        this.clearEventListeners = (pointer)=>{
            pointer.currentTarget.removeEventListener('contextmenu', this.onContextMenu);
        };
        this.onContextMenu = (e)=>{
            if (isSomeInputActive(e))
                return;
            e.preventDefault();
        };
    }
}
