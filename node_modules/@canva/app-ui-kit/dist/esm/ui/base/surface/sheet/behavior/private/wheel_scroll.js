import { debounce } from '../../../../../../base/debounce';
import * as React from 'react';
import { useRefEffect } from '../../../internal/ref_effect';
import { markAsIsolated, useStableIsolatableListener } from './isolate';
const WHEEL_DEBOUNCE = 140;
function normalizeWheelDelta(deltaMode, delta) {
    const WHEEL_MULTIPLIERS = new Map([
        [
            WheelEvent.DOM_DELTA_LINE,
            40
        ],
        [
            WheelEvent.DOM_DELTA_PAGE,
            800
        ]
    ]);
    return delta * (WHEEL_MULTIPLIERS.get(deltaMode) ?? 1);
}
export function useWheelScroll({ panControls }) {
    const wheelActive = React.useRef(false);
    const endPan = panControls.end;
    const onWheelEnd = React.useMemo(()=>{
        return debounce(()=>{
            wheelActive.current = false;
            endPan();
        }, WHEEL_DEBOUNCE);
    }, [
        endPan
    ]);
    const onWheel = useStableIsolatableListener((event)=>{
        if (!wheelActive.current) {
            wheelActive.current = true;
            panControls.start();
        }
        const delta = normalizeWheelDelta(event.deltaMode, event.deltaY);
        const allowScroll = panControls.update(delta);
        if (!allowScroll && event.cancelable) event.preventDefault();
        onWheelEnd();
    });
    const wheelRef = useRefEffect((element)=>{
        if (!window.WheelEvent)
        return;
        element.addEventListener('wheel', onWheel);
        return ()=>{
            element.removeEventListener('wheel', onWheel);
        };
    });
    return {
        wheelRef
    };
}
export function useWheelScrollIsolation() {
    return useRefEffect((element)=>{
        element.addEventListener('wheel', markAsIsolated);
        return ()=>element.removeEventListener('wheel', markAsIsolated);
    });
}
