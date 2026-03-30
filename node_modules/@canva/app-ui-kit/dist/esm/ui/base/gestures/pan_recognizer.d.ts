import type { GestureEvent, Pointer, PointerState, Recognizer, TouchAction } from './recognizer';
export interface PanEvent extends GestureEvent {
    velocityX: number
    velocityY: number
    velocity: number
    distanceX: number
    distanceY: number
    distance: number;
    direction: Direction;
    button?: number
}
export declare class PanRecognizer implements Recognizer {
    readonly opts: {
        readonly minDistance?: number
        readonly direction?: Direction
        readonly activePointers?: ('touch' | 'mouse_main' | 'mouse_middle' | 'mouse_secondary')[]
        onStart?(e: PanEvent): void;
        onMove?(e: PanEvent): void;
        onEnd?(e: PanEvent): void;
        onUnrecognizedEnd?(e: PanEvent): void
    };
    private state?;
    readonly activePointers: ('touch' | 'mouse_main' | 'mouse_middle' | 'mouse_secondary')[];
    readonly shouldDisableTextSelect = true;
    constructor(opts: {
        readonly minDistance?: number
        readonly direction?: Direction
        readonly activePointers?: ('touch' | 'mouse_main' | 'mouse_middle' | 'mouse_secondary')[]
        onStart?(e: PanEvent): void;
        onMove?(e: PanEvent): void;
        onEnd?(e: PanEvent): void;
        onUnrecognizedEnd?(e: PanEvent): void
    });
    getBrowserHandledTouchActions(): TouchAction[];
    onPointerDown(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerUp(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerMove(pointers: PointerState[], allPointers: ReadonlyMap<string, PointerState>): void;
    onUnmount(): void;
    private checkState;
    private shouldStart;
    private checkDirection;
}
export declare function getPanEventProperties(pointer: Pointer, start: Pick<Pointer, 'x' | 'y' | 'timestamp' | 'button'>, current: Pick<Pointer, 'x' | 'y' | 'timestamp'>): PanEvent;
export type Direction = 'none' | 'left' | 'right' | 'up' | 'down' | 'horizontal' | 'vertical';
export declare function getDirection(distanceX: number, distanceY: number): Direction;
