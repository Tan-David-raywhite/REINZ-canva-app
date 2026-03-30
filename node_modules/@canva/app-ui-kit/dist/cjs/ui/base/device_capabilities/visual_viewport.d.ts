type VisualViewportProxy = Pick<VisualViewport, 'offsetLeft' | 'offsetTop' | 'pageLeft' | 'pageTop' | 'width' | 'height' | 'scale' | 'addEventListener' | 'removeEventListener'>;
export declare const getVisualViewport: (targetWindow?: Window | undefined) => VisualViewportProxy | null;
export type ViewportContainerSize = {
    offsetLeft: number;
    offsetTop: number;
    width: number;
    height: number;
};
export declare const getViewportContainerSize: (targetWindow?: Window | undefined) => ViewportContainerSize | null;
export declare function useViewportContainerSize(): null | ViewportContainerSize;
export declare function useViewportContainerSizeEffect(callback: (size: ViewportContainerSize | null) => (() => void) | void): void;
export {};
