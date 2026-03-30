import * as React from 'react';
import { prefersReducedMotion as prefersReducedMotionBase } from '../animation/supports_animation';
import type { AutoplayVideos } from '../provider/provider';
type Props = React.VideoHTMLAttributes<HTMLVideoElement> & {
    ref?: React.Ref<HTMLVideoElement>;
    playbackRate?: number;
    ariaLabel?: string;
    ariaHidden?: boolean;
};
export declare function createVideoComponent(cleanup?: (videoElement: HTMLVideoElement) => void): React.ComponentType<Props>;
export declare function createVideoA11ySafeComponent(
    Video: React.ComponentType<Props>,
    prefersReducedMotion?: typeof prefersReducedMotionBase
): React.ComponentType<Props>;
export declare function canA11ySafeVideoAutoplay({ prefersReducedMotion, autoplayVideos, enableAnimations, }: {
    prefersReducedMotion?: () => boolean;
    autoplayVideos: AutoplayVideos;
    enableAnimations: boolean;
}): boolean;
export declare const Video: React.ComponentType<Props>;
export declare const VideoA11ySafe: React.ComponentType<Props>;
export {};
