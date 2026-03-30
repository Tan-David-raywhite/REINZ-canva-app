import * as React from 'react';
import type { AvatarProps, AvatarTooltipTriggerProps } from './avatar';
import type { AvatarShape } from './internal_avatar';
type AcronymAvatarProp = {
    name: string
    borderColor?: string
    backgroundSeed?: string
    backgroundColor?: string
    role?: AvatarProps['role']
    ariaLabel?: string
    className?: string
    style?: React.CSSProperties
    shape?: AvatarShape
} & AvatarTooltipTriggerProps;
export declare const AcronymAvatar: React.ComponentType<AcronymAvatarProp>;
export {};
