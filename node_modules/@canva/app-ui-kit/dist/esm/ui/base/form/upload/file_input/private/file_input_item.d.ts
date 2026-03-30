import * as React from 'react';
export type FileInputItemProps = {
    label: string
    onDeleteClick: () => void
    disabled?: boolean
    tagName?: 'div' | 'li'
};
export declare const FileInputItem: (props: FileInputItemProps) => React.JSX.Element;
