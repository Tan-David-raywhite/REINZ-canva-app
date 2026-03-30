import type * as React from 'react';
export type NodeHandle = {
    nodeName: HTMLElement['nodeName'];
    nodeType: HTMLElement['nodeType'];
    nodeValue: HTMLElement['nodeValue'];
    tagName: HTMLElement['tagName'];
};
export declare function createNodeHandle<T extends NodeHandle>(ref: React.RefObject<T | null>): NodeHandle;
