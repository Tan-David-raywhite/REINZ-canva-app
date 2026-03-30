import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { FileInputItem as EaselFileInputItem } from '../../../../../../base/form/upload/file_input/file_input';
export function FileInputItem(props) {
    return _jsx(EaselFileInputItem, {
        label: props.label,
        onDeleteClick: props.onDeleteClick,
        disabled: props.disabled
    });
}
