import * as React from 'react';
import { Breakpoint } from '../metrics/metrics';
export type PixelDensitySource = {
    src: string
    pixelDensity: number
};
export type IntrinsicWidthSource = {
    src: string
    intrinsicWidth: number
};
export type BreakpointSource = {
    images: IntrinsicWidthSource[]
    breakpoint?: Breakpoint
};
export type Length = {
    type: 'px' | 'vw'
    value: number
};
export type Size = {
    breakpoint?: Length
    width: Length
};
type ResponsiveImageProps = Omit<React.JSX.IntrinsicElements['img'], 'srcSet' | 'sizes'> & {
    ref?: React.Ref<HTMLImageElement>
    alt: string
};
type PixelDensityVariantProps = ResponsiveImageProps & {
    sources: PixelDensitySource[]
};
export type ViewportVariantProps = ResponsiveImageProps & {
    sources: IntrinsicWidthSource[]
    sizes: Size[]
};
type PictureViewportProps = Omit<React.JSX.IntrinsicElements['img'], 'srcSet' | 'sizes'> & {
    ref?: React.Ref<HTMLImageElement>
    alt: string
    sources: BreakpointSource[]
    src?: string
};
export declare function PixelDensityResponsiveImage(props: PixelDensityVariantProps): React.ReactNode;
export declare function ViewportResponsiveImage(props: ViewportVariantProps): React.ReactNode;
export declare function ViewportResponsivePicture(props: PictureViewportProps): React.ReactNode;
export {};
