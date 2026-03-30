import * as React from 'react';
type CommonProps = {
    displayMode?: 'always' | 'focus'
    position?: 'top' | 'bottom'
    ref?: React.RefObject<HTMLAnchorElement | null>
};
type ContextualSkipLinkProps = {
    children: React.ReactNode
    variant?: never;
    useGlobalStyle?: boolean
};
type PageSkipLinkProps = {
    variant: 'skipToMainContent' | 'skipNavigation' | 'skipToSearch'
    children?: never;
};
type LinkProps = CommonProps & {
    to: string
    onClick?: never;
};
type ClickableProps = CommonProps & {
    to?: never;
    onClick: () => void
};
export type SkipLinkProps = (LinkProps | ClickableProps) & (ContextualSkipLinkProps | PageSkipLinkProps);
export declare const SkipLink: React.ComponentType<SkipLinkProps>;
type SkipTargetProps = {
    id: string
    scrollMarginTop?: number
    label?: string
};
export declare function SkipTarget({ id, scrollMarginTop, label }: SkipTargetProps): React.JSX.Element;
export {};
