import type { GestureEvent, PointerState, Recognizer, TouchAction } from './recognizer';
export type PressEvent = GestureEvent;
export declare const DEFAULT_POINTER_DOWN_TIMEOUT = 251;
export declare class PressRecognizer implements Recognizer {
    private readonly opts;
    private state?;
    constructor(opts: {
        maxDistance?: number
        minTime?: number
        onStart?(e: PressEvent): boolean | undefined | void
        onEnd?(e: PressEvent): boolean | undefined | void
        onCancel?(e: PressEvent): boolean | undefined | void
    });
    getBrowserHandledTouchActions(): TouchAction[];
    onPointerDown(pointer: PointerState, allPointers: Map<string, PointerState>): void;
    onPointerMove(pointers: readonly PointerState[], allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerUp(pointer: PointerState): void;
    onUnmount(): void;
    private readonly timeout;
    private isWithinMaxDistance;
    private readonly setupEventListeners;
    private readonly clearEventListeners;
    private readonly onContextMenu;
}
