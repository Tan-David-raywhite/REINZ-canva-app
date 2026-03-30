import { createHTMLElementHandle } from './create_handle';
export function createFocusHandle(ref) {
    return createHTMLElementHandle(ref, 'focus', 'blur');
}
