import * as React from 'react';
type InputDecoration = (() => React.ReactNode) | React.ReactNode;
/** 
 * The props for the `FlyoutMenuItem` component.
 */
export type FlyoutMenuItemProps = {
    /** 
         * The content of the `FlyoutMenuItem` component.
         */
    children: React.ReactNode;
    /** 
         * A callback that runs when the `FlyoutMenuItem` is clicked.
         */
    onClick?: () => void;
    /** 
         * A decorator to show at the start of the `FlyoutMenuItem`.
         */
    start?: InputDecoration;
    /** 
         * A decorator to show at the end of the `FlyoutMenuItem`.
         */
    end?: InputDecoration;
    /** 
         * If `true`, the user can't interact with the `FlyoutMenuItem`
         * @defaultValue false
         */
    disabled?: boolean;
};
/** 
 * `FlyoutMenuItem` is a text-based choice or action shown to a user in a {@link FlyoutMenu}.
 * Should only be used as a child of {@link FlyoutMenu}
 */
export declare function FlyoutMenuItem(props: FlyoutMenuItemProps): React.JSX.Element;
export {};
