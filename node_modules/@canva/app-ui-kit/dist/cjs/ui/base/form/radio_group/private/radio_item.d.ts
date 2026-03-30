import * as React from 'react';
import type { BasicHTMLHandle } from '../../../handle/handle';
export type RadioItemHandle = BasicHTMLHandle;
export type RadioItemProps<T> = {
    label: React.ReactNode
    description?: string
    value?: T
    disabled?: boolean
    checked?: boolean
    className?: string
    name?: string
    ariaLabel?: string
    ref?: React.RefObject<RadioItemHandle | null>
    onChange?(value: T, event: React.ChangeEvent): void
    onFocus?: React.FocusEventHandler
    onBlur?: React.FocusEventHandler
};
export declare function RadioItem<T>(
 { label, description, className, disabled, checked, ariaLabel, name, value, onChange: _onChange, onFocus, onBlur, ref, }: RadioItemProps<T>
): React.ReactNode;
