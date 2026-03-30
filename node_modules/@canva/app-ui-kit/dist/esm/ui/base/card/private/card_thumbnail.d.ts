import * as React from 'react';
import type { IconThumbnailProps, ImageProps, ImageThumbnailPlaceholderProps, ThumbnailContainerBackground, ThumbnailContainerProps, ThumbnailProps, VideoThumbnailProps } from '../../thumbnail/thumbnail';
export type CardThumbnailContainerProps = {
    background?: ThumbnailContainerBackground
    aspectRatio?: ThumbnailContainerProps['aspectRatio']
    borderRadius?: ThumbnailContainerProps['borderRadius']
} & Omit<ThumbnailContainerProps, 'background' | 'borderRadius'>;
export declare const CardThumbnailContainer: React.ComponentType<CardThumbnailContainerProps>;
type CommonPublicThumbnailProps = {
    border?: ThumbnailProps['border']
    borderRadius?: ThumbnailProps['borderRadius']
    aspectRatio?: ThumbnailProps['aspectRatio']
    height?: ThumbnailProps['height']
    width?: ThumbnailProps['width']
};
export type CardThumbnailProps = CommonPublicThumbnailProps & Pick<ThumbnailProps, 'children'>;
export declare const CardThumbnail: React.ComponentType<CardThumbnailProps>;
export type CardPlaceholderProps = Omit<CommonPublicThumbnailProps, 'background'> & Pick<ImageThumbnailPlaceholderProps, 'index' | 'shape' | 'disableAnimations' | 'width' | 'height'>;
export declare const CardPlaceholder: React.ComponentType<CardPlaceholderProps>;
type CardIconThumbnailProps = Omit<CommonPublicThumbnailProps, 'background' | 'thumbnailRatio'> & Pick<IconThumbnailProps, 'Icon' | 'size' | 'tone' | 'background' | 'padding'>;
export declare const CardIconThumbnail: React.ComponentType<CardIconThumbnailProps>;
type CardImageThumbnailProps = CommonPublicThumbnailProps & ImageProps;
export declare const CardImageThumbnail: React.ComponentType<CardImageThumbnailProps>;
export type CardVideoThumbnailProps = CommonPublicThumbnailProps & {
    ref?: React.Ref<HTMLVideoElement>
    whenToPlay: 'always' | 'on-hover' | 'now' | 'never'
    className?: string
} & Pick<VideoThumbnailProps, 'videoSrc' | 'videoLoadingState' | 'VideoComponent' | 'muted' | 'autoplay' | 'imageSrc' | 'imageLoadingState' | 'imageFallback' | 'imagePlaceholder' | 'imageAlt' | 'loadVideo' | 'onVideoLoad' | 'onImageLoad' | 'renderImage'>;
export declare const CardVideoThumbnail: React.ComponentType<CardVideoThumbnailProps>;
export {};
