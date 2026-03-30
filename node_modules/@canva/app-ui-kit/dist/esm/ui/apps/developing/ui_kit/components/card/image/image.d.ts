import * as React from 'react';
import type { LoadingState } from '../../../../../../base/thumbnail/thumbnail';
import type { DecoratedCardProps, InternalCardProps } from '../internal_card';
/** 
 * The props for the `ImageCard` component.
 */
export type ImageCardProps = InternalCardProps & DecoratedCardProps & {
    /** 
         * An accessible description of what happens when the card is clicked.
         *
         * @remarks
         * Must be provided when the card is interactive, i.e. when it's clickable
         *
         * @example "Add image into design"
         */
    ariaLabel?: string;
    /** 
         * The URL of an image to render as the card's thumbnail.
         */
    thumbnailUrl: string;
    /** 
         * A human readable description of the image.
         */
    alt: string;
    /** 
         * The rounding of the card's corners.
         * @defaultValue "none"
         */
    borderRadius?: 'none' | 'standard';
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
         * The padding around the thumbnail image.
         *
         * @remarks Primary use case is when the thumbnail is a vector asset and you need to pad the svg within the thumbnail container.
         *
         * @defaultValue "none"
         */
    thumbnailPadding?: 'none' | '1u' | '2u';
    /** 
         * The background color of the thumbnail.
         *
         * @remarks Primary use case is when the thumbnail is a vector asset with a transparent background and you need to
         * contrast the SVG against the app background. Most of the time, you should use `secondary`. Use `contrastOnLight`
         * when a light-colored or white image has a transparent background, and `contrastOnDark` when a mostly-dark or
         * black image has a transparent background.
         *
         * @defaultValue "none"
         */
    thumbnailBackground?: 'none' | 'secondary' | 'contrastOnLight' | 'contrastOnDark';
    /** 
         * If `true`, ImageCard will be selectable and an outline border will
         * appear on hover to indicate selection is available.
         *
         * @remarks
         * Set this value to `true` only if `onClick` selects and deselects the Card, as opposed to click to add to design.
         *
         * @defaultValue false
         */
    selectable?: boolean;
    /** 
         * If `true`, the ImageCard will show selected styles.
         *
         * @remarks
         * `selectable` must be set to true.
         *
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * If `true`, the ImageCard will show greyed-out styles.
         *
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * Callback fired when the image changes its loading state - the values are 'loading', 'loaded', and 'error'.
         */
    onImageLoad?: (loadingState: LoadingState) => void;
};
export declare const ImageCard: (props: ImageCardProps) => React.JSX.Element;
