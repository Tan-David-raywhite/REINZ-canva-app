"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAccessibilityAnnouncer", {
    enumerable: true,
    get: function() {
        return createAccessibilityAnnouncer;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobxreactlite = require("mobx-react-lite");
require("react");
const _accessibility_announcer_region = require("./accessibility_announcer_region");
const _announcer_controller = require("./announcer_controller");
const _announcer_instance_store = require("./announcer_instance_store");
const _announcer_presenter = require("./announcer_presenter");
const _announcer_store = require("./announcer_store");
function createAccessibilityAnnouncer(config = {
    method: 'live-region'
}) {
    const existingInstance = _announcer_instance_store.announcerInstanceStore.currentAnnouncer;
    if (existingInstance) return existingInstance;
    const store = new _announcer_store.AnnouncerStore();
    const presenter = new _announcer_presenter.AnnouncerPresenter(store, config);
    const controller = new _announcer_controller.AccessibilityAnnouncerControllerImpl(presenter);
    const Region = (0, _mobxreactlite.observer)(()=>(0, _jsxruntime.jsx)(_accessibility_announcer_region.AccessibilityAnnouncerRegion, {
            onMount: presenter.onRegionMount,
            onUnmount: presenter.onRegionUnmount
        }));
    _announcer_instance_store.announcerInstanceStore.setAnnouncerInstance(controller, Region);
    controller.startAnnouncer();
    return {
        controller,
        AnnouncerRegion: Region
    };
}
