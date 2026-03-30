import type * as React from 'react';
export declare function createHTMLElementHandle<T extends Partial<HTMLElement>, K extends keyof T>(ref: React.RefObject<T | null>, ...args: K[]): Pick<T, K>;
