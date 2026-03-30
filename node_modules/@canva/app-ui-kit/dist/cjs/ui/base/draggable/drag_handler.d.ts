import type { ClientPosition } from './client_position';
import type { DragEvent, Modifiers } from './draggable';
export type DragCallbacks = {
    readonly onDragStart: (e: DragEvent) => void;
    readonly onDragMove: (e: DragEvent) => void;
    readonly onDragEnd: (e: DragEvent) => void;
    readonly onDragKeyChange: (e: DragEvent) => void;
};
export declare class DragHandler {
    private readonly initialPosition;
    private readonly callbacks;
    private readonly holdToDrag;
    private readonly didStart?;
    private readonly willStop?;
    private cancelled;
    private started_;
    private currentPosition_;
    private modifiers_;
    private holdTimer;
    constructor(initialPosition: ClientPosition, callbacks: DragCallbacks, holdToDrag: 'default' | 'short' | 'off', didStart?: (() => void) | undefined, willStop?: (() => void) | undefined);
    static modifiersFromEvent(evt: Modifiers): Modifiers;
    get started(): boolean;
    get currentPosition(): ClientPosition;
    get modifiers(): Modifiers;
    forceStart(): void;
    stop(): void;
    updateAndMayStart(pos: ClientPosition, modifiers: Modifiers): void;
    handleMove(pos: ClientPosition, modifiers: Modifiers): void;
    private readonly onKeyChange;
}
