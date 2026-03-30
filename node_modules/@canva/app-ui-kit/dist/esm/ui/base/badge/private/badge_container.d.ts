import * as React from 'react';
export type Location = 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start' | 'center-end' | 'center-start';
export type PaddingStyle = 'standard' | 'compact';
export type Visibility = 'always' | 'on-hover';
export type Transition = 'fade' | 'slide' | 'none';
export type BadgeContainerProps = {
    ref?: React.Ref<HTMLElement>
    children?: any
    paddingStyle?: PaddingStyle
    className?: string
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
    onMouseUp?: React.MouseEventHandler
    onMouseDown?: React.MouseEventHandler
    role?: 'group'
};
export declare function BadgeContainer(
 { children, paddingStyle, className, ariaLabel, ariaLabelledBy, ariaDescribedBy, onMouseEnter, onMouseLeave, onMouseUp, onMouseDown, role, ref, }: BadgeContainerProps
): React.ReactNode;
export type BadgeGroupProps = {
    location: Location | undefined
    visibility?: Visibility
    transition?: Transition
    stretch?: boolean
    className?: string
};
export declare function BadgeGroup({ location, visibility, transition, children, stretch, className, }: BadgeGroupProps & {
    children: any
}): React.JSX.Element;
export declare const VisibleOnHover: ({ children, transition, showOnTouchDevice, }: {
    children: any
    transition?: Transition
    showOnTouchDevice?: boolean
}) => React.JSX.Element | null;
export declare const SwapOnHover: ({ onHover, children, }: {
    onHover: React.ReactNode
    children: React.ReactNode
}) => React.JSX.Element;
export type ExtendedBadgeVisibilityTriggerProps = {
    ref?: React.Ref<HTMLElement>
    children?: React.ReactNode
    tagName?: 'div' | 'article'
    role?: 'group'
    className?: string
    onMouseEnter?: React.MouseEventHandler
    onMouseLeave?: React.MouseEventHandler
    onMouseUp?: React.MouseEventHandler
    onMouseDown?: React.MouseEventHandler
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
};
export declare const ExtendedBadgeVisibilityTrigger: React.ComponentType<ExtendedBadgeVisibilityTriggerProps>;
