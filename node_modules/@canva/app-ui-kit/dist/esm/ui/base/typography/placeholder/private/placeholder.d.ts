import * as React from 'react';
import type { DisplayTypographySize, TextTypographySize, TitleTypographySize } from '../../typography';
export type TextPlaceholderSize = TextTypographySize;
export type TitlePlaceholderSize = TitleTypographySize;
export type DisplayPlaceholderSize = DisplayTypographySize;
type SharedPlaceholderProps = {
    index?: number
    disableAnimations?: boolean
};
type TextPlaceholderProps = SharedPlaceholderProps & {
    size?: TextPlaceholderSize
};
type TitlePlaceholderProps = SharedPlaceholderProps & {
    size?: TitlePlaceholderSize
};
type DisplayPlaceholderProps = SharedPlaceholderProps & {
    size: DisplayPlaceholderSize
};
export declare const TextPlaceholder: React.ComponentType<TextPlaceholderProps>;
export declare const TitlePlaceholder: React.ComponentType<TitlePlaceholderProps>;
export declare const DisplayPlaceholder: React.ComponentType<DisplayPlaceholderProps>;
export {};
