import { jsx as _jsx } from "react/jsx-runtime";
import { makeObservable } from '../../../../../base/make_observable/make_observable';
import { exists } from '../../../../../base/exists';
import * as mobx from 'mobx';
import * as React from 'react';
import { SurfaceHeaderTextButton } from '../../../surface/header/header';
import { getTypicalSheetAdaptation } from '../../../surface/popover/popover';
import { BaseSelect } from './base_select';
import { BaseSelectMessages } from './base_select.messages';
import { BaseSelectPresenter, BaseSelectStore } from './base_select_presenter';
import { defaultAreEqual, defaultIsSelected, flattenOptions } from './base_select_util';
import { BaseSelectItem, BaseSelectTrigger } from './stateless_base_select';
const selectAllValue = Symbol();
const selectAllOption = {
    value: selectAllValue,
    label: BaseSelectMessages.selectAll()
};
export class BaseMultiSelectStore extends BaseSelectStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            value: mobx.observable.ref
        });
    }
    constructor(...args){
        super(...args), this.value = (BaseMultiSelectStore._makeObservable(this), undefined);
    }
}
export class BaseMultiSelect extends React.Component {
    get value() {
        return this.props.value ?? this.store.value;
    }
    isAllSelected() {
        if (!this.value)
            return false;
        if (this.props.maxSelectedOptions && this.value.length >= this.props.maxSelectedOptions)
            return true;
        if (this.value.length === flattenOptions(this.props.options).length)
            return true;
        let valueWithoutDisabledOptions = this.value;
        this.getDisabledOptions().forEach((option)=>{
            valueWithoutDisabledOptions = valueWithoutDisabledOptions.filter((value)=>value !== option.value);
        });
        return Array.isArray(valueWithoutDisabledOptions) && valueWithoutDisabledOptions.length === this.getAvailableOptions().length;
    }
    getAvailableOptions() {
        return flattenOptions(this.props.options).filter((option)=>!option.disabled);
    }
    getDisabledOptions() {
        return flattenOptions(this.props.options).filter((option)=>option.disabled);
    }
    render() {
        const { showSelectAll, options, maxSelectedOptions } = this.props;
        const finalShowSelectAll = showSelectAll && (!maxSelectedOptions || maxSelectedOptions >= options.length);
        return _jsx(BaseSelect, {
            store: this.store,
            presenter: this.presenter,
            Trigger: this.Trigger,
            Item: this.Item,
            onSelection: this.onSelection,
            closeOnSelection: false,
            headerEnd: getTypicalSheetAdaptation() && _jsx(SurfaceHeaderTextButton, {
                onClick: this.closeMenu,
                children: BaseSelectMessages.done()
            }),
            ...this.props,
            isSelected: this.isSelected,
            options: finalShowSelectAll ? [
                selectAllOption,
                ...options
            ] : options
        });
    }
    constructor(...args){
        super(...args), this.store = this.props.store ?? new BaseMultiSelectStore(), this.presenter = this.props.presenter ?? new BaseSelectPresenter(), this.isSelected = (option, value)=>{
            if (option.value === selectAllValue) return this.isAllSelected();
            const { isSelected = defaultIsSelected } = this.props;
            return isSelected(option, value);
        }, this.onSelection = (option)=>{
            if (option.value === selectAllValue) return this.onSelectAll();
            if (option.value == null) return;
            const { isSelected = defaultIsSelected, areEqual = defaultAreEqual } = this.props;
            const value = this.value?.slice() ?? [];
            const newValue = isSelected(option, value) ? value.filter((v)=>!areEqual(v, option.value)) : value.concat(option.value);
            if (this.props.maxSelectedOptions && this.isAllSelected() && newValue.length > value.length)
                return;
            this.presenter.setValue(this.store, newValue);
            this.props.onChange?.(newValue);
        }, this.onSelectAll = ()=>{
            let newValue = this.isAllSelected() ? [] : this.getAvailableOptions().map((option)=>option.value).filter(exists);
            const disabledSelectedOptions = this.getDisabledOptions().map((option)=>this.isSelected(option, this.value) ? option.value : undefined).filter(exists);
            if (this.props.maxSelectedOptions)
                newValue = newValue.slice(0, this.props.maxSelectedOptions - disabledSelectedOptions.length);
            newValue = newValue.concat(disabledSelectedOptions);
            this.presenter.setValue(this.store, newValue);
            this.props.onChange?.(newValue);
        }, this.closeMenu = ()=>{
            this.presenter.toggle(this.store, false);
            this.props.onClose?.();
        }, this.Trigger = React.memo((props)=>{
            const { Trigger = BaseSelectTrigger } = this.props;
            const selectedOptions = props.selectedOptions?.filter((option)=>option.value !== selectAllValue);
            return _jsx(Trigger, {
                ...props,
                selectedOptions: selectedOptions
            });
        }), this.Item = React.memo((props)=>{
            return _jsx(BaseSelectItem, {
                ...props,
                multiSelectable: true
            });
        });
    }
}
