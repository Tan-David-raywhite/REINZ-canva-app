import * as React from 'react';
import type { ButtonHandle } from '../../../button/button';
export type InputPillMaxWidth = '25u' | '100%';
export type InputPillHandle = ButtonHandle;
export type InputPillProps = {
    text: string
    tone?: 'secondary' | 'warn' | 'critical'
    disabled?: boolean
    maxWidth?: InputPillMaxWidth
    onRemoveClick?(): void
    ref?: React.RefObject<InputPillHandle | null>
    start?: React.ReactNode | (() => React.ReactNode)
};
export declare function InputPill(
 { text, tone, disabled, maxWidth, start, onRemoveClick, ref, }: InputPillProps
): React.ReactNode;
