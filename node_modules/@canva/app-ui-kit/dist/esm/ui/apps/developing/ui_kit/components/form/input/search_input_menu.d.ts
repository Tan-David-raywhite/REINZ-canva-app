import * as React from 'react';
import type { TextInputProps } from '../input/text_input';
/** 
 * Props for the `SearchInputMenu` component.
 */
export type SearchInputMenuProps = React.RefAttributes<HTMLDivElement> & Omit<TextInputProps, 'type'> & {
    /** 
         * The contents of the `SearchInputMenu` component. Use {@link: Menu}.
         */
    children?: any;
    /** 
         * Callback function triggered when a pointer event occurs outside the `SearchInputMenu` component.
         */
    onOutsidePointerDown?: () => void;
    /** 
         * If `true`, displays the input in an error state.
         * @defaultValue false
         */
    error?: boolean;
    /** 
         * A short description of the purpose of this input.
         */
    ariaLabel?: string;
    /** 
         * Callback function triggered when the input is cleared.
         */
    onClear?: () => void;
    /** 
         * Triggered by onBlur and Enter keydown, even if unchanged.
         */
    onChangeComplete?: (value: string) => void;
};
/** 
 * A search input component with an associated menu.
 */
export declare const SearchInputMenu: ({ ref, ...props }: SearchInputMenuProps) => React.JSX.Element;
