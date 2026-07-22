import * as React from 'react';
import type { Size as Width } from '../../box/box';
import type { Focusable } from '../../focus/focusable/focusable';
export type BadgeShape = 'regular' | 'circle';
export type BadgeSize = 'tiny' | 'small';
export type BadgeTone = (typeof tones)[number];
export declare const tones: readonly ["neutral", "neutralSubtle", "feedbackOverlay", "feedbackHint", "feedbackHintSubtle", "feedbackPositive", "feedbackPositiveSubtle", "feedbackInfo", "feedbackInfoSubtle", "feedbackWarn", "feedbackWarnSubtle", "feedbackCritical", "feedbackCriticalSubtle"];
export type BadgeProps = {
    className?: string
    text?: string | React.JSX.Element
    icon?: React.ReactNode | (() => React.ReactNode)
    ariaLabel?: string
    shape?: BadgeShape
    size?: BadgeSize
    tone: BadgeTone
    border?: 'none' | 'solid'
    wrapInset?: '-1u' | '-0.5u' | '0' | '0.5u' | '1u'
    width?: Width
    children?: React.ReactNode
    testId?: string
};
export declare const Badge: ({ children, wrapInset, ...props }: BadgeProps) => React.JSX.Element;
export declare const badgeButtonTones: readonly ["primary", "secondary"];
type BadgeButtonTone = (typeof badgeButtonTones)[number];
type CommonButtonProps = {
    className?: string
    disabled?: boolean
    onClick?: React.MouseEventHandler<any>
    focusRef?: React.Ref<Focusable>
    onMouseDown?(
     e: {
         stopPropagation(): void;
     }
    ): void
    children: React.ReactNode
    ariaLabel?: string
    ariaHasPopup?: 'menu' | 'dialog'
};
type DialogButtonProps = CommonButtonProps & {
    ariaHasPopup?: 'dialog';
};
type MenuButtonProps = CommonButtonProps & {
    ariaHasPopup: 'menu';
    expanded: boolean
    ariaControls?: string
};
type ButtonBadgeProps = DialogButtonProps | MenuButtonProps;
export declare const PrimaryButtonBadge: (props: ButtonBadgeProps) => React.JSX.Element;
export declare const ButtonBadge: (props: ButtonBadgeProps & {
    tone: BadgeButtonTone
}) => React.JSX.Element;
export {};
