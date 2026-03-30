import type * as React from 'react';
export type FocusHandle = {
    focus: HTMLElement['focus'];
    blur: HTMLElement['blur'];
};
export declare function createFocusHandle<T extends FocusHandle>(ref: React.RefObject<T | null>): FocusHandle;
