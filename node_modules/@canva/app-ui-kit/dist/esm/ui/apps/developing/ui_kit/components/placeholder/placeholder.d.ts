import * as React from 'react';
/** 
 * The shape of a placeholder.
 * The `"circle"` and `"square"` shapes take the width of their parent container.
 * The `"rectangle"` and `"sharpRectangle"` shapes take the width *and* height of their parent container.
 */
export type PlaceholderShape = 'circle' | 'square' | 'rectangle' | 'sharpRectangle';
/** 
 * The props for the `Placeholder` component.
 */
export type PlaceholderProps = {
    /** 
         * The shape of the placeholder.
         * The `"circle"` and `"square"` shapes take the width of their parent container.
         * The `"rectangle"` and `"sharpRectangle"` shapes take the width *and* height of their parent container.
         */
    shape: PlaceholderShape;
};
/** 
 * A shape for visualizing content as it's loading.
 */
export declare function Placeholder(props: PlaceholderProps): React.JSX.Element;
