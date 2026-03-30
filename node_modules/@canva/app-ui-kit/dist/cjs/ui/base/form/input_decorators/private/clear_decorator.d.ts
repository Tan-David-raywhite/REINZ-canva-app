import * as React from 'react';
export type ClearDecoratorProps = {
    when?: 'not-empty' | 'always'
    label?: string
    onClear?: () => void
    showDivider?: boolean
};
export declare const ClearDecorator: React.ComponentType<ClearDecoratorProps>;
