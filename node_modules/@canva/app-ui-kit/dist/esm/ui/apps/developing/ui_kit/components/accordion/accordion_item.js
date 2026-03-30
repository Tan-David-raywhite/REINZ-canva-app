import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { AccordionItem as EaselAccordionItem } from '../../../../../base/accordion/accordion';
/** 
 * AccordionItems should be used inside {@link Accordion} for each section that can be collapsed and expanded.
 *
 * @example
 * ```tsx
 * <AccordionItem title="Accordion item title 1">
 *   This is the content of the first accordion item
 * </AccordionItem>
 * ```
 */ export function AccordionItem(props) {
    return _jsx(EaselAccordionItem, {
        title: props.title,
        defaultExpanded: props.defaultExpanded,
        disabled: props.disabled,
        expanded: props.expanded,
        onClick: props.onClick,
        children: props.children
    });
}
