import * as React from 'react';
/** 
 * The props for the `Menu` component.
 */
export type MenuProps = {
    /** 
         * The content of the `Menu` component.
         */
    children?: React.ReactNode;
    /** 
         * An accessible name for the `Menu` that is read aloud to screen readers.
         */
    ariaLabel?: string;
};
export declare function Menu(props: MenuProps): React.JSX.Element;
