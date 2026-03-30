import { createHTMLElementHandle } from './create_handle';
export function createNodeHandle(ref) {
    return createHTMLElementHandle(ref, 'nodeName', 'nodeType', 'nodeValue', 'tagName');
}
