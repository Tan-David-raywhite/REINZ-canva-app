import * as React from 'react';
/** 
 * The props for the `FileInput` component.
 */
export type FileInputProps = {
    /** 
         * The supported file types for the file input.
         * You can define file types as MIME types, such as `"image/png"` or `"image/*"`, or file extensions, such as `".png"`.
         */
    accept?: string[];
    /** 
         * If `true`, the user can't interact with the file input.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * If `true`, the upload button in the file input expands to fill the width of its container.
         * If the file input is a child of a `Rows` component, the button automatically expands to fill the width of its container and this prop has no effect.
         * @defaultValue false
         */
    stretchButton?: boolean;
    /** 
         * If `true`, the user can select multiple files from the file selector dialog.
         * @defaultValue false
         */
    multiple?: boolean;
    /** 
         * A callback that runs when the user selects one or more files of a valid file type.
         * This callback only runs if the user selects valid files.
         * @param files - The selected files.
         */
    onDropAcceptedFiles?: (files: File[]) => void;
    /** 
         * A callback that runs when the user selects one or more files of an invalid file type.
         * This callback only runs if the user selects invalid files.
         * @param files - The selected files.
         */
    onDropRejectedFiles?: (files: File[]) => void;
    /** 
         * The DOM ID for the underlying `HTMLInputElement`.
         */
    id?: string;
};
/** 
 * An upload widget that opens a file selector dialog.
 */
export declare function FileInput(props: FileInputProps): React.JSX.Element;
