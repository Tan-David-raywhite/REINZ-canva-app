export type PointerType = 'touch' | 'mouse';
export type GestureElement = HTMLElement | SVGElement;
export interface Pointer {
    readonly timestamp: number
    readonly button?: number
    readonly target: GestureElement
    readonly currentTarget: GestureElement
    readonly id: string;
    readonly x: number;
    readonly y: number;
    readonly pointerType: PointerType;
    readonly sourceEvent: MouseEvent | TouchEvent;
}
export type PointerState = {
    start: Pointer;
    previous: Pointer;
    current: Pointer;
};
export type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-y' | 'pinch-zoom';
export interface Recognizer {
    shouldDisableTextSelect?: boolean;
    onPointerDown(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerMove?(pointers: readonly PointerState[], allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerUp(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    onPointerCancel?(pointer: PointerState, allPointers: ReadonlyMap<string, PointerState>): void;
    getBrowserHandledTouchActions(): TouchAction[];
    onUnmount?(allPointers: ReadonlyMap<string, PointerState>): void;
}
export declare function getCommonEventProperties(pointer: Pointer, center?: Pick<Pointer, 'x' | 'y'>): GestureEvent;
export interface GestureEvent {
    readonly target: GestureElement
    readonly currentTarget: GestureElement
    readonly centerX: number;
    readonly centerY: number;
    readonly altKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly shiftKey: boolean;
    readonly pointerType: PointerType;
    readonly nativeEvent: MouseEvent | TouchEvent;
}
