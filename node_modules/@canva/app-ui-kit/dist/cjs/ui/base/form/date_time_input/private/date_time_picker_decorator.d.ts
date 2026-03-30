import * as React from 'react';
import type { DateTimePickerProps } from '../../../date_time/date_time_picker/date_time_picker';
export type DateTimePickerDecoratorProps = DateTimePickerProps & {
    onChangeComplete: (value?: string) => void
    disabled?: boolean
    blockOutsidePointerEvents?: boolean
};
export declare const DateTimePickerDecorator: React.ComponentType<DateTimePickerDecoratorProps>;
