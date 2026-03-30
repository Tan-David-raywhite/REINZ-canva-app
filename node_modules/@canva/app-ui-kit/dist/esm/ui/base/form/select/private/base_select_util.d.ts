import type * as React from 'react';
import type { Icon } from '../../../icons/icons';
export type SelectOption<T> = {
    value: T
    label?: string
    description?: string;
    Icon?: Icon
    disabled?: boolean
    options?: never;
    content?: never
};
export type SelectOptionGroup<T> = {
    label?: string
    options: SelectOption<T>[]
};
export type AreEqualFn<T> = (a: T | undefined, b: T | undefined) => boolean;
export type IsSelectedFn<T> = (option: SelectOption<T>, value: T[] | T | undefined) => boolean;
export type GetLabelFn<T> = (option: SelectOption<T>) => React.ReactNode;
export declare const defaultAreEqual: AreEqualFn<any>;
export declare const defaultIsSelected: IsSelectedFn<any>;
export declare const defaultGetLabel: GetLabelFn<any>;
export declare const joinLabels: (labels: React.ReactNode[]) => string | React.ReactNode[];
export declare function defaultFilterFn<T>(
 query: string,
 options: SelectOption<T>[],
 value: T[] | T | undefined,
 isSelected: IsSelectedFn<T>
): SelectOption<T>[];
export declare function normalizeOptionGroups<T>(options: (SelectOption<T> | SelectOptionGroup<T>)[]): SelectOptionGroup<T>[];
export declare function flattenOptions<T>(options: (SelectOption<T> | SelectOptionGroup<T>)[]): SelectOption<T>[];
export declare function deriveIdentifier(id: string, subid: number): string;
export declare function deriveIdentifier(id: string, subid?: number): string | undefined;
export declare function sliceOptionGroups<T>(optionGroups: SelectOptionGroup<T>[], start: number, end: number): (SelectOptionGroup<T> & {
    originalIndex: number;
    slice: [start: number, end: number];
})[];
