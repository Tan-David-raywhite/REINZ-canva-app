import * as React from 'react';
import type { FileDropProps } from './dropzone';
import type { FileInputUiProps } from './file_input_internal';
export type FileInputProps = FileDropProps & FileInputUiProps;
export declare const FileInput: (props: FileInputProps) => React.JSX.Element;
