import * as React from 'react';
import type { BadgeGroupProps, Visibility } from '../../../badge/badge';
export type CardDecoratorProps = Omit<BadgeGroupProps, 'className' | 'visibility'> & {
    visibility?: Visibility
    children: React.ReactNode
    isInteractive?: boolean
};
export declare const CardDecorator: React.ComponentType<CardDecoratorProps>;
