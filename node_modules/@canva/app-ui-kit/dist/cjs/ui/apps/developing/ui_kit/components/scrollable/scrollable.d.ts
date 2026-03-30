import * as React from 'react';
/** 
 * Represents the state of a scrollable component.
 */
export type ScrollState = {
    /** 
         * Indicates that the component is not scrollable.
         */
    scrollable: false;
} | {
    /** 
         * Indicates that the component is scrollable.
         */
    scrollable: true;
    /** 
         * Indicates whether the scroll position is at the start.
         */
    atStart: boolean;
    /** 
         * Indicates whether the scroll position is at the end.
         */
    atEnd: boolean;
    /** 
         * Raw scroll and client dimensions and positions.
         */
    raw: {
        /** 
                 * Scroll dimensions and positions.
                 */
        scroll: {
            /** 
                         * The total height of the scrollable content.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight | MDN scrollHeight}
                         */
            height: number;
            /** 
                         * The total width of the scrollable content.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth | MDN scrollWidth}
                         */
            width: number;
            /** 
                         * The number of pixels by which the content is scrolled from its left edge.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft | MDN scrollLeft}
                         */
            left: number;
            /** 
                         * The number of pixels by which the content is scrolled from its top edge.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop | MDN scrollTop}
                         */
            top: number;
        };
        /** 
                 * Client dimensions and positions.
                 */
        client: {
            /** 
                         * The height of the scrollable container excluding borders, margins, and horizontal scrollbars (if present).
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight | MDN clientHeight}
                         */
            height: number;
            /** 
                         * The width of the scrollable container excluding borders, margins, and vertical scrollbars (if present).
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth | MDN clientWidth}
                         */
            width: number;
            /** 
                         * The width of the left border of the scrollable container.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft | MDN clientLeft}
                         */
            left: number;
            /** 
                         * The width of the top border of the scrollable container.
                         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop | MDN clientTop}
                         */
            top: number;
        };
    };
};
/** 
 * Props interface for the {@link Scrollable} component.
 */
export type ScrollableProps = {
    /** 
         * The scrolling direction of the scroll container.
         * @defaultValue 'vertical'
         */
    direction?: 'vertical' | 'horizontal';
    /** 
         * Configuration for an indicator suggesting that content is scrollable.
         *
         * @remarks
         * Especially useful for local scrollable areas that don't take up full height/width of available space.
         * On MacOS and iOS, scrollbars only appear during active scrolling, which can make it unclear if an area is scrollable.
         * Use this indicator to visually communicate scrollable content to users.
         */
    indicator?: {
        /** 
                 * Background color that matches your content area.
                 * @see {@link https://www.canva.dev/docs/apps/app-ui-kit/colors/#background | Color documentation}
                 */
        background: 'canvas' | 'tabdock' | 'page' | 'surface';
    };
    /** 
         * Callback function triggered when the scrollable area is scrolled.
         *
         * @remarks
         * Should be debounced to avoid performance issues.
         *
         * @param getScrollState - Function that returns the current scroll state
         */
    onScroll?: ((getScrollState: () => ScrollState) => void) | undefined;
    /** 
         * Content of the scrollable area.
         */
    children?: React.ReactNode;
};
/** 
 * A component that wraps content to make it scrollable.
 *
 * @remarks
 * Use when you need to make an area within the page independently scrollable,
 * such as paragraphs of long text or a list of items.
 *
 * For cycling through related items like images or slides, consider using `<Carousel/>` instead.
 *
 * Note that Scrollable always takes up 100% of its parent's width and height.
 * To constrain the scroll container's dimensions, wrap it in a `<Box/>` component.
 *
 * @example
 * ```tsx
 * <Box height={200}>
 *   <Scrollable>
 *     <Text>Long scrollable content here...</Text>
 *   </Scrollable>
 * </Box>
 * ```
 *
 * @param props - The component props
 * @returns A JSX element
 */
export declare function Scrollable(props: ScrollableProps): React.JSX.Element;
