import * as React from 'react';
import type { ButtonAriaProps } from '../../a11y/button_aria_attributes/button_aria_attributes';
import type { TooltipProps } from '../../tooltip/tooltip';
type AriaProps = Pick<ButtonAriaProps, 'active' | 'pressed' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy' | 'ariaHidden' | 'tabIndex' | 'ariaCurrent'> & {
    role?: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox'
};
type CommonEventHandlerProps = {
    onPointerDown?: React.PointerEventHandler<HTMLAnchorElement>
    onPointerUp?: React.PointerEventHandler<HTMLAnchorElement>
    onPointerEnter?: React.PointerEventHandler<HTMLAnchorElement>
    onPointerLeave?: React.PointerEventHandler<HTMLAnchorElement>
    onPointerMove?: React.PointerEventHandler<HTMLAnchorElement>
    onPointerCancel?: React.PointerEventHandler<HTMLAnchorElement>
};
type CommonProps = {
    children?: React.ReactNode
    draggable?: boolean
    className?: string
    id?: string
    ref?: React.Ref<HTMLAnchorElement>
    disabled?: boolean
    variant?: LinkVariant
} & LinkTooltipProps & CommonEventHandlerProps;
type LinkTooltipProps = {
    tooltipLabel?: TooltipProps['label']
    tooltipDescription?: TooltipProps['description']
    tooltipDisabled?: TooltipProps['disabled']
    tooltipPlacement?: TooltipProps['placement']
    tooltipLineClamp?: TooltipProps['lineClamp']
};
type AnchorProps = {
    href: string
    rel?: string
    target?: string
    download?: string
    withOpenInNewIcon?: boolean
};
export type LinkButtonProps = CommonProps & Partial<AnchorProps> & AriaProps & Pick<ButtonAriaProps, 'disclosure' | 'ariaRoleDescription' | 'ariaControls' | 'ariaOwns' | 'ariaHasPopup'> & {
    onClick: React.MouseEventHandler<HTMLAnchorElement>
};
export type LinkProps = CommonProps & AnchorProps & Omit<AriaProps, 'role'> & {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    role?: AriaProps['role'] | 'button'
    preventLineBreak?: boolean
};
export declare const InheritColor: unique symbol;
export declare const variants: readonly [
    'regular',
    'semiBold',
    'subtle',
    'muted',
    'unstyled',
    'critical',
    typeof InheritColor
];
export type LinkVariant = (typeof variants)[number];
export declare function Link(
 { tooltipLabel, tooltipDescription, tooltipDisabled, tooltipLineClamp, tooltipPlacement, ...props }: LinkProps
): React.ReactNode;
export declare function LinkButton({ onClick, ...props }: LinkButtonProps): React.ReactNode;
export {};
