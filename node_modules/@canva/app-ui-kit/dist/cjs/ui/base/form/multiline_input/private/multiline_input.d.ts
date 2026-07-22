import * as React from 'react';
import type { MultilineInputFieldProps } from './multiline_input_field';
export type MultilineInputProps = Omit<MultilineInputFieldProps, 'onChange'> & {
    borderless?: boolean
    resize?: boolean
    size?: 'medium' | 'large'
    footer?: React.ReactNode
    className?: string
    inputClassName?: string
    disabled?: boolean
    error?: boolean
    onChange?: (value: string, event?: React.ChangeEvent<HTMLTextAreaElement>) => void
};
export declare const MultilineInput: React.ComponentType<MultilineInputProps>;
