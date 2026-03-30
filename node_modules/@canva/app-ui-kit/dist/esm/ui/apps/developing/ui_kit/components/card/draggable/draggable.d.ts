import * as React from 'react';
import type { InternalCardProps } from '../internal_card';
export type DraggableChildProps = InternalCardProps & {
    onDragEnd: React.DragEventHandler;
};
export declare const Draggable: ({ onDragStart, loading, children, }: {
    onDragStart?: React.DragEventHandler;
    loading?: boolean;
    children: (props: DraggableChildProps) => React.ReactElement<InternalCardProps>;
}) => React.JSX.Element;
