import * as React from 'react';
import type { Appearance, Theme } from './theme';
export declare const stripGlobal: (className?: string) => string;
export declare function getThemeClasses(theme: Theme): string[];
export declare function getAllPreloadClasses(): string[];
export declare class ThemeStore {
    private parent?;
    private _appearance?;
    private themeMapping;
    setParent(store: ThemeStore | undefined): void;
    setAppearance(appearance: Appearance | undefined): void;
    get appearance(): Appearance | undefined;
    setThemeMapping(themeMapping: Partial<Record<Appearance, Theme>>): void;
    get currentTheme(): Theme | undefined;
}
export declare class ThemeData {
    private store;
    constructor(store: ThemeStore);
    get classNames(): string[];
    get className(): string | undefined;
    get mode(): 'modern' | 'classic' | undefined;
}
export type ThemeContextValue = {
    store: ThemeStore;
    data: ThemeData;
};
export declare const rootThemeStore: ThemeStore;
export declare const ThemeContext: React.Context<ThemeContextValue>;
