import type { IComputedValue } from 'mobx';
import type { IObservableStream } from 'mobx-utils';
import type * as React from 'react';
export type DragType = 'mouse' | 'touch';
export type DraggableOpts = Readonly<{
    cursorOverride?: IComputedValue<string>
    toggleCursorClassName?(className: string, enabled: boolean): void
    simulateDragMove?: IObservableStream<unknown>
    canDrag?(e: DragEvent): boolean
    onDragStart?(e: DragEvent, stopDrag: () => void, type: DragType): void
    onDragMove?(e: DragEvent): void
    onDragEnd?(e: DragEvent): void
    onKeyChange?(e: DragEvent): void
    holdToDrag?: {
        enabled: 'always' | 'touch-only';
        duration?: 'default' | 'short';
    };
    raf?: Window['requestAnimationFrame']
    caf?: Window['cancelAnimationFrame']
    unthrottleEvents?: boolean
    focusable?: boolean
    browserWindow?: Pick<Window, 'requestAnimationFrame' | 'cancelAnimationFrame' | 'document'>
}>;
export type Modifiers = {
    readonly shiftKey: boolean;
    readonly altKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
};
export type DragEvent = Modifiers & {
    clientX: number;
    clientY: number;
    pageX?: number;
    pageY?: number;
};
export declare class Draggable {
    private readonly opts;
    private tracker?;
    constructor(opts: DraggableOpts);
    readonly onMouseDown: React.MouseEventHandler;
    private getCursorReactionCallbacks;
    readonly onTouchStart: React.TouchEventHandler;
    private getDragCallbacks;
    private readonly onTrackerStopped;
    stopInProgressDrag(): void;
}
