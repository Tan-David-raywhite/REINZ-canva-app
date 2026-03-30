import * as React from 'react';
import type { BadgeTone } from './badge';
export type NotificationDotProps = {
    animation?: 'none' | 'pulse'
    tone?: BadgeTone
    visible?: boolean
    wrapInset?: '-0.5u' | '0' | '0.5u' | '1u'
    children?: React.ReactNode
};
export declare const NotificationDot: React.ComponentType<NotificationDotProps>;
