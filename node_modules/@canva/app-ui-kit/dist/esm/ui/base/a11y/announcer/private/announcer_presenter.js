import { makeObservable } from '../../../../../base/make_observable/make_observable';
import * as mobx from 'mobx';
import { removeFallbackRegions } from './announcer_fallback';
import { updateLiveRegionContent } from './announcer_utils';
export class AnnouncerPresenter {
    static _makeObservable(instance) {
        makeObservable(instance, {
            hasAnnouncements: mobx.computed,
            setQueueState: mobx.action.bound,
            setAnnouncerState: mobx.action.bound,
            onRegionMount: mobx.action.bound,
            onRegionUnmount: mobx.action.bound,
            startAnnouncer: mobx.action.bound,
            stopAnnouncer: mobx.action.bound,
            pauseAnnouncer: mobx.action.bound,
            addAnnouncement: mobx.action.bound,
            processQueue: mobx.action.bound,
            cleanQueue: mobx.action.bound,
            clearQueue: mobx.action.bound,
            insertAnnouncementIntoQueue: mobx.action.bound,
            shiftQueue: mobx.action.bound
        });
    }
    get hasAnnouncements() {
        return this.store.hasAnnouncements || this.newAnnouncementBatch.length > 0;
    }
    setQueueState(state) {
        this.store.queueState = state;
        if (state === 'idle') this.emitDebug({
            type: 'state_change',
            queueState: 'idle'
        });
    }
    setAnnouncerState(state) {
        this.store.announcerState = state;
    }
    onRegionMount(regions) {
        this.store.assertiveRegion = regions.assertiveRegion;
        this.store.politeRegion = regions.politeRegion;
        removeFallbackRegions();
        this.processQueue();
    }
    onRegionUnmount() {
        this.store.assertiveRegion = null;
        this.store.politeRegion = null;
    }
    startAnnouncer() {
        this.setAnnouncerState('on');
        this.emitDebug({
            type: 'state_change',
            announcerState: 'on'
        });
        this.processQueue();
    }
    stopAnnouncer() {
        this.setAnnouncerState('off');
        this.clearQueue();
        this.emitDebug({
            type: 'state_change',
            announcerState: 'off'
        });
    }
    pauseAnnouncer() {
        this.setAnnouncerState('paused');
        this.emitDebug({
            type: 'state_change',
            announcerState: 'paused'
        });
    }
    addAnnouncement(announcement) {
        if (this.store.announcerState === 'off')
            return;
        this.newAnnouncementBatch.push(announcement);
        this.emitDebug({
            type: 'enqueue',
            announcement: {
                ...announcement
            }
        });
        this.processQueue();
    }
    async processQueue() {
        if (this.store.queueState === 'processing' || !this.hasAnnouncements)
            return;
        this.setQueueState('processing');
        this.newAnnouncementBatch.forEach((announcement)=>{
            this.insertAnnouncementIntoQueue(announcement);
        });
        this.newAnnouncementBatch = [];
        this.cleanQueue();
        if (this.store.announcerState !== 'on') {
            this.setQueueState('idle');
            return;
        }
        const nextAnnouncement = this.store.nextAnnouncement;
        if (!nextAnnouncement) {
            this.setQueueState('idle');
            return;
        }
        const wasAnnounced = await this.announce(nextAnnouncement);
        if (wasAnnounced) {
            this.shiftQueue(nextAnnouncement);
            this.setQueueState('idle');
            this.hasAnnouncements && this.processQueue();
        } else
        this.setQueueState('idle');
    }
    cleanQueue() {
        const previousLength = this.store.totalQueueLength;
        if (this.store.highQueue.length > 3)
            this.store.highQueue = this.store.highQueue.slice(0, 3);
        if (this.store.mediumQueue.length > 4)
            this.store.mediumQueue = this.store.mediumQueue.slice(-4);
        if (this.store.totalQueueLength > 7)
            this.store.lowQueue = [];
        if (previousLength > this.store.totalQueueLength) this.emitDebug({
            type: 'clean'
        });
    }
    clearQueue() {
        this.store.criticalQueue = [];
        this.store.highQueue = [];
        this.store.mediumQueue = [];
        this.store.lowQueue = [];
    }
    insertAnnouncementIntoQueue(announcement) {
        switch(announcement.priority){
            case 'critical':
                this.store.criticalQueue.unshift(announcement);
                break;
            case 'high':
                this.store.highQueue.unshift(announcement);
                break;
            case 'medium':
                this.store.mediumQueue.push(announcement);
                break;
            case 'low':
                this.store.lowQueue.push(announcement);
                break;
            default:
                throw new Error(`Invalid priority: ${announcement.priority}`);
        }
    }
    shiftQueue(announcement) {
        switch (announcement.priority) {
        case 'critical':
            this.store.criticalQueue.shift();
            break;
        case 'high':
            this.store.highQueue.shift();
            break;
        case 'medium':
            this.store.mediumQueue.shift();
            break;
        case 'low':
            this.store.lowQueue.shift();
            break;
        default:
            throw new Error(`Invalid priority: ${announcement.priority}`);
        }
    }
    async announce(announcement) {
        if (this.config.method === 'live-region')
        {
            if (this.store.regionsReady) {
                await this.updateLiveRegion(announcement);
                this.emitDebug({
                    type: 'announce',
                    announcement: {
                        ...announcement
                    }
                });
                return true;
            }
        }
        return false;
    }
    async updateLiveRegion(announcement) {
        const element = announcement.priority === 'critical' || announcement.priority === 'high' ? this.store.assertiveRegion?.current : this.store.politeRegion?.current;
        if (element) await updateLiveRegionContent(element, announcement.message);
    }
    registerDebugCallback(listener) {
        this.debugListeners.add(listener);
        return ()=>{
            this.debugListeners.delete(listener);
        };
    }
    emitDebug(overrides) {
        if (this.debugListeners.size === 0) return;
        const event = {
            ...overrides,
            timestamp: Date.now(),
            queueSnapshot: this.getDebugSnapshot()
        };
        for (const listener of this.debugListeners)try {
            listener(event);
        } catch  {}
    }
    getDebugSnapshot() {
        const cloneQueue = (queue)=>[
                ...queue
            ];
        const bufferedLength = this.newAnnouncementBatch.length;
        return {
            announcerState: this.store.announcerState,
            queueState: this.store.queueState,
            criticalQueue: cloneQueue(this.store.criticalQueue),
            highQueue: cloneQueue(this.store.highQueue),
            mediumQueue: cloneQueue(this.store.mediumQueue),
            lowQueue: cloneQueue(this.store.lowQueue),
            buffered: cloneQueue(this.newAnnouncementBatch),
            totalLength: this.store.totalQueueLength + bufferedLength
        };
    }
    constructor(store, config){
        this.store = store;
        this.config = config;
        this.newAnnouncementBatch = (AnnouncerPresenter._makeObservable(this), []);
        this.debugListeners = new Set();
    }
}
