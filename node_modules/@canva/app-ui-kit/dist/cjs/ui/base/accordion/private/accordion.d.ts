import * as React from 'react';
import type { TagName } from '../../box/common_props/common_props';
import type { Icon } from '../../icons/icons';
import type { Space } from '../../metrics/metrics';
import type { TypographySize } from '../../typography/typography';
type Display = 'comfortable' | 'compact';
type HeadingLevel = 2 | 3 | 4 | 5;
export type AccordionProps = {
    defaultExpanded?: boolean
    display?: Display
    noChildPadding?: boolean
    dividers?: boolean
    headingSize?: Extract<TypographySize, 'small' | 'medium' | 'large'>
    headingLevel?: HeadingLevel
    tagName?: Extract<TagName, 'ol' | 'ul'>
    spacing?: Extract<Space, '0' | '0.5u' | '1u' | '1.5u' | '2u' | '3u' | '4u'>
    children: React.ReactNode
};
export declare const Accordion: ({ defaultExpanded, display, noChildPadding, dividers, headingSize, headingLevel, tagName, spacing, children, }: AccordionProps) => React.JSX.Element;
type AccordionItemProps = {
    id?: string
    title: React.ReactNode
    Icon?: Icon
    defaultExpanded?: boolean
    expanded?: boolean
    onClick?: (expanded: boolean) => void
    disabled?: boolean
    children: React.ReactNode
};
export declare const AccordionItem: ({ id, title, Icon, defaultExpanded, expanded: expandedProp, onClick, disabled, children, }: AccordionItemProps) => React.JSX.Element;
export {};
