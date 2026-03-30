import { jsx as _jsx } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import 'react';
import { AccessibilityAnnouncerRegion } from './accessibility_announcer_region';
import { AccessibilityAnnouncerControllerImpl } from './announcer_controller';
import { announcerInstanceStore } from './announcer_instance_store';
import { AnnouncerPresenter } from './announcer_presenter';
import { AnnouncerStore } from './announcer_store';
export function createAccessibilityAnnouncer(
    config = {
        method: 'live-region'
    }
) {
    const existingInstance = announcerInstanceStore.currentAnnouncer;
    if (existingInstance) return existingInstance;
    const store = new AnnouncerStore();
    const presenter = new AnnouncerPresenter(store, config);
    const controller = new AccessibilityAnnouncerControllerImpl(presenter);
    const Region = observer(()=>_jsx(AccessibilityAnnouncerRegion, {
            onMount: presenter.onRegionMount,
            onUnmount: presenter.onRegionUnmount
        }));
    announcerInstanceStore.setAnnouncerInstance(controller, Region);
    controller.startAnnouncer();
    return {
        controller,
        AnnouncerRegion: Region
    };
}
