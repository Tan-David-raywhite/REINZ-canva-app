import type * as React from 'react';
export type DOMElementHandle<T extends Element | DOMElementHandle = HTMLElement> = {
    dangerouslyGetElement: () => T | null
};
export declare function createDOMElementHandle<T extends Element = HTMLElement>(ref: React.RefObject<T | DOMElementHandle<T> | null>): DOMElementHandle<T>;
export declare function dangerouslyGetElement<T extends Element>(elementOrHandle: T | DOMElementHandle<T> | null): T | null;
export declare function dangerouslyGetHTMLElement<T extends Element = HTMLElement>(elementOrHandle: T | DOMElementHandle<T> | null): T | null;
export declare function convertElementToHandleRef<HandleT extends DOMElementHandle<ElementT>, ElementT extends HTMLElement = HTMLElement>(elementRef?: React.Ref<ElementT>): React.RefCallback<HandleT> | undefined;
