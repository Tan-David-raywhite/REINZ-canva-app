import type { GestureElement } from '../../../../gestures/recognizer';
import type { GestureHandle } from '../../../../handle/handle';
import type { ResizeControls } from './resize';
export type UseDragOptions = {
    resizeControls: ResizeControls
};
export declare function useDrag({ resizeControls }: UseDragOptions): {
    dragRef: ((elementOrHandle: GestureElement | GestureHandle | null) => void) | undefined;
};
