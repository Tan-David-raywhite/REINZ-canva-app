import * as React from 'react';
import type { TextTypographySize } from '../../../typography/typography';
export type WordsRemainingProps = {
    count: number
    max: number
    margins?: 'default' | 'vertical' | 'horizontal' | 'none'
    textSize?: TextTypographySize
    id?: string
};
export declare const WordsRemaining: ({ count, max, margins, textSize, id, }: WordsRemainingProps) => React.JSX.Element;
