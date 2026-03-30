import type * as React from 'react';
export type LayoutHandle = {
    getBoundingClientRect: Element['getBoundingClientRect'];
    clientHeight: HTMLElement['clientHeight'];
    clientWidth: HTMLElement['clientWidth'];
    offsetHeight: HTMLElement['offsetHeight'];
    offsetLeft: HTMLElement['offsetLeft'];
    offsetTop: HTMLElement['offsetTop'];
    offsetWidth: HTMLElement['offsetWidth'];
};
export declare function createLayoutHandle<T extends LayoutHandle>(ref: React.RefObject<T | null>): LayoutHandle;
