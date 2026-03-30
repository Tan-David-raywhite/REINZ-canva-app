import * as React from 'react';
import type { DateTimeObject, Month } from '../../../utils/utils';
export type DisableButtonsType = 'prev' | 'next' | 'both';
export type MonthsNavigationProps = {
    locale: string
    month: Month
    year: number
    onChange: (date: DateTimeObject) => void
    today?: DateTimeObject
    disabled?: DisableButtonsType
    animate: boolean
    titleId?: string
};
export declare function MonthsNavigation(props: MonthsNavigationProps): React.JSX.Element;
