import * as React from 'react';
type InputDecoration = (() => React.ReactNode) | React.ReactNode;
/** 
 * The click event for a `MenuItem`.
 */
export type TouchOrMouseEvent<T> = React.SyntheticEvent & Partial<Omit<React.MouseEvent<T>, 'nativeEvent'>> & Partial<Omit<React.TouchEvent<T>, 'nativeEvent'>>;
/** 
 * The props for the `MenuItem` component.
 */
export type MenuItemProps = {
    /** 
         * The content of the `MenuItem` component.
         */
    children?: React.ReactNode;
    /** 
         * A decorator to show at the start of the `MenuItem`.
         */
    start?: InputDecoration;
    /** 
         * A decorator to show at the end of the `MenuItem`.
         */
    end?: InputDecoration;
    /** 
         * Label of the item.
         * It doesn't have any effect when using custom `children`.
         */
    label?: string;
    /** 
         * Description of the item, displayed under the label.
         * It doesn't have any effect when using custom `children`.
         */
    description?: string;
    /** 
         * If `true`, the user can't interact with the `MenuItem``
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * A label that describes what the `MenuItem` does.
         * This must be supplied if the `MenuItem` doesn't have any text content (i.e. an icon-only `MenuItem`).
         */
    ariaLabel?: string;
    /** 
         * A callback that runs when the `MenuItem` is clicked.
         * @param event - The click event for the `MenuItem`.
         */
    onClick?: (event: TouchOrMouseEvent<any>) => void;
    /** 
         * A human readable label that appears in a tooltip when the user's cursor hovers over the `MenuItem`.
         */
    tooltipLabel?: string;
};
/** 
 * Menu items are text-based choices or actions shown to a user in a {@link Menu}.
 */
export declare function MenuItem(props: MenuItemProps): React.JSX.Element;
export {};
