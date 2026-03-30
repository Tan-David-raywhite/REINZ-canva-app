import type * as mobxUtils from 'mobx-utils';
import { DragHandler } from './drag_handler';
export declare class MouseTracker {
    private readonly drag;
    private readonly onStopped;
    private readonly browserDocument;
    readonly type: "mouse";
    private simulateMoveSubscription?;
    constructor(drag: DragHandler, simulateMove: mobxUtils.IObservableStream<unknown> | undefined, onStopped: () => void, browserDocument?: Window['document']);
    stop(): void;
    private onMouseMove;
    private onMouseUp;
    private readonly onSimulateMove;
}
