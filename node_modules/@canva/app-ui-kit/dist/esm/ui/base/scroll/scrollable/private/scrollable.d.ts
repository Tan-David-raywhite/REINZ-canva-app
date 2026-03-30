import * as React from 'react';
import type { BaseScrollableProps, ScrollDirection } from './base_scrollable';
import type { Indicator } from './scrollable_with_indicator';
export type ScrollableProps = Pick<BaseScrollableProps, 'children' | 'ref' | 'onScroll' | 'onScrollStateChange' | 'debounceMs' | 'ariaLabel' | 'role'> & {
    direction?: ScrollDirection
    indicator?: Indicator
};
export declare const Scrollable: (props: ScrollableProps) => React.JSX.Element;
