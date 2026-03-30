import * as React from 'react';
import type { UseTabOptions } from './behavior';
export type TabProps = UseTabOptions & {
    tooltipLabel?: string
    start?: React.ReactNode
    end?: React.ReactNode
    layout?: 'horizontal' | 'vertical'
    children?: React.ReactNode
};
export declare const Tab: ({ id, active, onClick, tooltipLabel, ariaLabel, ariaControls, children, start, end, layout, }: TabProps) => React.JSX.Element;
