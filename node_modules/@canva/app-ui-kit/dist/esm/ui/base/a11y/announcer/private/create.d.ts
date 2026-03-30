import * as React from 'react';
import type { AccessibilityAnnouncerController } from './announcer_controller';
import type { AnnouncerConfig } from './types';
interface AnnouncerInstance {
    AnnouncerRegion: React.ComponentType;
    controller: AccessibilityAnnouncerController;
}
export declare function createAccessibilityAnnouncer(config?: AnnouncerConfig): AnnouncerInstance;
export {};
