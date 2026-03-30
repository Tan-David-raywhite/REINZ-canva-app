import type { GestureElement, Pointer } from './recognizer';
export declare class TouchTracker {
    private readonly element;
    private readonly onPointerDown;
    private readonly onPointerMove;
    private readonly onPointerUp;
    private readonly onPointerCancel;
    private readonly trackers;
    constructor(element: GestureElement, onPointerDown: (pointer: Pointer) => void, onPointerMove: (pointer: Pointer) => void, onPointerUp: (pointer: Pointer) => void, onPointerCancel: (pointer: Pointer) => void);
    private readonly onTouchStart;
    disconnect(): void;
}
