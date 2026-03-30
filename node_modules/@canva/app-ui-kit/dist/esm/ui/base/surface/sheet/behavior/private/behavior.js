import { Preconditions } from '../../../../../../base/preconditions';
import { composeRefs } from '../../../../../../base/react/compose_refs';
import * as React from 'react';
import { useDrag } from './drag';
import { useResize } from './resize';
import { useScrollPan } from './scroll_pan';
import { useResolvedSnapPoints } from './snap_points';
import { useTouchScroll, useTouchScrollIsolation } from './touch_scroll';
import { useWheelScroll, useWheelScrollIsolation } from './wheel_scroll';
export function useSheetControls(
    { snapPoints, snapPointIndex, setSnapPointIndex, getScrollHeight, setOffset }
) {
    const { snapPointControls } = useResolvedSnapPoints({
        snapPoints,
        getScrollHeight
    });
    const { resizing, resizeControls } = useResize({
        snapPointControls,
        snapPointIndex,
        setSnapPointIndex,
        setOffset
    });
    return {
        resizing,
        controls: {
            resizeControls,
            snapPointControls,
            snapPoints,
            snapPointIndex
        }
    };
}
export function useSheetDrag({ controls }) {
    return useDrag({
        resizeControls: controls.resizeControls
    });
}
export function useSheetScroll({ controls, scrollToResizeBelow }) {
    const maxPanIndex = scrollToResizeBelow && controls.snapPoints.findIndex((snapPoint)=>snapPoint.type === scrollToResizeBelow.type && snapPoint.height === scrollToResizeBelow.height);
    Preconditions.checkArgument(maxPanIndex !== -1);
    const scrollPanRef = React.useRef(null);
    const { panControls } = useScrollPan({
        resizeControls: controls.resizeControls,
        snapPointControls: controls.snapPointControls,
        isContentScrolled: ()=>scrollPanRef.current?.scrollTop !== 0,
        snapPointIndex: controls.snapPointIndex,
        maxPanIndex
    });
    const { wheelRef } = useWheelScroll({
        panControls
    });
    const { touchScrollRef } = useTouchScroll({
        panControls
    });
    return {
        contentRef: composeRefs(scrollPanRef, wheelRef, touchScrollRef)
    };
}
export function useSheetScrollIsolation() {
    return composeRefs(useWheelScrollIsolation(), useTouchScrollIsolation());
}
