"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AnnouncerPresenter", {
    enumerable: true,
    get: function() {
        return AnnouncerPresenter;
    }
});
const _make_observable = require('../../../../../base/make_observable/make_observable');
const _mobx = _interop_require_wildcard(require("mobx"));
const _announcer_fallback = require("./announcer_fallback");
const _announcer_utils = require("./announcer_utils");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
class AnnouncerPresenter {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            hasAnnouncements: _mobx.computed,
            setQueueState: _mobx.action.bound,
            setAnnouncerState: _mobx.action.bound,
            onRegionMount: _mobx.action.bound,
            onRegionUnmount: _mobx.action.bound,
            startAnnouncer: _mobx.action.bound,
            stopAnnouncer: _mobx.action.bound,
            pauseAnnouncer: _mobx.action.bound,
            addAnnouncement: _mobx.action.bound,
            processQueue: _mobx.action.bound,
            cleanQueue: _mobx.action.bound,
            clearQueue: _mobx.action.bound,
            insertAnnouncementIntoQueue: _mobx.action.bound,
            shiftQueue: _mobx.action.bound
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
        (0, _announcer_fallback.removeFallbackRegions)();
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
        if (element) await (0, _announcer_utils.updateLiveRegionContent)(element, announcement.message);
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
