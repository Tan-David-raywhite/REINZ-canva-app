import * as React from 'react';
declare global {
    const jest: unknown;
}
export declare const SkipRenderOnClient: ({ children, shouldRenderOnClient, initiallyVisible, tagName: TagName, className, }: {
    children?: React.ReactNode
    shouldRenderOnClient: () => boolean
    initiallyVisible?: boolean
    tagName?: "div" | "span"
    className?: string
}) => React.JSX.Element;
