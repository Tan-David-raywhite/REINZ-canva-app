import { createDOMElementHandle } from '../extended_functionality_handle/dom_element_handle';
import { createTraverseHandle } from '../html_element_handle/traverse_handle';
import { composeHandles } from './compose_handles';
export function createGestureHandle(ref) {
    return composeHandles(createDOMElementHandle(ref), createTraverseHandle(ref));
}
