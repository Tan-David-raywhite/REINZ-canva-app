import type * as React from 'react';
export type ScrollHandle = {
    scrollBy: HTMLElement['scrollBy'];
    scrollHeight: HTMLElement['scrollHeight'];
    scrollIntoView: HTMLElement['scrollIntoView'];
    scrollLeft: HTMLElement['scrollLeft'];
    scrollTo: HTMLElement['scrollTo'];
    scrollTop: HTMLElement['scrollTop'];
    scrollWidth: HTMLElement['scrollWidth'];
};
export declare function createScrollHandle<T extends ScrollHandle>(ref: React.RefObject<T | null>): ScrollHandle;
