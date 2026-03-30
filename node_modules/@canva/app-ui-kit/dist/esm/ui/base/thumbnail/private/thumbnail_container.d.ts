import * as React from 'react';
import type { UnitSize } from '../../metrics/metrics';
import type { Fit } from './dimension';
export type ThumbnailContainerBackground = 'none' | 'secondary' | 'contrastOnLight' | 'contrastOnDark';
export type ThumbnailContainerBackgroundHover = 'secondaryHover' | 'contrastOnLightHover' | 'contrastOnDarkHover';
export type ThumbnailContainerProps = SizingProps & {
    className?: string
    children: React.ReactNode
    background?: ThumbnailContainerBackground | ThumbnailContainerBackgroundHover
    border?: 'none' | 'low'
    borderRadius?: 'none' | 'elementSmall' | 'element' | 'elementRelaxed' | 'elementSoftest' | 'elementRound'
    padding?: 'none' | '1u' | '2u'
    fit?: Fit
};
type ThumbnailContainerContextType = {
    aspectRatio?: number
    padding: 'none' | '1u' | '2u'
    fit: 'cover' | 'coverCrop'
};
export declare const ThumbnailContainerContext: React.Context<ThumbnailContainerContextType | undefined>;
export declare const useInThumbnailContainerContext: () => boolean;
export declare const ThumbnailContainer: ({ children, className, background, border, borderRadius, fit, padding, height, width, aspectRatio: aspectRatioProp, }: ThumbnailContainerProps) => React.JSX.Element;
export type SizingProps = React.PropsWithChildren<{
    aspectRatio?: number
    width?: number | UnitSize
    height?: number | UnitSize
}>;
export declare const SizingContainer: ({ aspectRatio, width, height, children, }: SizingProps) => React.ReactNode;
export declare const resolveAspectRatio: ({ aspectRatio, width, height, }: {
    aspectRatio?: number;
    width?: UnitSize | number;
    height?: UnitSize | number;
}) => number | undefined;
export {};
