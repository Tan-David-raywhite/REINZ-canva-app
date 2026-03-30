import * as React from 'react';
import type { Alignment, Placement } from '../../../tooltip/tooltip';
import type { TextProps, TitleProps } from '../../typography';
import type { TruncatedMeasure } from './is_truncated';
type TruncatedProps<T extends {
    children?: React.ReactNode;
    lineClamp?: number;
}> = {
    children: string
    measure?: TruncatedMeasure
    lineClamp?: number
    tooltipPlacement?: Placement
    tooltipAlignment?: Alignment
} & Omit<T, 'children' | 'lineClamp'>;
export type TruncatedTextProps = TruncatedProps<TextProps>;
export type TruncatedTitleProps = TruncatedProps<TitleProps>;
export declare const TruncatedText: React.ComponentType<TruncatedTextProps>;
export declare const TruncatedTitle: React.ComponentType<TruncatedTitleProps>;
export {};
