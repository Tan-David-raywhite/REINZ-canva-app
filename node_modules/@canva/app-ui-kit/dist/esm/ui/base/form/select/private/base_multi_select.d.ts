import * as React from 'react';
import type { BaseSelectProps } from './base_select';
import { BaseSelectStore } from './base_select_presenter';
declare const selectAllValue: unique symbol;
export declare class BaseMultiSelectStore<T> extends BaseSelectStore<T> {
    value?: T[];
}
export type SelectAll = typeof selectAllValue;
export type BaseMultiSelectProps<T> = Omit<BaseSelectProps<T | SelectAll>, 'value' | 'store' | 'onChange'> & {
    store?: BaseMultiSelectStore<T>
    value?: T[] | undefined
    onChange?(value: T[]): void;
    showSelectAll?: boolean
    maxSelectedOptions?: number
};
export declare class BaseMultiSelect<T> extends React.Component<BaseMultiSelectProps<T>> {
    private readonly store;
    private readonly presenter;
    get value(): T[] | undefined;
    private readonly isSelected;
    private isAllSelected;
    private getAvailableOptions;
    private getDisabledOptions;
    private readonly onSelection;
    private readonly onSelectAll;
    private readonly closeMenu;
    private readonly Trigger;
    private readonly Item;
    render(): React.JSX.Element;
}
export {};
