import * as React from 'react';
import type { BaseSelectProps } from './base_select';
import type { AreEqualFn, GetLabelFn, IsSelectedFn, SelectOption } from './base_select_util';
import type { BaseSelectMenuProps } from './stateless_base_select';
export type BaseComboSelectProps<T extends string> = Omit<BaseSelectProps<T>, 'value' | 'placeholder' | 'onChange' | 'searchable' | 'Menu'> & {
    value?: T
    placeholder?: T
    onChange?: (value: T, e?: React.ChangeEvent<HTMLInputElement>) => void
    filterFn?: FilterFn<T>
    areEqual?: AreEqualFn<string>
    isSelected?: IsSelectedFn<string>
    getLabel?: GetLabelFn<string>
    Menu?: React.ComponentType<BaseSelectMenuProps<string>>
};
type FilterFn<T extends string> = (value: T, options: SelectOption<T>[]) => SelectOption<T>[];
export declare class BaseComboSelect extends React.Component<BaseComboSelectProps<string>> {
    private readonly presenter;
    private readonly store;
    get value(): string | undefined;
    private readonly onInputChange;
    private readonly onSelectChange;
    private readonly Trigger;
    private readonly Item;
    render(): React.JSX.Element;
}
export {};
