import type { DOMElementHandle } from '../../../handle/handle';
export type TruncatedMeasure = 'onRender' | 'onResize';
export declare function useIsTruncated(text?: string, measure?: TruncatedMeasure): {
    isTruncated: boolean
    ref?: (el: HTMLElement | DOMElementHandle | null) => void
};
