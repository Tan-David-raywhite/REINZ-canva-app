import * as React from 'react';
export type InputDecoration = (() => React.ReactNode) | React.ReactNode;
/** 
 * Placement of the content around the reference element.
 *
 * `'auto'` will choose the side automatically based on available space.
 *
 * All other values are split into two values, in the format `main-cross`. The
 * "main" value defines which side of the reference the content will attempt to
 * be positioned on, i.e. `bottom-` placements will appear underneath the
 * reference. The "cross" value defines where on the "main" side  the content
 * will be anchored, i.e. `-top` placements will appear at the top of their
 * respective side.
 *
 * For all placements, the terms `start` and `end` are logical positions, and
 * refer to left and right interchangeably based on whether the component is
 * rendered in RTL context.
 */
export type Placement = 'start-center' | 'start-top' | 'start-bottom' | 'end-center' | 'end-top' | 'end-bottom' | 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'auto';
/** 
 * Minimal shape required to represent a position the pin can be placed around.
 * This can be met with a reference to an HTML element, or otherwise
 * met with a custom implementation.
 */
export type ReferenceObject = {
    getBoundingClientRect(): DOMRect;
};
/** 
 * Contents of the flyout header.
 */
export type HeaderProps = {
    /** 
         * Title of the `Flyout`. Sits above the main content in a header with a dividing line.
         */
    title?: string;
    /** 
         * Description of the `Flyout`, appears below the `title`.
         */
    description?: string;
    /** 
         * A decorator to show at the start of the `Flyout` header.
         */
    headerStart?: InputDecoration;
    /** 
         * A decorator to show at the end of the `Flyout` header.
         * If `onRequestClose` and a `title` is supplied, defaults to a CloseButton in sheet mode.
         */
    headerEnd?: InputDecoration;
};
/** 
 * The props for the `Flyout` component.
 */
export type FlyoutProps = {
    /** 
         * Whether the `Flyout` should be rendered.
         * @remarks The content of the `Flyout` will be unmounted when closed.
         */
    open: boolean;
    /** 
         * Called when a user interacts with a `Flyout` in a way that should dismiss it.
         * For instance when clicking outside of the `Flyout`.
         * This is where you would update the state of the `Flyout` to closed.
         *
         * @example
         * onRequestClose={() => setFlyoutOpen(false)}
         */
    onRequestClose?: () => void;
    /** 
         * Called after the `Flyout` is closed.
         * This is where you should call any effects that should run when the `Flyout` is closed, such as tracking the event via analytics.
         *
         * @example
         * onCloseComplete={trackFlyoutClosed}
         */
    onCloseComplete?: () => void;
    /** 
         * Placement of the `Flyout` around the trigger when rendering as a popover.
         *
         * When rendering as a sheet, the content will always remain attached to the bottom of the viewport.
         * @defaultValue 'auto'
         */
    placement?: Placement;
    /** 
         * Width of the `Flyout` when rendering as a popover.
         *
         * When rendering as a sheet, the width will always match the available viewport width.
         * `'trigger'` will fit width to the provided trigger object.
         * @defaultValue '32u'
         */
    width?: 'trigger' | '16u' | '32u' | '40u' | '45u' | '52u';
    /** 
         * Trigger content for the `Flyout`.
         *
         * The trigger should be exclusively used for the interactive element that
         * triggers the visibility of the `Flyout`. The trigger will be rendered within
         * the regular document flow, and will be used to determine the position of
         * the `Flyout`'s surface when rendered as a popover, as such, you can also pass
         * in an existing HTML element (or anything that resembles it) as reference
         * to place the popover around it.
         *
         * @example
         * ```tsx
         * const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>(null);
         * const [flyoutOpen, setFlyoutOpen] = useState(false);
         *
         * return (
         *   <div ref={setTriggerRef}>
         *     <SearchInputMenu
         *       end={<Button icon={SlidersIcon} variant="tertiary" onClick={() => setFlyoutOpen(true)} />}
         *     >
         *       ...SearchInputMenu contents
         *     </SearchInputMenu>
         *     <Flyout
         *       open={flyoutOpen}
         *       width="trigger"
         *       trigger={triggerRef}
         *     >
         *       ..Flyout contents
         *     </Flyout>
         *   </div>
         * )
         * ```
         */
    trigger: React.ReactNode | ReferenceObject;
    /** 
         * Content to render within the footer of the `Flyout`.
         *
         * If provided, the footer will be rendered in a sticky container that remains
         * at the bottom of the `Flyout`'s visible surface.
         */
    footer?: React.ReactNode;
    /** 
         * Content to render within the `Flyout`'s surface.
         */
    children?: React.ReactNode;
} & HeaderProps;
/** 
 * `Flyout` provides a mechanism for rendering content in a "floating" surface that
 * is triggered by content in the primary document flow.
 *
 * Use `Flyout` when you need a flexible container that can hold any content.
 * This component requires you to manage the open/close state and specify the size,
 * making it ideal for custom implementations where you need more control over the behavior and appearance.
 *
 * If you only require a simple dropdown menu, try {@link FlyoutMenu} instead.
 */
export declare function Flyout(props: FlyoutProps): React.JSX.Element;
