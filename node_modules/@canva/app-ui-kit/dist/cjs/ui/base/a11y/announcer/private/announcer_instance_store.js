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
    get AnnouncerInstanceStore () {
        return AnnouncerInstanceStore;
    },
    get announcerInstanceStore () {
        return announcerInstanceStore;
    }
});
class AnnouncerInstanceStore {
    get currentAnnouncer() {
        return this.currentAnnouncerInstance;
    }
    setAnnouncerInstance(controller, AnnouncerRegion) {
        const limitedController = {
            announce: (...args)=>controller.announce(...args),
            deferAnnouncement: (...args)=>controller.deferAnnouncement(...args)
        };
        this.currentAnnouncerInstance = {
            controller,
            limitedController,
            AnnouncerRegion
        };
        this.notifySubscribers();
    }
    notifySubscribers() {
        this.subscribers.forEach((callback)=>callback());
    }
    constructor(){
        this.subscribers = new Set();
        this.subscribe = (callback)=>{
            this.subscribers.add(callback);
            return ()=>this.subscribers.delete(callback);
        };
        this.getSnapshot = ()=>{
            if (!this.currentAnnouncerInstance) return null;
            return this.currentAnnouncerInstance.limitedController;
        };
        this.getServerSnapshot = ()=>{
            return null;
        };
        this.reset = ()=>{
            this.currentAnnouncerInstance = undefined;
        };
    }
}
const announcerInstanceStore = new AnnouncerInstanceStore();
