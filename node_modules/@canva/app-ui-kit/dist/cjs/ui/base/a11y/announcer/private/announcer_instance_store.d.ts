import type { ComponentType } from 'react';
import type { AccessibilityAnnouncerController } from './announcer_controller';
export type LimitedController = Pick<AccessibilityAnnouncerController, 'announce' | 'deferAnnouncement'>;
interface ControllerEntry {
    controller: AccessibilityAnnouncerController;
    limitedController: LimitedController;
    AnnouncerRegion: ComponentType;
}
export declare class AnnouncerInstanceStore {
    private currentAnnouncerInstance;
    private subscribers;
    get currentAnnouncer(): ControllerEntry | undefined;
    setAnnouncerInstance(controller: AccessibilityAnnouncerController, AnnouncerRegion: ComponentType): void;
    private notifySubscribers;
    readonly subscribe: (callback: () => void) => () => boolean;
    readonly getSnapshot: () => LimitedController | null;
    readonly getServerSnapshot: () => null;
    readonly reset: () => void;
}
export declare const announcerInstanceStore: AnnouncerInstanceStore;
export {};
