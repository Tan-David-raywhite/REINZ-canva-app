import * as React from 'react';
/** 
 * The props for the `Carousel` component.
 */
export type CarouselProps = {
    /** 
         * Each child of the carousel should be a tabbable element
         * (ie button or anchor) to comply with a11y requirements.
         */
    children: React.ReactNode[];
    /** 
         * The behavior of items that are out of view. When 'inert' is used,
         * items are not tabbable or interactive until they are fully visible.
         * When 'none' is used, items are interactive and tabbable.
         *
         * It is recommended to use 'inert' to reduce the amount of tab stops
         * to navigate past the carousel and improve page usability for keyboard
         * and screen reader users.
         *
         * @defaultValue "inert"
         */
    outOfViewItemBehavior?: 'inert' | 'none';
};
/** 
 * Carousel component accepts children(array of React nodes) and renders them in a row allowing the users
 * to interact with the items using scroll buttons.
 * Note: Carousel creates a stacking context for all its children.
 */
export declare function Carousel(props: CarouselProps): React.JSX.Element;
