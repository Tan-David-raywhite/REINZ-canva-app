export type AnnouncementPriority = 'critical' | 'high' | 'medium' | 'low';
export type AnnouncementMethod = 'live-region';
export interface AnnouncerConfig {
    method: AnnouncementMethod;
}
export interface Announcement {
    message: string;
    priority: AnnouncementPriority;
}
export interface AnnouncerDebugEvent {
    type: 'enqueue' | 'announce' | 'drop' | 'clean' | 'state_change';
    timestamp: number;
    announcement?: Announcement;
    announcerState?: 'on' | 'paused' | 'off';
    queueState?: 'idle' | 'processing';
    queueSnapshot?: AnnouncerDebugSnapshot;
}
export interface AnnouncerDebugSnapshot {
    announcerState: 'on' | 'paused' | 'off';
    queueState: 'idle' | 'processing';
    criticalQueue: Announcement[];
    highQueue: Announcement[];
    mediumQueue: Announcement[];
    lowQueue: Announcement[];
    buffered: Announcement[]
    totalLength: number;
}
export type AnnouncerDebugListener = (event: AnnouncerDebugEvent) => void;
