import type * as React from 'react';
export type TraverseHandle = {
    closest: HTMLElement['closest'];
    compareDocumentPosition: HTMLElement['compareDocumentPosition'];
    contains: HTMLElement['contains'];
    ownerDocument: HTMLElement['ownerDocument'];
};
export declare function createTraverseHandle<T extends TraverseHandle>(ref: React.RefObject<T | null>): TraverseHandle;
