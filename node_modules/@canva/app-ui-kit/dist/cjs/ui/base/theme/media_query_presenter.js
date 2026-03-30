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
    get MediaQueryPresenter () {
        return MediaQueryPresenter;
    },
    get MediaQueryStore () {
        return MediaQueryStore;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _debounce = require('../../../base/debounce');
const _mobx = require("mobx");
const MEDIA_QUERY_LISTENER_DEBOUNCE_TIME = 16;
class MediaQueryStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            matchedQueries: _mobx.observable.ref
        });
    }
    constructor(){
        this.matchedQueries = (MediaQueryStore._makeObservable(this), []);
    }
}
class MediaQueryPresenter {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            updateQueries: _mobx.action
        });
    }
    getMatches(queries) {
        if (!this.matchMedia) return [];
        const matchMedia = this.matchMedia;
        return queries.filter((query)=>matchMedia(query).matches);
    }
    updateQueries(queries, store) {
        this.registerListener(queries, store);
        store.matchedQueries = this.getMatches(queries);
    }
    registerListener(queries, store) {
        this.clear();
        if (!this.matchMedia) return;
        const matchMedia = this.matchMedia;
        const listener = (0, _debounce.debounce)((0, _mobx.action)(()=>store.matchedQueries = this.getMatches(queries)), MEDIA_QUERY_LISTENER_DEBOUNCE_TIME);
        this.listener = listener;
        this.mqls = queries.map((query)=>{
            const mql = matchMedia(query);
            if (typeof mql.addEventListener === 'function') mql.addEventListener('change', listener);
            else mql.addListener(listener);
            return mql;
        });
    }
    clear() {
        if (this.listener) {
            const listener = this.listener;
            this.mqls.forEach((mql)=>{
                if (typeof mql.removeEventListener === 'function') mql.removeEventListener('change', listener);
                else mql.removeListener(listener);
            });
        }
    }
    constructor({ matchMedia }){
        this.matchMedia = (MediaQueryPresenter._makeObservable(this), undefined);
        this.mqls = [];
        this.matchMedia = matchMedia || (typeof window !== 'undefined' ? window.matchMedia : undefined);
    }
}
