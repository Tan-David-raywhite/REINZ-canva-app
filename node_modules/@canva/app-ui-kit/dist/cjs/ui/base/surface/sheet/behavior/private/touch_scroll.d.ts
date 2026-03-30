import * as React from 'react';
import type { ScrollPanControls } from './scroll_pan';
export type UseTouchScrollOptions = {
    panControls: ScrollPanControls
};
export declare function useTouchScroll({ panControls }: UseTouchScrollOptions): {
    touchScrollRef: React.RefCallback<HTMLElement>;
};
export declare function useTouchScrollIsolation<E extends HTMLElement>(): React.Ref<E>;
