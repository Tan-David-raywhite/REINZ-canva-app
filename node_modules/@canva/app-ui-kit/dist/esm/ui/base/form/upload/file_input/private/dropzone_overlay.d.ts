import * as React from 'react';
import type { Icon } from '../../../../icons/icons';
import type { FileCategory as FileCategoryType } from './file_input_illustration';
type DropzoneOverlayInternalVariant = 'input' | 'surface';
export type AcceptCategoryMap = Partial<Record<FileCategoryType, string[]>>;
type DropzoneOverlayInternalProps = {
    variant?: DropzoneOverlayInternalVariant
    isOver?: boolean
    icon?: Icon
    title?: string
    description?: string
    uploadType?: 'singleFile' | 'multipleFiles' | 'filesAndFolders'
    acceptCategories?: AcceptCategoryMap
};
export type DropzoneOverlayProps = Omit<DropzoneOverlayInternalProps, 'variant'>;
export declare const DropzoneOverlayInternal: React.ComponentType<DropzoneOverlayInternalProps>;
export declare const DropzoneOverlay: (props: DropzoneOverlayProps) => React.JSX.Element;
export {};
