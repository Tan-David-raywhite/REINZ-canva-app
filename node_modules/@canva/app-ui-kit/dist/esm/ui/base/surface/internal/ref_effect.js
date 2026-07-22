import { useStableFunction } from '../../../../base/react/stable_function';
import * as React from 'react';
export function useRefEffect(effect) {
    const cleanup = React.useRef(undefined);
    return useStableFunction((target)=>{
        if (target == null && cleanup.current != null) {
            cleanup.current();
            cleanup.current = undefined;
        }
        if (target != null) cleanup.current = effect(target);
    });
}
