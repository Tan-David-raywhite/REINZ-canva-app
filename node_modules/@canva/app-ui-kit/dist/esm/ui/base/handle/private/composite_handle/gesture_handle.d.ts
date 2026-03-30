import type * as React from 'react';
import type { DOMElementHandle } from '../extended_functionality_handle/dom_element_handle';
import type { TraverseHandle } from '../html_element_handle/traverse_handle';
export type GestureHandle = DOMElementHandle<HTMLElement | SVGElement> & TraverseHandle;
export declare function createGestureHandle<T extends HTMLElement>(ref: React.RefObject<T | null>): GestureHandle;
