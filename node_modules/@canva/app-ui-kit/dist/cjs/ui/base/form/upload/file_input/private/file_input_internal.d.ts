import * as React from 'react';
import type { PixelDensitySource } from '../../../../responsive_image/responsive_image';
import type { FileDropProps } from './dropzone';
export type FileInputMode = 'button' | 'droparea';
export type LayoutVariant = 'compact' | 'display';
export type FileInputUiProps = {
    mode?: FileInputMode
    variant?: LayoutVariant
    stretchButton?: boolean
    error?: boolean
    id?: string
    ariaControls?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    image?: 'none' | 'filetype' | PixelDensitySource[]
} & Required<Pick<FileDropProps, 'multiple'>>;
type FileInputInternalProps = FileInputUiProps & Pick<FileDropProps, 'disabled' | 'accept'> & {
    onClick: () => void
};
export declare const FileInputInternal: React.ComponentType<FileInputInternalProps>;
export {};
