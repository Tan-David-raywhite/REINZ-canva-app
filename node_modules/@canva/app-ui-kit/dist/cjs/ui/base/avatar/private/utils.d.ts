import type { AvatarSize } from './avatar_size';
import type { Avatar, AvatarBundle, AvatarImage } from './types';
export declare const DEFAULT_BACKGROUND_COLOR = "#8e8e8e";
export declare function generateAvatarBackgroundColor(seed?: string, colors?: string[]): string;
export declare function getNearestAvatarUrlFromBundle(
 avatarBundle?: AvatarBundle,
 size?: AvatarSize | number,
 devicePixelRatio?: number,
 includeDefaultAvatar?: boolean
): string | undefined;
export declare function useNearestAvatarUrlFromBundle(
 avatarBundle?: AvatarBundle,
 size?: AvatarSize,
 devicePixelRatioProp?: number,
 includeDefaultAvatar?: boolean
): string | undefined;
export declare function getNearestAvatarUrlFromImages(
 images?: readonly AvatarImage[],
 size?: AvatarSize | number,
 devicePixelRatio?: number
): string | undefined;
export declare function useNearestAvatarUrlFromImages(
 images?: readonly AvatarImage[],
 size?: AvatarSize,
 devicePixelRatioProp?: number
): string | undefined;
export declare function maybeGetNearestAvatarUrl(avatar: Avatar | undefined, size?: AvatarSize): string | undefined;
