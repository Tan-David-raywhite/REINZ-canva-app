"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get BaseMultiSelect () {
        return BaseMultiSelect;
    },
    get BaseMultiSelectStore () {
        return BaseMultiSelectStore;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _make_observable = require('../../../../../base/make_observable/make_observable');
const _exists = require('../../../../../base/exists');
const _mobx = _interop_require_wildcard(require("mobx"));
const _react = _interop_require_wildcard(require("react"));
const _header = require('../../../surface/header/header');
const _popover = require('../../../surface/popover/popover');
const _base_select = require("./base_select");
const _base_selectmessages = require("./base_select.messages");
const _base_select_presenter = require("./base_select_presenter");
const _base_select_util = require("./base_select_util");
const _stateless_base_select = require("./stateless_base_select");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const selectAllValue = Symbol();
const selectAllOption = {
    value: selectAllValue,
    label: _base_selectmessages.BaseSelectMessages.selectAll()
};
class BaseMultiSelectStore extends _base_select_presenter.BaseSelectStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            value: _mobx.observable.ref
        });
    }
    constructor(...args){
        super(...args), this.value = (BaseMultiSelectStore._makeObservable(this), undefined);
    }
}
class BaseMultiSelect extends _react.Component {
    get value() {
        return this.props.value ?? this.store.value;
    }
    isAllSelected() {
        if (!this.value)
            return false;
        if (this.props.maxSelectedOptions && this.value.length >= this.props.maxSelectedOptions)
            return true;
        if (this.value.length === (0, _base_select_util.flattenOptions)(this.props.options).length)
            return true;
        let valueWithoutDisabledOptions = this.value;
        this.getDisabledOptions().forEach((option)=>{
            valueWithoutDisabledOptions = valueWithoutDisabledOptions.filter((value)=>value !== option.value);
        });
        return Array.isArray(valueWithoutDisabledOptions) && valueWithoutDisabledOptions.length === this.getAvailableOptions().length;
    }
    getAvailableOptions() {
        return (0, _base_select_util.flattenOptions)(this.props.options).filter((option)=>!option.disabled);
    }
    getDisabledOptions() {
        return (0, _base_select_util.flattenOptions)(this.props.options).filter((option)=>option.disabled);
    }
    render() {
        const { showSelectAll, options, maxSelectedOptions } = this.props;
        const finalShowSelectAll = showSelectAll && (!maxSelectedOptions || maxSelectedOptions >= options.length);
        return (0, _jsxruntime.jsx)(_base_select.BaseSelect, {
            store: this.store,
            presenter: this.presenter,
            Trigger: this.Trigger,
            Item: this.Item,
            onSelection: this.onSelection,
            closeOnSelection: false,
            headerEnd: (0, _popover.getTypicalSheetAdaptation)() && (0, _jsxruntime.jsx)(_header.SurfaceHeaderTextButton, {
                onClick: this.closeMenu,
                children: _base_selectmessages.BaseSelectMessages.done()
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
        super(...args), this.store = this.props.store ?? new BaseMultiSelectStore(), this.presenter = this.props.presenter ?? new _base_select_presenter.BaseSelectPresenter(), this.isSelected = (option, value)=>{
            if (option.value === selectAllValue) return this.isAllSelected();
            const { isSelected = _base_select_util.defaultIsSelected } = this.props;
            return isSelected(option, value);
        }, this.onSelection = (option)=>{
            if (option.value === selectAllValue) return this.onSelectAll();
            if (option.value == null) return;
            const { isSelected = _base_select_util.defaultIsSelected, areEqual = _base_select_util.defaultAreEqual } = this.props;
            const value = this.value?.slice() ?? [];
            const newValue = isSelected(option, value) ? value.filter((v)=>!areEqual(v, option.value)) : value.concat(option.value);
            if (this.props.maxSelectedOptions && this.isAllSelected() && newValue.length > value.length)
                return;
            this.presenter.setValue(this.store, newValue);
            this.props.onChange?.(newValue);
        }, this.onSelectAll = ()=>{
            let newValue = this.isAllSelected() ? [] : this.getAvailableOptions().map((option)=>option.value).filter(_exists.exists);
            const disabledSelectedOptions = this.getDisabledOptions().map((option)=>this.isSelected(option, this.value) ? option.value : undefined).filter(_exists.exists);
            if (this.props.maxSelectedOptions)
                newValue = newValue.slice(0, this.props.maxSelectedOptions - disabledSelectedOptions.length);
            newValue = newValue.concat(disabledSelectedOptions);
            this.presenter.setValue(this.store, newValue);
            this.props.onChange?.(newValue);
        }, this.closeMenu = ()=>{
            this.presenter.toggle(this.store, false);
            this.props.onClose?.();
        }, this.Trigger = _react.memo((props)=>{
            const { Trigger = _stateless_base_select.BaseSelectTrigger } = this.props;
            const selectedOptions = props.selectedOptions?.filter((option)=>option.value !== selectAllValue);
            return (0, _jsxruntime.jsx)(Trigger, {
                ...props,
                selectedOptions: selectedOptions
            });
        }), this.Item = _react.memo((props)=>{
            return (0, _jsxruntime.jsx)(_stateless_base_select.BaseSelectItem, {
                ...props,
                multiSelectable: true
            });
        });
    }
}
