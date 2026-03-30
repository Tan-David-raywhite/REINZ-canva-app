import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Accordion as EaselAccordion } from '../../../../../base/accordion/accordion';
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
 */ export function Accordion(props) {
    return _jsx(EaselAccordion, {
        dividers: props.dividers,
        defaultExpanded: props.defaultExpanded,
        tagName: props.tagName,
        spacing: "2u",
        headingSize: "medium",
        children: props.children
    });
}
