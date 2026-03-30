import * as React from 'react';
import type { UnitSize } from '../../metrics/metrics';
export type AspectRatioProps = {
    ratio: number
    children: React.ReactNode
    width?: number | UnitSize
    height?: number | UnitSize
};
export declare const AspectRatio: ({ ratio, children, width: widthProp, height: heightProp, }: AspectRatioProps) => React.JSX.Element;
