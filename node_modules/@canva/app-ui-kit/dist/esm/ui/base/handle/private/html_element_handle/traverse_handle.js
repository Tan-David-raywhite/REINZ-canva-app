import { createHTMLElementHandle } from './create_handle';
export function createTraverseHandle(ref) {
    return createHTMLElementHandle(ref, 'closest', 'contains', 'compareDocumentPosition', 'ownerDocument');
}
