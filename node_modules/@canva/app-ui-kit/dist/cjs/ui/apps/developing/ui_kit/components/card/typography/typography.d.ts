import * as React from 'react';
import type { InternalCardProps } from '../internal_card';
/** 
 * The props for the `TypographyCard` component.
 */
export type TypographyCardProps = InternalCardProps & {
    /** 
         * An accessible description of what happens when the card is clicked.
         * @example "Add text to design"
         */
    ariaLabel: string;
    /** 
         * The content of the card. It must be a `Title` or ` Text` component.
         */
    children?: React.ReactNode;
};
export declare const TypographyCard: ({ ariaLabel, onClick, onDragStart, children, loading, }: TypographyCardProps) => React.JSX.Element;
