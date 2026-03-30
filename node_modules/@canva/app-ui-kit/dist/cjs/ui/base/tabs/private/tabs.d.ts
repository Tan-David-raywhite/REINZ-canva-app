import * as React from 'react';
import type { UseTabsOptions } from './behavior';
export type TabsProps = UseTabsOptions & {
    height?: 'auto' | 'fill' | number
    children?: React.ReactNode
};
export declare const TabsProvider: ({ children, ...props }: TabsProps) => React.JSX.Element;
export declare const Tabs: ({ children, height, ...props }: TabsProps) => React.JSX.Element;
