import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { BaseSelect as EaselBaseSelect, Select as EaselSelect } from '../../../../../../base/form/select/select';
/** 
 * A dropdown with a selectable list of options.
 */ export function Select(props) {
    if (props.type === 'multi') return _jsx(EaselSelect, {
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
    else return _jsx(EaselSelect, {
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
/** 
 * A highly customizable dropdown with a selectable list of options.
 * Allows custom trigger and item renderers for advanced use cases.
 *
 * @remarks
 * For most use cases, the standard `Select` component should be preferred.
 * Only use this component when you need complete control over the
 * appearance and behavior of the select trigger or menu items.
 */ export function CustomizableSelect(props) {
    return _jsx(EaselBaseSelect, {
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
