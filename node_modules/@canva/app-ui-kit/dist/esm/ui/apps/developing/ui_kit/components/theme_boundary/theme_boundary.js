import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { ThemeBoundary as EaselThemeBoundary } from '../../../../../base/theme/theme';
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
 */ export function ThemeBoundary({ children, theme }) {
    return _jsx(EaselThemeBoundary, {
        light: theme,
        dark: theme,
        classicLight: theme,
        classicDark: theme,
        children: children
    });
}
