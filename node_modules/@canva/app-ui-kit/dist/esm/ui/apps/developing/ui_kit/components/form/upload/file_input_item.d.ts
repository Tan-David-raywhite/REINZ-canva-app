import * as React from 'react';
/** 
 * The props for the `FileInputItem` component.
 */
export type FileInputItemProps = {
    /** 
         * A human readable label for the file. This is usually the file name.
         */
    label: string;
    /** 
         * A callback that runs when a user clicks the delete button.
         */
    onDeleteClick: () => void;
    /** 
         * If `true`, the user can't interact with the file input item.
         * @defaultValue false
         */
    disabled?: boolean;
};
export declare function FileInputItem(props: FileInputItemProps): React.JSX.Element;
