import { createHTMLElementHandle } from './create_handle';
export function createScrollHandle(ref) {
    return createHTMLElementHandle(ref, 'scrollBy', 'scrollHeight', 'scrollIntoView', 'scrollLeft', 'scrollTo', 'scrollTop', 'scrollWidth');
}
