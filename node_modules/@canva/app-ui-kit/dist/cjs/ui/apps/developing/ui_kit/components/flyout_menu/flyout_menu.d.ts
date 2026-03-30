import * as React from 'react';
import type { IconElement } from '../../icons/icons';
/** 
 * The props for the `FlyoutMenu` component.
 */
export type FlyoutMenuProps = {
    /** 
         * A human readable label for the `FlyoutMenu`.
         */
    label?: string;
    /** 
         * A string of bold text that at the top of the `FlyoutMenu` surface.
         */
    title?: string;
    /** 
         * A human readable description that appears beneath the title at the top of the `FlyoutMenu` surface.
         */
    description?: string;
    /** 
         * An accessible name for the `FlyoutMenu` that is read aloud to screen readers.
         */
    ariaLabel?: string;
    /** 
         * The content of the `FlyoutMenu` component. `FlyoutMenuItem` and `FlyoutMenuDivider`.
         */
    children: React.ReactNode;
    /** 
         * The icon to render in the trigger.
         * This must be one of the icons provided by the App UI Kit.
         */
    icon?: () => IconElement;
    /** 
         * The position of the icon within the `FlyoutMenu` trigger.
         * @defaultValue 'start'
         */
    iconPosition?: 'end' | 'start';
    /** 
         * The tone of the trigger.
         */
    tone?: 'secondary' | 'tertiary';
    /** 
         * Called when the `FlyoutMenu` is opened.
         */
    onOpen?: () => void;
    /** 
         * Called when the `FlyoutMenu` is closed.
         */
    onClose?: () => void;
    /** 
         * Placement for the `FlyoutMenu` surface.
         * @defaultValue "bottom-start"
         */
    flyoutPlacement?: 'bottom-end' | 'bottom-start';
    /** 
         * A human readable label that appears in a tooltip when the user's cursor hovers over the trigger button.
         */
    tooltipLabel?: string;
    /** 
         * A custom trigger to control the open/close state of the `FlyoutMenu` component.
         *
         * If you're using a custom trigger, make sure to leverage the FlyoutMenuTriggerProps interface to use onClick
         * and other props like 'pressed' to indicate the Menu is open. These can be spread into a Button directly.
         *
         * @example
         * ```tsx
         *     <FlyoutMenu trigger={props => <Button {...props} variant="secondary" icon={() => <CogIcon />} />}>
         *       ...FlyoutMenu contents
         *     </FlyoutMenu>
         *   </div>
         * ```
         */
    trigger?: (props: FlyoutMenuTriggerProps) => React.ReactNode;
};
/** 
 * The props for a custom trigger to the `FlyoutMenu` component.
 */
export type FlyoutMenuTriggerProps = {
    /** 
         * The aria label of the trigger.
         */
    ariaLabel?: string;
    /** 
         * Indicates the type of pop-up is a 'menu' which has a list of menu items.
         */
    ariaHasPopup: 'menu';
    /** 
         * The id of the trigger.
         */
    id?: string;
    /** 
         * The click handler for the trigger, toggles the menu open/close state.
         */
    onClick: () => void;
    /** 
         * Whether the trigger is pressed, this is used to indicate the Menu is open.
         */
    pressed?: boolean;
};
/** 
 * `FlyoutMenu` component that complies with WAI-ARIA patterns and recommendations for menus.
 *
 * It'll automatically manage focus between the trigger and the menu,
 * and will also manage focus when the menu is open, to cycle through
 * the menu items. {@link FlyoutMenuItem}
 *
 * Use `FlyoutMenu` when you need a simple dropdown menu that only contains `FlyoutMenuItem` and `FlyoutMenuDivider`.
 * This component manages its own open/close state and sizes itself based on the menu items,
 * making it perfect for standard menus with consistent behavior and minimal setup.
 *
 * Need more flexibility? Try {@link Flyout} instead.
 */
export declare function FlyoutMenu(props: FlyoutMenuProps): React.JSX.Element;
