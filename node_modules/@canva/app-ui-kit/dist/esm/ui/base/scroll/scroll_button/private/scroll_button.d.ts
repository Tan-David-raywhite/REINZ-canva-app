import * as React from 'react';
import type { ButtonHandle, CircleButtonProps } from '../../../button/button';
type ScrollButtonDirection = 'forward' | 'backward';
export type ScrollButtonPosition = 'bounded' | 'detached';
export type ScrollButtonProps = {
    onClick(): void
    position?: ScrollButtonPosition
    atStart: boolean
    atEnd: boolean
    direction: ScrollButtonDirection
    scrollableId: string
    ariaLabel?: string
    ariaLabelledBy?: string
    buttonHandle?: React.RefObject<ButtonHandle | null>
    oppositeButtonHandle?: React.RefObject<ButtonHandle | null>
};
export type ScrollButtonAriaLabelProps = {
    ariaLabelledBy?: string
    ariaLabel?: string
};
export type ComposedScrollButtonAriaLabel = {
    ariaLabelledBy?: string;
    ariaLabel?: string;
    hiddenLabelElement?: React.ReactNode;
};
export declare function useScrollButtonAriaLabel(
 parentAriaLabelProps: ScrollButtonAriaLabelProps,
 direction: 'forward' | 'backward'
): ComposedScrollButtonAriaLabel;
export type ProminentScrollButtonProps = ScrollButtonProps & {
    size?: Extract<CircleButtonProps['size'], 'small' | 'medium' | 'large'>
    offsetY?: number
    offsetX?: number
};
export declare const ProminentScrollButton: React.ComponentType<ProminentScrollButtonProps>;
export type SubtleScrollButtonProps = ScrollButtonProps & {
    offsetY?: number
};
export declare const SubtleScrollButton: React.ComponentType<SubtleScrollButtonProps>;
export {};
