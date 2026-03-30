import * as React from 'react';
import type { UnitSize } from '../../metrics/metrics';
import type { ImageThumbnailProps } from './image_thumbnail';
import type { ThumbnailProps } from './thumbnail';
export type VideoLoadingState = 'loading' | 'loaded' | 'error';
export type VideoPlayState = 'play' | 'pause';
export type VideoThumbnailProps = {
    ref?: React.Ref<HTMLVideoElement>
    videoSrc: string
    playState?: VideoPlayState
    videoLoadingState?: VideoLoadingState
    VideoComponent?: ((props: Pick<React.VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'className' | 'controls' | 'loop' | 'muted' | 'playsInline' | 'src'>) => React.JSX.Element | null) | React.ComponentType<Pick<React.VideoHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'className' | 'controls' | 'loop' | 'muted' | 'playsInline' | 'src'> & React.RefAttributes<HTMLVideoElement>>
    loadVideo?: (src: string) => Promise<HTMLVideoElement>
    onVideoLoad?: (loadingState: VideoLoadingState) => void
    muted?: boolean
    autoplay?: boolean
    imageSrc?: ImageThumbnailProps['src']
    imageLoadingState?: ImageThumbnailProps['loadingState']
    imageFallback?: ImageThumbnailProps['fallback']
    imageAlt?: ImageThumbnailProps['alt']
    imagePlaceholder?: ImageThumbnailProps['placeholder']
    delayVideoLoad?: number
    imageClassName?: ImageThumbnailProps['className']
    videoClassName?: string
    onImageLoad?: ImageThumbnailProps['onImageLoad']
    width?: number | UnitSize
    height?: number | UnitSize
} & Pick<ImageThumbnailProps, 'renderImage'> & Omit<ThumbnailProps, 'children' | 'className' | 'fit' | 'thumbnailRatio'>;
export declare function VideoThumbnail(props: VideoThumbnailProps): React.ReactNode;
