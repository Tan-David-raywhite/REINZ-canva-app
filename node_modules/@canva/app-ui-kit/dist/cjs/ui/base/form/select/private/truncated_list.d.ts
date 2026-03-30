import * as React from 'react';
type TruncatedListOptions = {
    items: string[]
    joiner?: string
    renderOverflowText?: (overflow: number) => string
};
export declare function useTruncatedList<T extends HTMLElement, U extends HTMLElement = T, V extends HTMLElement = T>({ items, joiner, renderOverflowText, }: TruncatedListOptions): {
    containerRef: React.RefObject<T | null>;
    itemsTextRef: React.RefObject<U | null>;
    overflowTextRef: React.RefObject<V | null>;
    itemsText: string;
    overflowText: string;
};
type TruncatedListProps = TruncatedListOptions & {
    tagName?: 'div' | 'span'
};
export declare const TruncatedList: React.ComponentType<TruncatedListProps>;
export {};
