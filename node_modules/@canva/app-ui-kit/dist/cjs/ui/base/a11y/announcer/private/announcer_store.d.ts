import type * as React from 'react';
import type { Announcement } from './types';
export declare class AnnouncerStore {
    criticalQueue: Announcement[];
    highQueue: Announcement[];
    mediumQueue: Announcement[];
    lowQueue: Announcement[];
    assertiveRegion: React.RefObject<HTMLDivElement | null> | null;
    politeRegion: React.RefObject<HTMLDivElement | null> | null;
    queueState: 'idle' | 'processing';
    announcerState: 'on' | 'paused' | 'off';
    get regionsReady(): boolean;
    get combinedQueue(): Announcement[];
    get nextAnnouncement(): Announcement | undefined;
    get totalQueueLength(): number;
    get hasAnnouncements(): boolean;
}
