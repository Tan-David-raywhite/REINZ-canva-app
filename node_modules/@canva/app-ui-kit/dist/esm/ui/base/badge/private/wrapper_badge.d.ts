import * as React from 'react';
export type WrapperBadgeProps = {
    wrapInset?: '-1u' | '-0.5u' | '0' | '0.5u' | '1u'
    children?: React.ReactNode
    badge: React.ReactNode
};
export declare const WrapperBadge: React.ComponentType<WrapperBadgeProps>;
