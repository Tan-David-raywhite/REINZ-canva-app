import * as React from 'react';
import type { Direction } from '../../../../../base/provider/provider';
/** 
 * The props for the `AppUiProvider` component.
 */
export type AppUiProviderProps = {
    /** 
         * The content of the app.
         */
    children: React.ReactNode;
};
export declare const toEaselDirection: (direction: unknown) => Direction;
/** 
 * A wrapper that provides theming and user preferences to App UI Kit components.
 * This component must appear once — and only once — at the root of an app, as the other components depend on it.
 */
export declare function AppUiProvider({ children }: AppUiProviderProps): React.JSX.Element;
