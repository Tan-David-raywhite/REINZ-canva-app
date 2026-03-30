import * as React from 'react';
/**
 * 
 * The possible sizes of a loading indicator icon.
 */
export declare const sizes: readonly ["small", "medium"];
/**
 * 
 * The size of the loading indicator icon.
 */
export type Size = (typeof sizes)[number];
/** 
 * The props for the `LoadingIndicator` component.
 */
export type LoadingIndicatorProps = {
    /** 
         * The size of the loading indicator icon.
         * @defaultValue "medium"
         */
    size?: Size;
};
/** 
 * An animated icon that indicates if content is loading or an action is pending.
 */
export declare function LoadingIndicator(props: LoadingIndicatorProps): React.JSX.Element;
