import type { Backend, UseBackendOptions } from './backend';
export declare function useFloatingUiBackend({ placement: backendPlacement, enableFlip, enableShift, rtlAware, offset: backendOffset, boundary, boundaryPadding: backendBoundaryPadding, onCalculateLayout, }: UseBackendOptions): Backend;
