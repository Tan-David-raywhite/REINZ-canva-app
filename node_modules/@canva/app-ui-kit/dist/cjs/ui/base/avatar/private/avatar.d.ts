import * as React from 'react';
import type { TriggerProps } from '../../tooltip/tooltip';
import type { AvatarSize } from './avatar_size';
import type { AvatarColorMap, AvatarShape } from './internal_avatar';
export declare const showOverlays: readonly ["always", "on-hover", "not-on-hover"];
type ShowOverlay = (typeof showOverlays)[number];
type ConditionalNameProp = {
    name?: string
    role?: 'presentation'
} | {
    name: string;
    role?: 'img';
};
export type AvatarTooltipTriggerProps = Partial<Omit<TriggerProps, 'tooltipId'>>;
export type AvatarProps = {
    size?: AvatarSize
    shape?: AvatarShape
    backgroundSeed?: string
    backgroundColor?: string | AvatarColorMap
    borderColor?: string
    photo?: string
    tooltipLabel?: string
    tooltipDescription?: string
    showOverlay?: ShowOverlay
    overlayContent?: React.JSX.Element
    onClick?: () => void
    href?: string
    target?: string
    buttonAriaLabel?: string
    buttonAriaLabelledBy?: string
    buttonAriaDescribedBy?: string
} & ConditionalNameProp;
export declare const Avatar: React.ComponentType<AvatarProps>;
export {};
