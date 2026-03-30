import * as React from 'react';
import type { ButtonVariant } from '../../../button/button';
export type CopyDecoratorProps = {
    label?: string
    copiedLabel?: string
    onCopy?: () => void
    tone?: Extract<ButtonVariant, 'primary' | 'tertiary'>
    disabled?: boolean
};
export declare const CopyDecorator: React.ComponentType<CopyDecoratorProps>;
