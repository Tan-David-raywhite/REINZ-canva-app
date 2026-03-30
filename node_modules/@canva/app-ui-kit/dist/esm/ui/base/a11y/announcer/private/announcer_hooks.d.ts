import type { LimitedController } from './announcer_instance_store';
import type { AnnouncementPriority } from './types';
export declare function useAnnouncer(): LimitedController;
export declare function useAnnounceOnce(
 message: string,
 options?: {
     priority?: AnnouncementPriority;
     shouldReset?: boolean;
 }
): () => void;
export declare function useAnnounceOnUpdate(
 message: string,
 dependency: unknown,
 options?: {
     priority?: AnnouncementPriority;
     debounceMs?: number
 }
): void;
export declare function useAnnounceOnMount(
 message: string,
 options?: {
     priority?: AnnouncementPriority;
 }
): void;
export declare function useAnnounceWhen(
 message: string,
 condition: boolean,
 options?: {
     priority?: AnnouncementPriority;
     skipInitialRender?: boolean;
 }
): void;
