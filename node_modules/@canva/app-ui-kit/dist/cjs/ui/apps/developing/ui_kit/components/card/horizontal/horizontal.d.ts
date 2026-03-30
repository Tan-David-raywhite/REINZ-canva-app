import * as React from 'react';
import type { IconElement } from '../../../icons/icons';
import type { DecoratedCardProps, InternalCardProps } from '../internal_card';
/** 
 * The props for the `HorizontalCard` component.
 */
export type HorizontalCardProps = Omit<InternalCardProps, 'onDragStart'> & DecoratedCardProps & {
    /** 
         * A human readable title for the horizontal card.
         */
    title: string;
    /** 
         * An accessible description of what happens when the card is clicked. If omitted, the `title` prop is used instead. If there is no `title`, this prop must be set.
         * @example "Add card to design"
         */
    ariaLabel?: string;
    description?: string;
    thumbnail?: {
        /** 
                 * The icon to render inside the card thumbnail.
                 * This must be one of the icons provided by the App UI Kit.
                 */
        icon: () => IconElement;
    } | {
        /** 
                 * The URL of the image to render as the cards thumbnail.
                 */
        url: string;
        /** 
                 * The alt text for the thumbnail image.
                 */
        alt: string | undefined;
    };
    /** 
         * If `true`, the HorizontalCard will show greyed-out styles.
         *
         * @defaultValue false
         */
    disabled?: boolean;
};
export declare const HorizontalCard: ({ title, ariaLabel, description, thumbnail, onClick, bottomEnd, bottomEndVisibility, disabled, loading, }: HorizontalCardProps) => React.JSX.Element;
