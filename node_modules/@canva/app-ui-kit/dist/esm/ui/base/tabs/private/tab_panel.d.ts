import * as React from 'react';
import type { UseTabPanelOptions } from './behavior';
export type TabPanelProps = UseTabPanelOptions & {
    animate?: boolean
};
export declare const TabPanel: ({ children: childrenProp, id: idProp, active: activeProp, animate: animateProp, ariaLabelledBy: ariaLabelledByProp, contentRenderStrategy, }: TabPanelProps) => React.JSX.Element;
