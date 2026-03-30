import * as React from 'react';
import type { ButtonProps } from '../../../button/button';
export type ButtonDecoratorProps = Pick<ButtonProps, 'active' | 'disclosure' | 'className' | 'disabled' | 'ariaControls' | 'ariaHasPopup'> & Required<Pick<ButtonProps, 'icon' | 'onClick'>> & {
    label: string
    badge?: string | React.ReactElement
};
export declare const ButtonDecorator: React.ComponentType<ButtonDecoratorProps>;
