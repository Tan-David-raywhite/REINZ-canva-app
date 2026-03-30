import type { Pointer, PointerState, TouchAction } from './recognizer';
export declare function manuallyApplyTouchAction(
 browserHandledTouchActions: Set<TouchAction>,
 pointer: Pointer,
 allPointers: Map<string, PointerState>
): void;
