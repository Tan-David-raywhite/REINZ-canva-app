import * as React from 'react';
import type { UnitSpace } from '../../metrics/metrics';
export type TabListProps = React.PropsWithChildren<{
    align?: 'start' | 'center' | 'end' | 'stretch'
    spacing?: Extract<UnitSpace, '0' | '1u' | '2u' | '3u' | '4u'>
    bleedX?: boolean
    animate?: boolean
    children?: React.ReactNode
    underline?: 'visible' | 'none'
}>;
export declare const TabList: ({ align, spacing, animate: animateProp, bleedX, underline, children, }: TabListProps) => React.JSX.Element;
