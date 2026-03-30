import * as React from 'react';
export type SkipLinkMessages = {
    skipToStart: string
    skipToEnd: string
};
export type SkipLinkProps = {
    messages: SkipLinkMessages
    children?: React.ReactNode
};
export declare const SkipLinks: React.ComponentType<SkipLinkProps>;
