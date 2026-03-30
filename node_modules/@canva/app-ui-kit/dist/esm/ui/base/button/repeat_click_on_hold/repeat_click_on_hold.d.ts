import * as React from 'react';
export declare const SLOW_REPEAT_DELAY = 450;
export declare const FAST_REPEAT_DELAY = 350;
export declare const SLOW_REPEAT_INTERVAL = 100;
export declare const FAST_REPEAT_INTERVAL = 40;
export type RepeatClickOnHoldProps = {
    speed?: 'slow' | 'fast' | 'none'
    disabled?: boolean
    onClick?: React.MouseEventHandler<unknown>
};
export type InteractionHandlers = {
    onClick?: React.MouseEventHandler
    onPointerDown?: React.PointerEventHandler
    onPointerUp?: React.PointerEventHandler
    onPointerLeave?: React.PointerEventHandler
    onContextMenu?: React.MouseEventHandler
};
export type WithRepeatClickOnHoldProps = RepeatClickOnHoldProps & {
    children: WithRepeatClickOnHoldRenderer
};
export type WithRepeatClickOnHoldRenderer = (props: InteractionHandlers) => React.ReactNode;
export declare function WithRepeatClickOnHold(props: WithRepeatClickOnHoldProps): React.ReactNode;
export declare function useRepeatClickOnHold({ speed, disabled, onClick, }: RepeatClickOnHoldProps): InteractionHandlers;
