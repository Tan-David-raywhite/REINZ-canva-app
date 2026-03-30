import * as React from 'react';
import type { DateObj } from '../../../date_time/utils/utils';
import type { DateTimeInputProps, ValuePropsType } from './date_time_input';
export type DateInputProps = Omit<DateTimeInputProps, 'timezone' | 'mode'> & ValuePropsType<DateObj>;
export declare function DateInput(props: DateInputProps): React.ReactNode;
