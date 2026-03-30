import * as React from 'react';
import type { LabelMarker, LabelSize } from '../../label/label';
import type { FieldValidationStore, Validator } from '../../validation/field_validation';
export type FormFieldTone = 'neutral' | 'positive' | 'info' | 'warn';
export type FormFieldProps<T> = {
    label: React.ReactNode
    labelSize?: LabelSize
    description?: React.ReactNode
    error?: React.ReactNode
    tone?: FormFieldTone
    control: (props: FormFieldControlProps<T>) => React.ReactNode
    value?: T
    name?: string
    validator?: Validator<T>
    store?: FieldValidationStore<T>
    labelMarker?: LabelMarker
    children?: (props: FormFieldLayoutProps) => React.JSX.Element
};
export type FormFieldControlProps<T> = {
    id: string
    ariaLabelledBy: string
    ariaDescribedBy: string | undefined
    error: boolean
    value: T | undefined
    onBlur: (() => void) | undefined
};
export type FormFieldLayoutProps = {
    label: React.ReactNode
    description: React.ReactNode
    error: React.ReactNode
    control: React.ReactNode
};
export declare const FormField: <T = string>(props: FormFieldProps<T>) => React.JSX.Element;
