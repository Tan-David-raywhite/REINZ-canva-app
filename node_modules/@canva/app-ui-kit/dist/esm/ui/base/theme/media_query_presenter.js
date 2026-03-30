import { makeObservable } from '../../../base/make_observable/make_observable';
import { debounce } from '../../../base/debounce';
import { action, observable } from 'mobx';
const MEDIA_QUERY_LISTENER_DEBOUNCE_TIME = 16;
export class MediaQueryStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            matchedQueries: observable.ref
        });
    }
    constructor(){
        this.matchedQueries = (MediaQueryStore._makeObservable(this), []);
    }
}
export class MediaQueryPresenter {
    static _makeObservable(instance) {
        makeObservable(instance, {
            updateQueries: action
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
        const listener = debounce(action(()=>store.matchedQueries = this.getMatches(queries)), MEDIA_QUERY_LISTENER_DEBOUNCE_TIME);
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
