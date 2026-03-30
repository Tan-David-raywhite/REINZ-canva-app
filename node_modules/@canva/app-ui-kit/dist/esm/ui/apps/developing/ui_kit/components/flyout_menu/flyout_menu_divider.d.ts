import * as React from 'react';
/** 
 * The props for the `FlyoutMenuDivider` component.
 */
export type FlyoutMenuDividerProps = {
    /** 
         * Optional content to be displayed as a label below the dividing line.
         * If provided, this creates a labeled divider within the `FlyoutMenu`.
         */
    children?: string;
};
/** 
 * `FlyoutMenuDivider` is supported within the {@link FlyoutMenu} component, and has extra spacing for separation.
 * Should only be used as a child of {@link FlyoutMenu}
 */
export declare function FlyoutMenuDivider(props: FlyoutMenuDividerProps): React.JSX.Element;
