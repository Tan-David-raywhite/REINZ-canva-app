import * as React from 'react';
import type { Background } from '../../../box/box';
import type { BaseScrollableProps } from './base_scrollable';
type IndicatorType = 'shadow' | 'fade';
type BackgroundLevel = Extract<Background, 'surfaceSunken' | 'surface' | 'surfaceRaised' | 'surfaceFloating'>;
type ScrollableWithIndicatorProps = Pick<BaseScrollableProps, 'ref' | 'children' | 'onScroll' | 'onScrollStateChange' | 'debounceMs' | 'direction' | 'ariaLabel' | 'role'> & {
    type: IndicatorType
    background: BackgroundLevel
};
export type Indicator = {
    type: IndicatorType
    background?: BackgroundLevel
};
export declare const ScrollableWithIndicator: (props: ScrollableWithIndicatorProps) => React.JSX.Element;
export {};
