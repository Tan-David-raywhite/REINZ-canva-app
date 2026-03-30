import * as React from 'react';
import type { FillObject } from './swatch_util';
type ColorProps = {
    className?: string
    height: number
    width: number
    fill: string | undefined | FillObject
};
export declare const Color: ({ fill, ...props }: ColorProps) => React.JSX.Element;
type ColorStripesProps = {
    className?: string
    height: number
    width: number
    fills: readonly (string | undefined | FillObject)[]
};
export declare const ColorStripes: React.ComponentType<ColorStripesProps>;
export {};
