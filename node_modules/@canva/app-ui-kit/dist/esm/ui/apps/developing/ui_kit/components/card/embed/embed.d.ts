import * as React from 'react';
import type { DecoratedCardProps, InternalCardProps } from '../internal_card';
/** 
 * The props for the `EmbedCard` component.
 */
export type EmbedCardProps = InternalCardProps & DecoratedCardProps & {
    /** 
         * An accessible description of what happens when the card is clicked. If omitted, the `title` prop is used instead.
         *
         * @remarks
         * Must be provided when card is interactive, i.e. clickable, and it has no title
         *
         * @example "Add embed to design"
         */
    ariaLabel?: string;
    /** 
         * The URL of an image to render as the card's thumbnail.
         */
    thumbnailUrl: string;
    /** 
         * A human readable title for the card.
         * @remarks
         * If the title and description are undefined or empty, the card will render with sharp borders.
         */
    title?: string;
    /** 
         * A human readable description that appears beneath the title.
         * @remarks
         * If the title and description are undefined or empty, the card will render with sharp borders.
         */
    description?: string;
    /** 
         * A fixed height for the card, regardless of its contents. If omitted, the card grows to fit the size of its contents.
         */
    thumbnailHeight?: number;
    /** 
         * The ratio of the width to the height of the card thumbnail, given as the width divided by the height. If omitted, the thumbnail image will be displayed at its natural aspect ratio.
         * For example, if the image is 200px wide and 200px high, the aspect ratio is 1;
         * if the image is 200px wide and 100px high, the aspect ratio is 2 (200/100 = 2);
         * if the image is 300px wide and 200px high, the aspect ratio is 1.5 (300/200 = 1.5).
         * If thumbnailHeight is provided, this should also be provided to ensure the image does not change size on loading.
         */
    thumbnailAspectRatio?: number;
    /** 
         * If `true`, EmbedCard will be selectable and an outline border will
         * appear on hover to indicate selection is available.
         *
         * @remarks
         * Set this value to `true` only if `onClick` selects and deselects the Card, as opposed to click to add to design.
         *
         * @defaultValue false
         */
    selectable?: boolean;
    /** 
         * If `true`, the EmbedCard will show selected styles.
         *
         * @remarks
         * `selectable` must be set to true.
         *
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * If `true`, the EmbedCard will show greyed-out styles.
         *
         * @defaultValue false
         */
    disabled?: boolean;
};
export declare const EmbedCard: (props: EmbedCardProps) => React.JSX.Element;
