import { makeObservable } from '../../../base/make_observable/make_observable';
import { exists } from '../../../base/exists';
import * as mobx from 'mobx';
import { dangerouslyGetElement } from '../handle/handle';
import { combineAllowedTouchActions } from './combine_allowed_touch_actions';
import styles from './gesture_recognizer.css';
import { PointerTracker } from './pointer_tracker';
import { manuallyApplyTouchAction } from './touch_action_polyfill';
export { PanRecognizer } from './pan_recognizer';
export { PinchRecognizer } from './pinch_recognizer';
export { PressRecognizer } from './press_recognizer';
export { TapRecognizer } from './tap_recognizer';
export const longPressTime = 750;
export class GestureRecognizer {
    static _makeObservable(instance) {
        makeObservable(instance, {
            onPointerDown: mobx.action.bound,
            onPointerEnd: mobx.action.bound,
            processMoved: mobx.action.bound
        });
    }
    onPointerDown(pointer) {
        const state = {
            start: pointer,
            previous: pointer,
            current: pointer
        };
        this.allPointers.set(pointer.id, state);
        manuallyApplyTouchAction(this.actions, pointer, this.allPointers);
        this.processMoved();
        for (const recognizer of this.recognizers)
            recognizer.onPointerDown(state, this.allPointers);
    }
    onPointerEnd(pointer, action) {
        const state = this.allPointers.get(pointer.id);
        if (!state) return;
        this.processMoved();
        state.current = pointer;
        manuallyApplyTouchAction(this.actions, pointer, this.allPointers);
        this.allPointers.delete(pointer.id);
        for (const recognizer of this.recognizers) switch(action){
            case 'up':
                recognizer.onPointerUp(state, this.allPointers);
                break;
            case 'cancel':
                recognizer.onPointerCancel ? recognizer.onPointerCancel(state, this.allPointers) : recognizer.onPointerUp(state, this.allPointers);
                break;
            default:
        }
    }
    processMoved() {
        if (this.moveFrame) {
            const { caf = window.cancelAnimationFrame } = this;
            caf(this.moveFrame);
        }
        this.moveFrame = 0;
        if (!this.currentBatchPointerIds.size)
            return;
        const pointers = Array.from(this.currentBatchPointerIds, (id)=>this.allPointers.get(id)).filter(exists);
        this.currentBatchPointerIds.clear();
        for (const recognizer of this.recognizers)recognizer.onPointerMove?.(pointers, this.allPointers);
        for (const pointer of pointers)
            pointer.previous = pointer.current;
    }
    constructor(recognizers, raf, caf){
        this.raf = raf;
        this.caf = caf;
        this.element = (GestureRecognizer._makeObservable(this), null);
        this.allPointers = new Map();
        this.currentBatchPointerIds = new Set();
        this.moveFrame = 0;
        this.actions = new Set();
        this._setRef = (elementOrHandle)=>{
            if (this.element) {
                this.processMoved();
                for (const recognizer of this.recognizers)recognizer.onUnmount?.(this.allPointers);
                this.element.style.touchAction = '';
            }
            this.tracker?.disconnect();
            this.tracker = undefined;
            this.element = dangerouslyGetElement(elementOrHandle);
            if (this.element) {
                this.tracker = new PointerTracker(this.element, this.onPointerDown, this.onPointerMove, this.onPointerUp, this.onPointerCancel);
                const actions = combineAllowedTouchActions(this.recognizers.map((r)=>r.getBrowserHandledTouchActions()));
                if (this.recognizers.some((r)=>r.shouldDisableTextSelect)) this.element.classList.add(styles.textSelectDisabled);
                this.element.classList.add(styles.gestureElement);
                this.element.style.touchAction = actions.join(' ');
                this.actions = new Set(actions);
            }
        };
        this.onPointerMove = (pointer)=>{
            const state = this.allPointers.get(pointer.id);
            if (!state) return;
            state.current = pointer;
            manuallyApplyTouchAction(this.actions, pointer, this.allPointers);
            this.currentBatchPointerIds.add(pointer.id);
            this.moveFrame = this.moveFrame || this.raf?.(this.processMoved) || requestAnimationFrame(this.processMoved);
        };
        this.onPointerUp = (pointer)=>{
            this.onPointerEnd(pointer, 'up');
        };
        this.onPointerCancel = (pointer)=>{
            this.onPointerEnd(pointer, 'cancel');
        };
        this.recognizers = recognizers.slice();
        this.setRef = this.recognizers.length ? this._setRef : undefined;
    }
}
