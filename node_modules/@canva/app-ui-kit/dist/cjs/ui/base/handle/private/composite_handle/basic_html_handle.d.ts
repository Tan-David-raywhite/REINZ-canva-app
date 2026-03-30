import type * as React from 'react';
import type { DOMElementHandle } from '../extended_functionality_handle/dom_element_handle';
import type { FocusHandle } from '../html_element_handle/focus_handle';
import type { LayoutHandle } from '../html_element_handle/layout_handle';
import type { NodeHandle } from '../html_element_handle/node_handle';
import type { ScrollHandle } from '../html_element_handle/scroll_handle';
import type { TraverseHandle } from '../html_element_handle/traverse_handle';
export type BasicHTMLHandle = DOMElementHandle & FocusHandle & LayoutHandle & NodeHandle & ScrollHandle & TraverseHandle;
export declare function createBasicHTMLHandle<T extends HTMLElement>(ref: React.RefObject<T | null>): BasicHTMLHandle;
