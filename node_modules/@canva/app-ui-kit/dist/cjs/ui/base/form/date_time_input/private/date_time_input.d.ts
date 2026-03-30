import * as React from 'react';
import type { DateObj, DateTimeObj, TimeZone } from '../../../date_time/utils/utils';
import type { BaseInputProps } from '../../base_input/base_input';
import type { DateTimePickerDecoratorProps } from './date_time_picker_decorator';
export type ValuePropsType<T> = {
    value?: T
    min?: T | 'today'
    max?: T
    onChange?: (value: T | undefined) => void
    onChangeComplete?: (value: T | undefined) => void
};
type ValueProps = ({
    mode: 'date'
} & ValuePropsType<DateObj>) | ({
    mode?: 'datetime'
} & ValuePropsType<DateTimeObj>);
export type DateTimeInputProps = Omit<BaseInputProps, 'type' | 'value' | 'onChange' | 'onChangeComplete' | 'placeholder' | 'min' | 'max' | 'end'> & ValueProps & {
    timezone?: TimeZone
    end?: React.ReactNode | ((props: Omit<DateTimePickerDecoratorProps, 'locale'>) => React.ReactNode)
};
export declare const DateTimeInput: React.ComponentType<DateTimeInputProps>;
export {};
