import type { MouseEventHandler, TouchEventHandler } from 'react';
import * as React from 'react';
import type { DraggableOpts } from './draggable';
export type DragSourceProps = {
    onMouseDown: MouseEventHandler<any>
    onTouchStart: TouchEventHandler<any>
};
export type DraggableProps = DraggableOpts & {
    onMouseDown?: MouseEventHandler<any>
    onTouchStart?: TouchEventHandler<any>
    continueAfterUnmount?: boolean
    children(p: DragSourceProps): React.JSX.Element
};
export declare class DraggableView extends React.Component<DraggableProps> {
    private readonly draggable;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
    private readonly onMouseDown;
    private readonly onTouchStart;
}
