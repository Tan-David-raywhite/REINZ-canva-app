import * as React from 'react';
export type Focusable = {
    focus: (options?: FocusOptions) => void
    blur: () => void
};
export declare function useFocusableRef<T extends HTMLElement>(ref?: React.Ref<Focusable>): React.Ref<T>;
