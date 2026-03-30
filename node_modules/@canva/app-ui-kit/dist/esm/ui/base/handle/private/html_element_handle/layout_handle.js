import { createHTMLElementHandle } from './create_handle';
export function createLayoutHandle(ref) {
    return createHTMLElementHandle(ref, 'getBoundingClientRect', 'clientHeight', 'clientWidth', 'offsetHeight', 'offsetLeft', 'offsetTop', 'offsetWidth');
}
