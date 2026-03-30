import '../../../../base/platform_quirks/disable_dragging';
import type { JSX } from 'react';
import type { ImagePlaceholderProps, ImageProps } from './image';
import type { StylingProps, ThumbnailProps } from './thumbnail';
import type { SizingProps } from './thumbnail_container';
export type ImageThumbnailProps = Omit<ImageProps, 'objectFit'> & Omit<ThumbnailProps, 'children'>;
export declare const ImageThumbnail: ({ aspectRatio, border, borderRadius, width, height, ...imageProps }: ImageThumbnailProps) => JSX.Element;
export type ImageThumbnailPlaceholderProps = ImagePlaceholderProps & SizingProps & Pick<StylingProps, 'borderRadius' | 'border'>;
export declare const ImageThumbnailPlaceholder: ({ src, index, width, height, aspectRatio, border, borderRadius, shape, disableAnimations, }: ImageThumbnailPlaceholderProps) => JSX.Element;
