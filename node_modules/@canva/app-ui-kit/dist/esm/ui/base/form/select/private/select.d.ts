import * as React from 'react';
import type { BaseComboSelectProps } from './base_combo_select';
import type { BaseMultiSelectProps } from './base_multi_select';
import type { BaseSelectProps } from './base_select';
type SelectCommonProps = 'value' | 'options' | 'onBlur' | 'onFocus' | 'onChange' | 'placeholder' | 'stretch' | 'popoverWidth' | 'size' | 'disabled' | 'error' | 'className' | 'id' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy' | 'title' | 'tooltipLabel' | 'tooltipPlacement' | 'tooltipDisabled';
export type SelectProps<T> = ({
    type?: 'default'
} & Pick<BaseSelectProps<T>, SelectCommonProps | 'searchable'>) | ({
    type: 'multi'
} & Pick<BaseMultiSelectProps<T>, SelectCommonProps | 'searchable'>) | ({
    type: 'combobox'
} & Pick<BaseComboSelectProps<string>, SelectCommonProps>);
export declare function Select<T>(props: SelectProps<T>): React.JSX.Element;
export {};
