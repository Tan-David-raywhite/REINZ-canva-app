import type { GestureElement, Pointer } from './recognizer';
export declare class MouseTracker {
    private readonly element;
    private readonly onPointerDown;
    private readonly onPointerMove;
    private readonly onPointerUp;
    readonly type: 'mouse';
    constructor(element: GestureElement, onPointerDown: (pointer: Pointer) => void, onPointerMove: (pointer: Pointer) => void, onPointerUp: (pointer: Pointer) => void);
    disconnect(): void;
    private stop;
    private readonly onMouseDown;
    private readonly onMouseMove;
    private readonly onMouseUp;
}
