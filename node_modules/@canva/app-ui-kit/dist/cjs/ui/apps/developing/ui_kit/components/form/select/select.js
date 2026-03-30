"use strict"
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
    get CustomizableSelect () {
        return CustomizableSelect;
    },
    get Select () {
        return Select;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _select = require('../../../../../../base/form/select/select');
function Select(props) {
    if (props.type === 'multi') return (0, _jsxruntime.jsx)(_select.Select, {
        id: props.id,
        options: props.options,
        value: props.value,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        disabled: props.disabled,
        error: props.error,
        placeholder: props.placeholder,
        stretch: props.stretch,
        searchable: props.searchable,
        type: "multi"
    });
    else return (0, _jsxruntime.jsx)(_select.Select, {
        id: props.id,
        options: props.options,
        value: props.value,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        disabled: props.disabled,
        error: props.error,
        placeholder: props.placeholder,
        stretch: props.stretch,
        searchable: props.searchable,
        type: "default"
    });
}
function CustomizableSelect(props) {
    return (0, _jsxruntime.jsx)(_select.BaseSelect, {
        id: props.id,
        options: props.options,
        value: props.value,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        disabled: props.disabled,
        error: props.error,
        placeholder: props.placeholder,
        stretch: props.stretch,
        searchable: props.searchable,
        trigger: props.trigger,
        item: props.item
    });
}
