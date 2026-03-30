import { MediaQueryPresenter } from './media_query_presenter';
export declare const queryPrefersDark = "(prefers-color-scheme: dark)";
export declare const queryPrefersLight = "(prefers-color-scheme: light)";
export type ColorScheme = 'light' | 'dark';
interface UseAdaptiveColorSchemeOptions {
    enabled: boolean
    presenter?: MediaQueryPresenter
}
export declare function useAdaptiveColorScheme({ enabled, presenter: providedPresenter, }: UseAdaptiveColorSchemeOptions): ColorScheme | undefined;
export {};
