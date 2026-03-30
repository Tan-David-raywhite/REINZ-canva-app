import * as React from 'react';
/** 
 * The props for the `MenuDivider` component.
 */
export type MenuDividerProps = {
    /** 
         * Optional content to be displayed as a label below the dividing line.
         * If provided, this creates a labeled divider within the menu.
         */
    children?: React.ReactNode;
};
/** 
 * Menu dividers are supported within the {@link Menu} component, and have extra spacing for separation.
 */
export declare function MenuDivider(props: MenuDividerProps): React.JSX.Element;
