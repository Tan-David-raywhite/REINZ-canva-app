import * as React from 'react';
import type { AvatarProps, AvatarTooltipTriggerProps } from './avatar';
export declare const PictureAvatar: ({ borderColor, backgroundColor, photoSrc, ariaLabel, className, style, role, ...tooltipTriggerProps }: {
    borderColor?: string
    backgroundColor?: string
    photoSrc?: string
    ariaLabel?: string
    role?: AvatarProps["role"]
    className?: string
    style?: React.CSSProperties
} & AvatarTooltipTriggerProps) => React.JSX.Element;
