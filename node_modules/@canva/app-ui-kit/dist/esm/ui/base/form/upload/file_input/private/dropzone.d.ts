import * as React from 'react';
export type FileDropProps = {
    disabled?: boolean
    accept?: string[]
    multiple?: boolean
    onDropAcceptedFiles?: (files: File[]) => void
    onDropRejectedFiles?: (files: File[]) => void
};
export type DropzoneProps = FileDropProps & {
    children: React.ReactNode
    showOverlay?: boolean
};
export declare const Dropzone: ({ disabled, multiple, accept, onDropAcceptedFiles, onDropRejectedFiles, children, showOverlay, }: DropzoneProps) => React.JSX.Element;
