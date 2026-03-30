"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccessibilityAnnouncerControllerImpl", {
    enumerable: true,
    get: function() {
        return AccessibilityAnnouncerControllerImpl;
    }
});
const _debounce = require('../../../../../base/debounce');
class AccessibilityAnnouncerControllerImpl {
    announce(message, priority = 'medium') {
        this.presenter.addAnnouncement({
            message,
            priority
        });
    }
    deferAnnouncement(message, priority = 'medium') {
        let announced = false;
        return ()=>{
            if (announced) return;
            this.presenter.addAnnouncement({
                message,
                priority
            });
            announced = true;
        };
    }
    debounceAnnouncement(message, debounceMs = 1500, priority = 'medium') {
        const debouncedAnnounce = (0, _debounce.debounce)(()=>{
            const resolvedMessage = typeof message === 'function' ? message() : message;
            this.presenter.addAnnouncement({
                message: resolvedMessage,
                priority
            });
        }, debounceMs);
        return ()=>{
            debouncedAnnounce();
        };
    }
    startAnnouncer() {
        this.presenter.startAnnouncer();
    }
    pauseAnnouncer() {
        this.presenter.pauseAnnouncer();
    }
    stopAnnouncer() {
        this.presenter.stopAnnouncer();
    }
    registerDebugCallback(listener) {
        return this.presenter.registerDebugCallback(listener);
    }
    getDebugSnapshot() {
        return this.presenter.getDebugSnapshot();
    }
    constructor(presenter){
        this.presenter = presenter;
    }
}
