import { makeObservable } from '../../../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
export class AnnouncerStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            criticalQueue: mobx.observable.shallow,
            highQueue: mobx.observable.shallow,
            mediumQueue: mobx.observable.shallow,
            lowQueue: mobx.observable.shallow,
            assertiveRegion: mobx.observable.ref,
            politeRegion: mobx.observable.ref,
            queueState: mobx.observable.ref,
            announcerState: mobx.observable.ref,
            regionsReady: mobx.computed,
            combinedQueue: mobx.computed,
            nextAnnouncement: mobx.computed,
            totalQueueLength: mobx.computed,
            hasAnnouncements: mobx.computed
        });
    }
    get regionsReady() {
        return !!(this.assertiveRegion?.current && this.politeRegion?.current);
    }
    get combinedQueue() {
        return [
            ...this.criticalQueue,
            ...this.highQueue,
            ...this.mediumQueue,
            ...this.lowQueue
        ];
    }
    get nextAnnouncement() {
        return this.combinedQueue[0];
    }
    get totalQueueLength() {
        return this.criticalQueue.length + this.highQueue.length + this.mediumQueue.length + this.lowQueue.length;
    }
    get hasAnnouncements() {
        return this.totalQueueLength > 0;
    }
    constructor(){
        this.criticalQueue = (AnnouncerStore._makeObservable(this), []);
        this.highQueue = [];
        this.mediumQueue = [];
        this.lowQueue = [];
        this.assertiveRegion = null;
        this.politeRegion = null;
        this.queueState = 'idle';
        this.announcerState = 'paused';
    }
}
