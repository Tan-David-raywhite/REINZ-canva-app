"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AnnouncerStore", {
    enumerable: true,
    get: function() {
        return AnnouncerStore;
    }
});
const _make_observable = require('../../../../../base/make_observable/make_observable');
const _mobx = _interop_require_wildcard(require("mobx"));
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
class AnnouncerStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            criticalQueue: _mobx.observable.shallow,
            highQueue: _mobx.observable.shallow,
            mediumQueue: _mobx.observable.shallow,
            lowQueue: _mobx.observable.shallow,
            assertiveRegion: _mobx.observable.ref,
            politeRegion: _mobx.observable.ref,
            queueState: _mobx.observable.ref,
            announcerState: _mobx.observable.ref,
            regionsReady: _mobx.computed,
            combinedQueue: _mobx.computed,
            nextAnnouncement: _mobx.computed,
            totalQueueLength: _mobx.computed,
            hasAnnouncements: _mobx.computed
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
