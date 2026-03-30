import * as React from 'react';
import type { ScrollPanControls } from './scroll_pan';
export type UseWheelScrollOptions = {
    panControls: ScrollPanControls
};
export declare function useWheelScroll({ panControls }: UseWheelScrollOptions): {
    wheelRef: React.RefCallback<HTMLElement>;
};
export declare function useWheelScrollIsolation<E extends HTMLElement>(): React.Ref<E>;
