import * as React from 'react';
import type { ButtonHandle } from '../../../button/button';
import type { GridColumn } from '../../../layout/layout';
import type { RadioItemHandle } from './radio_item';
export type RadioGroupHandle = ButtonHandle & RadioItemHandle;
export type RadioGroupProps<T> = {
    readonly value?: T
    readonly defaultValue?: T
    readonly options: readonly RadioOption<T>[]
    readonly className?: string
    readonly name?: string
    readonly disabled?: boolean
    readonly variant?: 'radio' | 'button'
    id?: string
    readonly itemsPerRow?: GridColumn
    ref?: React.RefObject<RadioGroupHandle | null>
} & RadioGroupA11yProps & RadioGroupEventHandlerProps<T>;
type RadioGroupA11yProps = {
    readonly ariaLabel?: string
    readonly ariaLabelledBy?: string
    readonly ariaDescribedBy?: string
};
type RadioGroupEventHandlerProps<T> = {
    onChange?(value: T, event?: React.ChangeEvent | React.MouseEvent<HTMLElement>): void
    onFocus?: React.FocusEventHandler
    onBlur?: React.FocusEventHandler
};
export type RadioOption<T> = {
    label: React.ReactNode
    description?: string
    ariaLabel?: string
    value: T
    disabled?: boolean
    className?: string
};
export declare function RadioGroup<T>(props: RadioGroupProps<T>): React.ReactElement;
export {};
