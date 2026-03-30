import * as React from 'react';
/** 
 * The props for the `Accordion` component.
 */
export type AccordionProps = {
    /** 
         * The content of the Accordion component, one or more {@link: AccordionItem}.
         */
    children: React.ReactNode;
    /** 
         * Whether to show dividers between items. Defaults to true.
         */
    dividers?: boolean;
    /** 
         * Whether to expand all the {@link AccordionItem} children on first render. Overrides `defaultExpanded` on children. Defaults to false.
         */
    defaultExpanded?: boolean;
    /** 
         * The html tag to use for the set of items. Defaults to `ul`, but please use `ol` for any numbered list (such as steps in instructions).
         */
    tagName?: 'ol' | 'ul';
};
/** 
 * Accordion components are typically used when displaying a list of collapsible content, e.g. a Frequently Asked Questions section, or a list of instructions.
 *
 * The children of Accordion should only be {@link:AccordionItem}s.
 * @example
 * ```tsx
 * <Accordion>
 * <AccordionItem title="Accordion item title 1">
 *   This is the content of the first accordion item
 * </AccordionItem>
 * <AccordionItem title="Accordion item title 2">
 *   This is the content of the second accordion item
 * </AccordionItem>
 * <AccordionItem title="Accordion item title 3">
 *   This is the content of the third accordion item
 * </AccordionItem>
 * </Accordion>
 * ```
 */
export declare function Accordion(props: AccordionProps): React.JSX.Element;
