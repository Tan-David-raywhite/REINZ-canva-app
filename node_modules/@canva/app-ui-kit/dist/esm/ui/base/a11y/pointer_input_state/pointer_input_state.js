import { makeObservable } from '../../../../base/make_observable/make_observable';
import { action, computed, observable, observe } from 'mobx';
import * as React from 'react';
import { canHover, isTouchSupported } from '../../device_capabilities/device_capabilities';
const initialPointerInput = 'mouse';
class PointerInputStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            _pointerInput: observable.ref,
            isTouchInput: computed,
            isMouseInput: computed,
            isPenInput: computed,
            isHoveringInput: computed,
            setPointerInput: action
        });
    }
    get isTouchInput() {
        return this._pointerInput === 'touch';
    }
    get isMouseInput() {
        return this._pointerInput === 'mouse';
    }
    get isPenInput() {
        return this._pointerInput === 'pen';
    }
    get isHoveringInput() {
        return this._pointerInput !== 'touch' && canHover();
    }
    setPointerInput(input) {
        this._pointerInput = input;
        return this._pointerInput;
    }
    constructor(){
        this._pointerInput = (PointerInputStore._makeObservable(this), initialPointerInput);
    }
}
const pointerInputStore = new PointerInputStore();
export const pointerInputState = pointerInputStore;
function registerDocumentListeners(document1) {
    const initialState = isTouchSupported() ? 'touch' : 'mouse';
    pointerInputStore.setPointerInput(initialState);
    document1.addEventListener('pointerdown', (e)=>{
        switch(e.pointerType){
            case 'mouse':
                pointerInputStore.setPointerInput('mouse');
                break;
            case 'touch':
                pointerInputStore.setPointerInput('touch');
                break;
            case 'pen':
                pointerInputStore.setPointerInput('pen');
                break;
            default:
        }
    }, true);
}
if (typeof document !== 'undefined') registerDocumentListeners(document);
const subscribePointerInputState = (callback)=>observe(pointerInputState, callback);
export function useIsTouchInput() {
    return React.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isTouchInput, ()=>false);
}
export function useIsMouseInput() {
    return React.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isMouseInput, ()=>true);
}
export function useIsPenInput() {
    return React.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isPenInput, ()=>false);
}
export function useIsHoveringInput() {
    return React.useSyncExternalStore(subscribePointerInputState, ()=>pointerInputState.isHoveringInput, ()=>true);
}
export const WithIsHoveringInput = (props)=>{
    const isHoveringInput = useIsHoveringInput();
    return props.children(isHoveringInput);
};
