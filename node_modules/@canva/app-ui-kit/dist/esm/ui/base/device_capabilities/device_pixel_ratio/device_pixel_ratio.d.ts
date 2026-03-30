import type { IAtom } from 'mobx';
import { $mobx } from 'mobx';
export type _MediaQueryList = {
    addListener: (listener: () => void) => void;
    removeListener: (listener: () => void) => void;
};
export interface DevicePixelRatioMonitor {
    [$mobx]: IAtom;
}
export declare class DevicePixelRatioMonitor {
    private readonly window;
    private match?;
    constructor(window: {
        devicePixelRatio: number;
        matchMedia?: (query: string) => _MediaQueryList;
    } | undefined);
    private startTracking;
    private stopTracking;
    private readonly onChanged;
    get value(): number;
}
export declare function useDevicePixelRatio(): number;
export declare function getDevicePixelRatio(): number;
