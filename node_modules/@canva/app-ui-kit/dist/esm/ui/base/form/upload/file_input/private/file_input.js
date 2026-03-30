import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { WithFileSelector } from '../../file_selector/file_selector';
import { Dropzone } from './dropzone';
import { useDropzoneContext } from './dropzone_context';
import { DropzoneOverlayInternal } from './dropzone_overlay';
import { FileInputInternal } from './file_input_internal';
import { getValidatedFiles } from './file_validation';
export const FileInput = (props)=>{
    const dropzoneContext = useDropzoneContext();
    const { disabled, accept, onDropAcceptedFiles, onDropRejectedFiles, multiple, mode = 'droparea' } = {
        ...dropzoneContext,
        ...props
    };
    const selectFile = (files)=>{
        const { acceptedFiles, rejectedFiles } = getValidatedFiles(files, multiple, accept);
        acceptedFiles.length > 0 && onDropAcceptedFiles?.(acceptedFiles);
        rejectedFiles.length > 0 && onDropRejectedFiles?.(rejectedFiles);
    };
    const inputWithSelector = _jsx(WithFileSelector, {
        onSelectFiles: selectFile,
        mimeTypes: accept,
        multiple: multiple,
        children: ({ onClick })=>_jsx(FileInputInternal, {
                ...props,
                disabled: !!disabled,
                accept: accept,
                multiple: multiple,
                onClick: onClick
            })
    });
    return dropzoneContext != null || mode === 'button' ? inputWithSelector : _jsx(FileInputDropzone, {
        disabled: disabled,
        accept: accept,
        multiple: multiple,
        onDropAcceptedFiles: onDropAcceptedFiles,
        onDropRejectedFiles: onDropRejectedFiles,
        children: inputWithSelector
    });
};
const FileInputDropzone = React.memo(({ children, ...restProps })=>{
    return _jsxs(Dropzone, {
        ...restProps,
        showOverlay: false,
        children: [
            children,
            _jsx(DropzoneOverlayInternal, {
                variant: "input"
            })
        ]
    });
});
