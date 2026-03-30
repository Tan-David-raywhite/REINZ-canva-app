import * as React from 'react';
import type { AvatarTooltipTriggerProps } from './avatar';
export type AvatarShape = 'square' | 'circle';
export type AvatarColorMap = {
    named?: string;
    photo?: string;
};
export type InternalAvatarProps = {
    name?: string
    ariaRole?: 'presentation' | 'img'
    ariaLabel?: string
    shape?: AvatarShape
    backgroundSeed?: string
    backgroundColor?: string | AvatarColorMap
    borderColor?: string
    photo?: string
    className?: string
    style?: React.CSSProperties
} & AvatarTooltipTriggerProps;
export declare const InternalAvatar: ({ name, ariaRole, ariaLabel, backgroundSeed, backgroundColor, borderColor, photo, className, style, shape, ...tooltipTriggerProps }: InternalAvatarProps) => React.JSX.Element;
