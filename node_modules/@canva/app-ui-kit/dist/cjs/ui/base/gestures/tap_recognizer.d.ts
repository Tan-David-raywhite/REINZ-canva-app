import type * as mobx from 'mobx';
import type { GestureEvent, PointerState, Recognizer, TouchAction } from './recognizer';
export type TapEvent = GestureEvent;
export declare class TapRecognizer implements Recognizer {
    private readonly opts;
    private state;
    constructor(opts: {
        onTap?(e: TapEvent): boolean | undefined | void
        disabled?: mobx.IComputedValue<boolean>
    });
    getBrowserHandledTouchActions(): TouchAction[];
    onPointerDown(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerUp(pointer: PointerState): void;
    onPointerCancel(pointer: PointerState): void;
}
