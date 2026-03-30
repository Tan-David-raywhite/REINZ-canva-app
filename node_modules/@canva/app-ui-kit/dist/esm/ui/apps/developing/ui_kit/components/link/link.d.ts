import * as React from 'react';
/** 
 * The props for the `Link` component.
 */
export type LinkProps = {
    /** 
         * The URL of an external web page.
         */
    href: string;
    /** 
         * A callback that runs when the user clicks the link.
         * To open an external web page, this callback must use the `requestOpenExternalUrl` method from the Apps SDK.
         */
    requestOpenExternalUrl: () => void;
    /** 
         * An accessible name for the link that is read aloud to screen readers.
         * This must be provided when the link does not contain text contents or when the text is not
         * sufficiently descriptive of its purpose.
         */
    ariaLabel?: string;
    /** 
         * The content to render inside the link.
         */
    children?: React.ReactNode;
    disabled?: boolean
    /** 
         * A human readable label that appears in a tooltip when the user's cursor hovers over the `Link`.
         */
    tooltipLabel?: string;
    /** 
         * The DOM ID for the underlying `HTMLAnchorElement`.
         */
    id?: string;
};
/** 
 * Links to an external web page.
 */
export declare function Link(props: LinkProps): React.JSX.Element;
/** 
 * The props for the `LinkButton` component.
 */
export type LinkButtonProps = Omit<LinkProps, 'requestOpenExternalUrl' | 'href' | 'title'> & {
    /** 
         * A callback that runs when the user clicks the button.
         */
    onClick: () => void;
    /** 
         * The variant of the link to display
         *
         * - `regular` - Regular underlined link, uses a distinctive color, with a lighter tone on hover.
         * - `critical` - Underlined link, uses color for critical/destructive actions, with a lighter tone on hover.
         *
         * @default 'regular'
         */
    variant?: 'regular' | 'critical';
};
/** 
 * A button that looks like a link but triggers in-app actions instead of navigation.
 */
export declare function LinkButton(props: LinkButtonProps): React.JSX.Element;
