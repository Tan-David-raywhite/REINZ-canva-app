import type { ReactElement, RefObject } from 'react';
import type { ThemeStore } from './internal';
import type { Theme } from './theme';
export declare function useThemeValues<K extends string>(
 ref: RefObject<HTMLElement | null>,
 cssProperties: Record<K, string>,
 maybeStore?: ThemeStore
): Partial<Record<K, string>> | undefined;
export type WithThemeValuesProps<K extends string, E extends HTMLElement> = {
    properties: Record<K, string>
    children: (ref: RefObject<E | null>, values?: Partial<Record<K, string>>) => ReactElement
};
export declare function WithThemeValues<K extends string, E extends HTMLElement>({ properties, children, }: WithThemeValuesProps<K, E>): ReactElement;
type ThemedMedia = Record<string, Record<Theme, unknown> | undefined>;
type ThemedMediaResult<T> = {
    [K in keyof T]: ThemedMediaEntry<T, K>;
};
type ThemedMediaEntry<T, K extends keyof T> = ValueOf<Exclude<T[K], undefined>> | (undefined extends T[K] ? undefined : never);
type ValueOf<T> = T[keyof T];
export declare function useThemedMedia<T extends ThemedMedia>(media: T, maybeStore?: ThemeStore): ThemedMediaResult<T> | undefined;
export type WithThemedMediaProps<T extends ThemedMedia> = {
    media: T
    children: (values?: ThemedMediaResult<T>) => ReactElement
};
export declare function WithThemedMedia<T extends ThemedMedia>({ media, children, }: WithThemedMediaProps<T>): ReactElement;
export {};
