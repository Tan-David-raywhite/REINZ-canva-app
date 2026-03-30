import * as React from 'react';
export declare const enum LayerLevel {
    CONTENT = 0,
    PINS = 1,
    LIGHTBOXES = 2,
    MODALS = 3,
    COMPLIANCE_NOTICES = 4,
    TOASTS = 5,
    TOOLTIPS = 6
}
type Props = {
    open?: boolean
    children?: any
    level?: LayerLevel
    onOutsideLayerPointerDown?(event?: Event): void
    parentLayer?: HTMLElement
    markOutsideInert?: boolean
};
export declare class LayerError extends Error {
}
export type WithLayerParentProps = {
    parentLayer: HTMLDivElement | undefined
    children: React.ReactNode
};
export declare function WithLayerParent({ parentLayer, children, }: WithLayerParentProps): React.JSX.Element;
export declare const Layer: React.ComponentType<Props>;
export {};
