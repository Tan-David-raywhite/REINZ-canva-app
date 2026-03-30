import { makeObservable } from '../../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
export class TooltipState {
    static _makeObservable(instance) {
        makeObservable(instance, {
            open: mobx.observable.ref
        });
    }
    constructor({ open = false } = {}){
        this.open = (TooltipState._makeObservable(this), undefined);
        this.timeoutId = 0;
        this.open = open;
    }
}
export class TooltipPresenter {
    static _makeObservable(instance) {
        makeObservable(instance, {
            setOpen: mobx.action
        });
    }
    showTooltip(tooltip, fadeInDelayMs) {
        this.clearDelay(tooltip);
        return TooltipPresenter.fadeWithDelay(tooltip, fadeInDelayMs, ()=>this.setOpen(tooltip, true));
    }
    hideTooltip(tooltip, fadeOutDelayMs) {
        this.clearDelay(tooltip);
        return TooltipPresenter.fadeWithDelay(tooltip, fadeOutDelayMs, ()=>this.setOpen(tooltip, false));
    }
    setOpen({ state }, open) {
        state.open = open;
    }
    static fadeWithDelay({ state }, delay, cb) {
        if (!delay) return Promise.resolve(cb());
        return new Promise((res)=>{
            state.timeoutId = window.setTimeout(()=>res(cb()), delay);
        });
    }
    clearDelay({ state }) {
        window.clearTimeout(state.timeoutId);
    }
    constructor(){
        TooltipPresenter._makeObservable(this);
    }
}
