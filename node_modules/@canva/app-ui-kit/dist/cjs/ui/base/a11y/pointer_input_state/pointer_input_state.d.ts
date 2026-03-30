import * as React from 'react';
export type PointerInput = 'mouse' | 'touch' | 'pen';
interface PointerInputState {
    readonly isTouchInput: boolean
    readonly isMouseInput: boolean
    readonly isPenInput: boolean
    readonly isHoveringInput: boolean
}
export declare const pointerInputState: PointerInputState;
export declare function useIsTouchInput(): boolean;
export declare function useIsMouseInput(): boolean;
export declare function useIsPenInput(): boolean;
export declare function useIsHoveringInput(): boolean;
export type WithIsHoveringInputProps = {
    children: (hoverSupported: boolean) => React.ReactNode
};
export declare const WithIsHoveringInput: (props: WithIsHoveringInputProps) => React.ReactNode;
export {};
