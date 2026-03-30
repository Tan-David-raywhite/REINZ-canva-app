import type * as React from 'react';
import type { ReferenceObject } from '../../internal/reference_wrapper';
export type UseBackendOptions = {
    placement: Placement
    enableFlip: boolean
    enableShift?: boolean
    rtlAware: boolean
    offset: Offset
    boundary: Boundary
    boundaryPadding: BoundaryPadding
    onCalculateLayout?: OnCalculateLayout
};
export type Placement = `${Exclude<HorizontalPlacement, 'center'>}-${VerticalPlacement}` | `${Exclude<VerticalPlacement, 'center'>}-${HorizontalPlacement}`;
type HorizontalPlacement = 'start' | 'center' | 'end';
type VerticalPlacement = 'top' | 'center' | 'bottom';
export type Offset = {
    main: number;
    cross: number;
};
export type Boundary = 'viewport' | HTMLElement;
export type BoundaryPadding = '0' | '1u';
export type OnCalculateLayout = (options: OnCalculateLayoutOptions) => void;
export type OnCalculateLayoutOptions = {
    reference: Rect;
    content: Rect;
    available: {
        height: number;
        width: number;
    };
};
export type Rect = {
    top: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
};
export type PaddingRect = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type Backend = {
    setReference: (reference: Reference | null) => void
    contentProps: ElementProps<Content>
    setArrow: (arrow: Arrow | null) => void
    update: () => void
};
type ElementProps<T> = React.PropsWithoutRef<Partial<React.HTMLProps<T>>> & {
    ref: React.Ref<T>;
};
export type Reference = HTMLElement | ReferenceObject;
export type Content = HTMLDivElement;
export type Arrow = HTMLElement;
export type UseBackend = (options: UseBackendOptions) => Backend;
export declare const useBackend: UseBackend;
export {};
