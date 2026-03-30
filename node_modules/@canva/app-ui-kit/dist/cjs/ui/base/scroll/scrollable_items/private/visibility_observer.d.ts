import * as React from 'react';
export type VisibilityContextType = {
    observer?: IntersectionObserver;
    callbacks?: WeakMap<Element, (isVisible: boolean) => void>;
};
export declare function useVisibilityObserver<T extends HTMLElement = HTMLElement>(
    { onVisibilityChange, }: {
        onVisibilityChange?: (isVisible: boolean) => void
    }
): {
    ref: React.Ref<T>;
};
export declare function VisibilityRoot(
    { children, disable, }: {
        children: (props: {
            ref: React.Ref<HTMLDivElement | null>;
        }) => React.ReactElement
        disable?: boolean
    }
): React.ReactElement;
