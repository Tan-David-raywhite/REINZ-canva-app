import { makeObservable } from '../../../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
export class BaseSelectStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            open: mobx.observable.ref,
            value: mobx.observable.ref,
            query: mobx.observable.ref
        });
    }
    constructor(){
        this.open = (BaseSelectStore._makeObservable(this), false);
        this.query = '';
    }
}
export class BaseSelectPresenter {
    static _makeObservable(instance) {
        makeObservable(instance, {
            toggle: mobx.action,
            setValue: mobx.action
        });
    }
    toggle(store, open) {
        store.open = open != null ? open : !store.open;
    }
    setValue(store, value) {
        store.value = value;
    }
    constructor(){
        BaseSelectPresenter._makeObservable(this);
    }
}
