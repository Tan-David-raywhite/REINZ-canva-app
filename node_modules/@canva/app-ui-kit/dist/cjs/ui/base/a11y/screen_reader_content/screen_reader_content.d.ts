import * as React from 'react';
export declare const visuallyHiddenClass: string;
export declare function useVisuallyHidden(): {
    className: string;
};
export type ScreenReaderContentProps = {
    children?: any
    ariaLive?: 'off' | 'assertive' | 'polite'
    ariaAtomic?: boolean
    asLabelTextOnly?: boolean
    ariaRelevant?: React.AriaAttributes['aria-relevant']
    id?: string
    tagName?: 'div' | 'span' | 'p'
    role?: 'status' | 'log' | 'alert' | 'timer'
};
export declare function useWindow(): Pick<Window, 'document'> | undefined;
export declare const ScreenReaderContent: ({ children, ariaLive, ariaAtomic, asLabelTextOnly, ariaRelevant, id, tagName: TagName, role, }: ScreenReaderContentProps) => React.JSX.Element | null;
