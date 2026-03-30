import * as React from 'react';
import type { Theme, ThemeData } from '../../../../../base/theme/theme';
/** 
 * The props for the `ThemeBoundary` component.
 */
export type ThemeBoundaryProps = {
    /** 
         * The children to render.
         *
         * The className provided by `data` _must_ be applied to the immediate child element of this component.
         *
         * @example
         * <ThemeBoundary
         *   theme="light"
         * >
         *   {data => (
         *     <Box background="page" className={data.className}>
         *       This content will be rendered in light theme regardless of user preference
         *     </Box>
         *   )}
         * </ThemeBoundary>
         */
    children: (data: ThemeData) => React.ReactElement;
    /**
         * 
         * The theme to override.
         *
         * @remark
         * If not provided, the theme will be inherited from the parent.
         *
         * @defaultValue - undefined.
         */
    theme?: Theme;
};
/**
 * 
 * A component that allows you to override the theme for a subtree.
 * Useful when you need to render a preview section that should always be rendered in a specific theme, regardless of the user's preference.
 *
 * @example
 * <ThemeBoundary
 *   theme="light"
 *  >
 *    {data => (
 *      <Box background="page" className={data.className}>
 *        This content will be rendered in light theme regardless of user preference
 *      </Box>
 *    )}
 * </ThemeBoundary>
 *
 */
export declare function ThemeBoundary({ children, theme }: ThemeBoundaryProps): React.JSX.Element;
