import type { GestureElement, Pointer } from './recognizer';
export declare class PointerTracker {
    private mouseTracker;
    private touchTracker;
    private readonly recentTouchEvents;
    constructor(element: GestureElement, onPointerDown: (pointer: Pointer) => void, onPointerMove: (pointer: Pointer) => void, onPointerUp: (pointer: Pointer) => void, onPointerCancel: (pointer: Pointer) => void);
    private onTouchEvent;
    private onMouseEvent;
    private isSynthetic;
    disconnect(): void;
}
