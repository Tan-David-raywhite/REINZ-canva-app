import type * as React from 'react';
import type { AnnouncerStore } from './announcer_store';
import type { Announcement, AnnouncerConfig, AnnouncerDebugListener, AnnouncerDebugSnapshot } from './types';
export declare class AnnouncerPresenter {
    private readonly store;
    private readonly config;
    private newAnnouncementBatch;
    private debugListeners;
    constructor(store: AnnouncerStore, config: AnnouncerConfig);
    get hasAnnouncements(): boolean;
    private setQueueState;
    private setAnnouncerState;
    onRegionMount(regions: {
        assertiveRegion: React.RefObject<HTMLDivElement | null>;
        politeRegion: React.RefObject<HTMLDivElement | null>;
    }): void;
    onRegionUnmount(): void;
    startAnnouncer(): void;
    stopAnnouncer(): void;
    pauseAnnouncer(): void;
    addAnnouncement(announcement: Announcement): void;
    private processQueue;
    private cleanQueue;
    private clearQueue;
    private insertAnnouncementIntoQueue;
    private shiftQueue;
    private announce;
    private updateLiveRegion;
    registerDebugCallback(listener: AnnouncerDebugListener): () => void;
    private emitDebug;
    getDebugSnapshot(): AnnouncerDebugSnapshot;
}
