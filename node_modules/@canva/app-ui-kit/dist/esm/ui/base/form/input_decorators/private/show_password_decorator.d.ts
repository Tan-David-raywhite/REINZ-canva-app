import * as React from 'react';
export type ShowPasswordDecoratorProps = {
    showLabel?: string
    hideLabel?: string
    onShow?: () => void
    onHide?: () => void
    defaultShow?: boolean
};
export declare const ShowPasswordDecorator: React.ComponentType<ShowPasswordDecoratorProps>;
