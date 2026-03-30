import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { BaseComboSelect } from './base_combo_select';
import { BaseMultiSelect } from './base_multi_select';
import { BaseSelect } from './base_select';
export function Select(props) {
    switch(props.type){
        case 'multi':
            return _jsx(BaseMultiSelect, {
                ...props
            });
        case 'combobox':
            return _jsx(BaseComboSelect, {
                ...props
            });
        default:
            return _jsx(BaseSelect, {
                ...props
            });
    }
}
