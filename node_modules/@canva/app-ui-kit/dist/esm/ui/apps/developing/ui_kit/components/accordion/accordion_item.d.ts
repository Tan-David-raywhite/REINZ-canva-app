import * as React from 'react';
/** 
 * The props for the `AccordionItem` component.
 */
export type AccordionItemProps = {
    /** 
         * The title for this item, to be rendered in the toggle button.
         */
    title: string;
    /** 
         * Whether to expand the item on first render. Overrides the `defaultExpanded` prop from parent {@link Accordion}. Defaults to false.
         */
    defaultExpanded?: boolean;
    /** 
         * If this item is disabled. It will not be expandable, and the title will not be clickable. Defaults to false.
         */
    disabled?: boolean;
    /** 
         * The content for the accordion item, which will be hidden and shown as the title is clicked.
         */
    children: React.ReactNode;
    /** 
         * Used in conjuction with an onClick handler, this lets you manage the expanded state of the item. If this is true, the item will be expanded, and if false, it will be collapsed.
         */
    expanded?: boolean;
    /** 
         * Used in conjuction with the expanded property, this lets you manage the expanded state of the item. If this is defined, the item will no longer be expanded and collapsed on click by the component.
         */
    onClick?: () => void;
};
/** 
 * AccordionItems should be used inside {@link Accordion} for each section that can be collapsed and expanded.
 *
 * @example
 * ```tsx
 * <AccordionItem title="Accordion item title 1">
 *   This is the content of the first accordion item
 * </AccordionItem>
 * ```
 */
export declare function AccordionItem(props: AccordionItemProps): React.JSX.Element;
