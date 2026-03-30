import * as React from 'react';
import type { BaseInputProps } from '../../base_input/base_input';
export type TextInputProps = Omit<BaseInputProps, 'type' | 'min' | 'max' | 'step'> & {
    type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url'
    clearable?: 'never' | 'auto'
};
export declare function TextInput(props: TextInputProps): React.ReactNode;
export type PasswordAutoComplete = 'current-password' | 'new-password' | 'off';
