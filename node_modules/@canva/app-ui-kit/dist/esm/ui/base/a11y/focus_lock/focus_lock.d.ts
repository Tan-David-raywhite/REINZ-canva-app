import * as React from 'react';
import type { KeyCombinationMap } from '../../key_combinations/key_combinations';
export type FocusLockProps = {
    ref?: React.Ref<HTMLDivElement>
    autoFocus?: boolean
    children: React.ReactNode
    className?: string
    disabled?: boolean
    lockProps?: Omit<React.HTMLAttributes<HTMLDivElement>, 'className'>
    returnFocus?: boolean
    preventScroll?: 'never' | 'on-autofocus' | 'always'
    makeContainerFocusable?: boolean
    onRequestEscape?(): void
    keyCombinationMap?: KeyCombinationMap
    handleKeysOnInputs?: boolean
};
export declare const FocusLock: React.ComponentType<FocusLockProps>;
