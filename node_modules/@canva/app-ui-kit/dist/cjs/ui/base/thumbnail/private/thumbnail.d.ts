import * as React from 'react';
import type { SizingProps } from './thumbnail_container';
export type StylingProps = {
    border?: 'none' | 'low'
    borderRadius?: 'none' | 'elementSmall' | 'element' | 'elementRelaxed' | 'elementSoftest' | 'elementRound'
};
export type ThumbnailProps = StylingProps & SizingProps & {
    children: React.ReactNode
    innerContainerClassName?: string
};
export declare const Thumbnail: ({ width, height, aspectRatio, border, borderRadius, children, innerContainerClassName, }: ThumbnailProps) => React.JSX.Element;
