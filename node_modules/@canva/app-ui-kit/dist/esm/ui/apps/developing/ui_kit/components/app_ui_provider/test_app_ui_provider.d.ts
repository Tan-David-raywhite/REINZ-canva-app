import * as React from 'react';
import type { Direction } from '../../../../../base/provider/provider';
import type { Theme } from '../../../../../base/theme/theme';
/** 
 * The props for the `TestAppUiProvider` component.
 */
export type TestAppUiProviderProps = {
    /** 
         * The theme to initialize the provider with in the test environment.
         * @defaultValue light
         */
    theme?: Theme;
    /** 
         * Specifies the text direction based on the user's language.
         * 'LTR': 'Left to right'
         * 'RTL': 'Right to left'
         * @defaultValue 'LTR'
         */
    direction?: Direction;
    /** 
         * Whether to enable animations. When set to false, video autoplay is also disabled.
         * Intended for keeping visual regression tests stable.
         * @defaultValue true
         */
    enableAnimations?: boolean;
    /** 
         * The content of the app.
         */
    children: React.ReactNode;
};
/** 
 * A wrapper that provides theming and user preferences to App UI Kit components in test environments
 * This component must appear once — and only once — at the root of an app, as the other components depend on it.
 *
 * @remarks
 * This component must only be used in test environments. Use {@link AppUiProvider} in production environments.
 */
export declare function TestAppUiProvider({ children, theme, direction, enableAnimations, }: TestAppUiProviderProps): React.JSX.Element;
