import { DragHandler } from './drag_handler';
export declare class TouchTracker {
    private readonly drag;
    private readonly holdToDrag;
    private readonly onStopped;
    readonly type: "touch";
    private readonly identifier;
    private readonly target;
    constructor(drag: DragHandler, touch: {
        identifier: number;
        target: EventTarget;
    }, holdToDrag: boolean, onStopped: () => void);
    stop(): void;
    private getChangedTouch;
    private onTouchStart;
    private onTouchMove;
    private onTouchEnd;
}
