import * as React from 'react';
import { Breakpoint } from '../../metrics/metrics';
import { breakpointStore } from './breakpoint_store';
import { resolveResponsiveObject } from './responsive';
export function useResponsiveValue(value) {
    return React.useSyncExternalStore(breakpointStore.subscribe, ()=>resolveResponsiveObject(value, breakpointStore.getSnapshot()), ()=>resolveResponsiveObject(value, breakpointStore.getServerSnapshot()));
}
export function useBreakpoint() {
    return useResponsiveValue({
        default: Breakpoint.DEFAULT,
        smallUp: Breakpoint.SMALL,
        mediumUp: Breakpoint.MEDIUM,
        largeUp: Breakpoint.LARGE,
        xLargeUp: Breakpoint.XLARGE
    });
}
