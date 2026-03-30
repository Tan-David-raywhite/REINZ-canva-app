import type { AnnouncerPresenter } from './announcer_presenter';
import type { AnnouncementPriority, AnnouncerDebugListener, AnnouncerDebugSnapshot } from './types';
export interface AccessibilityAnnouncerController {
    announce(message: string, priority?: AnnouncementPriority): void
    deferAnnouncement(message: string, priority?: AnnouncementPriority): () => void
    debounceAnnouncement(
     message: string | (() => string),
     debounceMs?: number,
     priority?: AnnouncementPriority
    ): () => void
    startAnnouncer(): void
    pauseAnnouncer(): void
    stopAnnouncer(): void
    registerDebugCallback?(listener: AnnouncerDebugListener): () => void
    getDebugSnapshot?(): AnnouncerDebugSnapshot
}
export declare class AccessibilityAnnouncerControllerImpl implements AccessibilityAnnouncerController {
    private readonly presenter;
    constructor(presenter: AnnouncerPresenter);
    announce(message: string, priority?: AnnouncementPriority): void;
    deferAnnouncement(message: string, priority?: AnnouncementPriority): () => void;
    debounceAnnouncement(message: string | (() => string), debounceMs?: number, priority?: AnnouncementPriority): () => void;
    startAnnouncer(): void;
    pauseAnnouncer(): void;
    stopAnnouncer(): void;
    registerDebugCallback(listener: AnnouncerDebugListener): () => void;
    getDebugSnapshot(): AnnouncerDebugSnapshot;
}
