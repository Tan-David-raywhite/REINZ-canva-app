import * as React from 'react';
import type { TypographySize } from '../typography';
/** 
 * The size of a `Text` component that's loading.
 */
export type TextPlaceholderSize = TypographySize;
/** 
 * The props for the `TextPlaceholder` component.
 */
export type TextPlaceholderProps = {
    /** 
         * The size of the `Text` component that's loading.
         */
    size?: TextPlaceholderSize;
};
/** 
 * Visually represents a `Text` component while it's loading.
 */
export declare function TextPlaceholder(props: TextPlaceholderProps): React.JSX.Element;
/** 
 * The size of a `Title` component that's loading.
 */
export type TitlePlaceholderSize = TypographySize;
/** 
 * The props for the `TitlePlaceholder` component.
 */
export type TitlePlaceholderProps = {
    /** 
         * The size of the `Title` component that's loading.
         */
    size?: TitlePlaceholderSize;
};
/** 
 * Visually represents a `Title` component while it's loading.
 */
export declare function TitlePlaceholder(props: TitlePlaceholderProps): React.JSX.Element;
