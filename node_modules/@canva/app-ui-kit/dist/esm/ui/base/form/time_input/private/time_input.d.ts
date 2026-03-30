import * as React from 'react';
import type { TimeZone } from '../../../date_time/utils/utils';
import type { BaseInputProps } from '../../base_input/base_input';
export type TimeInputProps = Omit<BaseInputProps, 'type' | 'value' | 'onChange' | 'placeholder' | 'min' | 'max' | 'end'> & {
    value?: number
    onChange?: (value: number | undefined) => void
    min?: number
    max?: number
    timezone?: TimeZone
    locale?: string
    end?: React.ReactNode
};
export declare function TimeInput(
 { value: valueProp, onChange: onChangeProp, min, max, className, timezone, locale, end, ...passThroughProps }: TimeInputProps
): React.ReactNode;
