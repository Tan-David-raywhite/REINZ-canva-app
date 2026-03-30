import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { FileInput as EaselFileInput } from '../../../../../../base/form/upload/file_input/file_input';
/** 
 * An upload widget that opens a file selector dialog.
 */ export function FileInput(props) {
    return _jsx(EaselFileInput, {
        accept: props.accept,
        disabled: props.disabled,
        mode: "button",
        multiple: props.multiple ?? false,
        onDropAcceptedFiles: props.onDropAcceptedFiles,
        onDropRejectedFiles: props.onDropRejectedFiles,
        stretchButton: props.stretchButton,
        id: props.id
    });
}
