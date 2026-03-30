"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get DEFAULT_POINTER_DOWN_TIMEOUT () {
        return DEFAULT_POINTER_DOWN_TIMEOUT;
    },
    get PressRecognizer () {
        return PressRecognizer;
    }
});
const _input = require('../dom/input/input');
const _recognizer = require("./recognizer");
const DEFAULT_POINTER_DOWN_TIMEOUT = 251;
class PressRecognizer {
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
            state.recognized && this.opts.onCancel?.((0, _recognizer.getCommonEventProperties)(state.pointer.current));
        }
    }
    onPointerUp(pointer) {
        if (this.state) {
            const state = this.state;
            const withinMaxDistance = this.isWithinMaxDistance();
            this.state = undefined;
            window.clearTimeout(state.timeoutId);
            this.clearEventListeners(state.pointer.start);
            if (state.recognized) withinMaxDistance ? this.opts.onEnd?.((0, _recognizer.getCommonEventProperties)(pointer.current)) : this.opts.onCancel?.((0, _recognizer.getCommonEventProperties)(pointer.current));
        }
    }
    onUnmount() {
        if (this.state?.recognized) this.opts.onCancel?.((0, _recognizer.getCommonEventProperties)(this.state.pointer.current));
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
                this.opts.onStart?.((0, _recognizer.getCommonEventProperties)(this.state.pointer.start));
            }
        };
        this.setupEventListeners = (pointer)=>{
            pointer.currentTarget.addEventListener('contextmenu', this.onContextMenu);
        };
        this.clearEventListeners = (pointer)=>{
            pointer.currentTarget.removeEventListener('contextmenu', this.onContextMenu);
        };
        this.onContextMenu = (e)=>{
            if ((0, _input.isSomeInputActive)(e))
                return;
            e.preventDefault();
        };
    }
}
