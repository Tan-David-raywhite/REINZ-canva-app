import type { PanEvent } from './pan_recognizer';
import type { PointerState, Recognizer, TouchAction } from './recognizer';
export interface PinchEvent extends PanEvent {
    scale: number;
    rotation: number;
}
export declare class PinchRecognizer implements Recognizer {
    private readonly opts;
    private state?;
    readonly shouldDisableTextSelect = true;
    constructor(opts: {
        onStart?(e: PinchEvent): boolean | undefined | void;
        onMove?(e: PinchEvent): boolean | undefined | void;
        onEnd?(e: PinchEvent): boolean | undefined | void;
    });
    getBrowserHandledTouchActions(): TouchAction[];
    onPointerDown(pointer: PointerState, allPointers: Map<string, PointerState>): void;
    onPointerMove(pointers: PointerState[], allPointers: Map<string, PointerState>): void;
    onPointerUp(pointer: PointerState, allPointers: Map<string, PointerState>): void;
    onUnmount(allPointers: Map<string, PointerState>): void;
    private checkPointerState;
}
