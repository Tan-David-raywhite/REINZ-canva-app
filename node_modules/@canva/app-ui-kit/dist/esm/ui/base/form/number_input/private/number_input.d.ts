import * as React from 'react';
import type { BaseInputProps, InputDecoration } from '../../base_input/base_input';
export type IsValidCharacterFn = (character: string) => boolean;
export type NumberInputProps = Omit<BaseInputProps, 'type' | 'value' | 'defaultValue' | 'min' | 'max' | 'onChange' | 'onChangeComplete' | 'inputMode' | 'start' | 'end'> & {
    value?: string | number
    defaultValue?: number
    min?: number
    max?: number
    onChange?(valueAsNumber: number | undefined, valueAsString: string): void
    onChangeComplete?(value: number | undefined): void
    isValidCharacter?: IsValidCharacterFn
    maximumFractionDigits?: number
} & SpinButtonRelatedProps;
type SpinButtonRelatedProps = {
    hasSpinButtons: true
    decrementAriaLabel: string
    incrementAriaLabel: string
    start?: never;
    end?: never;
} | {
    hasSpinButtons?: false
    start?: InputDecoration
    end?: InputDecoration
    decrementAriaLabel?: never;
    incrementAriaLabel?: never;
};
export declare function NumberInput(
 { value: valueProp, defaultValue, onChange: onChangeProp, onChangeComplete: onChangeCompleteProp, onKeyDown: onKeyDownProp, step, min, max, maximumFractionDigits, isValidCharacter: isValidCharacterProp, hasSpinButtons, decrementAriaLabel, incrementAriaLabel, ref, className: classNameProp, size, ...passThroughProps }: NumberInputProps
): React.ReactNode;
export declare const isNonNegativeIntegerCharacter: IsValidCharacterFn;
export declare const isIntegerCharacter: IsValidCharacterFn;
export declare const isNonNegativeDecimalCharacter: IsValidCharacterFn;
export declare const isDecimalCharacter: IsValidCharacterFn;
export declare const isValidNumericKeyboardEvent: (e: React.KeyboardEvent<HTMLInputElement>, isValidCharacter: IsValidCharacterFn, value?: string, selectionStart?: number) => boolean;
export declare const convertFullWidthNumerics: (text: string) => string;
export declare const getFractionDigits: (value: number) => number;
export declare const getRoundedNumberValue: (value: string | number | undefined, maximumFractionDigits: number) => number | undefined;
export declare const snapToStep: (value: number, step: number, min?: number, max?: number) => number;
export {};
