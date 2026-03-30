import '../../../../base/platform_quirks/disable_dragging';
import * as React from 'react';
import type { PlaceholderProps, PlaceholderShape } from '../../placeholder/placeholder';
export type LoadingState = 'loading' | 'loaded' | 'error' | 'none';
export type ImageProps = StaticImageProps & {
    loadingState?: LoadingState
    loadImage?: (src: string) => Promise<void>
    onImageLoad?: (loadingState: LoadingState) => void
    placeholder?: React.JSX.Element
    fallback?: React.JSX.Element
    renderImage?: (props: StaticImageProps) => React.ReactNode
};
export declare const ImageComponent: ({ loadingState, src, loadImage, onImageLoad, renderImage, ...staticImageProps }: ImageProps) => React.ReactNode;
export type StaticImageProps = {
    id?: string
    className?: string
    style?: React.CSSProperties
    alt?: string
    crossOrigin?: React.ImgHTMLAttributes<unknown>['crossOrigin']
    src?: string
    elementTiming?: string
    objectFit?: 'contain' | 'cover'
};
export declare const StaticImage: ({ id, className, alt, crossOrigin, src, elementTiming, style, objectFit, }: StaticImageProps) => React.JSX.Element;
export type ImagePlaceholderProps = {
    src?: string
    shape?: PlaceholderShape
} & Pick<PlaceholderProps, 'index' | 'disableAnimations'>;
export declare const ImagePlaceholder: ({ src, index, shape, disableAnimations, }: ImagePlaceholderProps) => React.JSX.Element;
