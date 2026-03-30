import * as React from 'react';
import type { TextTypographySize } from '../../../typography/typography';
export type CharsRemainingProps = {
    count: number
    max: number
    margins?: 'default' | 'vertical' | 'horizontal' | 'none'
    textSize?: TextTypographySize
    id?: string
};
export declare const CharsRemaining: ({ count, max, margins, textSize, id, }: CharsRemainingProps) => React.JSX.Element;
