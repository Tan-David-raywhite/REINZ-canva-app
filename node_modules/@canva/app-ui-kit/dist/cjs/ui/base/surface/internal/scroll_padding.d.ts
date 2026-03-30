import * as React from 'react';
type ScrollPaddingRefs = {
    containerRef: React.Ref<HTMLDivElement>;
    headerRef: React.Ref<HTMLDivElement>;
    footerRef: React.Ref<HTMLDivElement>;
};
export declare function useScrollPaddingRefs(): ScrollPaddingRefs;
export {};
