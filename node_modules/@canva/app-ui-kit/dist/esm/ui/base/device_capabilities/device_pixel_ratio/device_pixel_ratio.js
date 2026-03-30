import { $mobx, computed, createAtom, observe } from 'mobx';
import { useSyncExternalStore } from 'react';
export class DevicePixelRatioMonitor {
    startTracking() {
        if (this.window?.matchMedia && !this.match) {
            this.match = this.window.matchMedia(`(resolution: ${this.window.devicePixelRatio}dppx)`);
            this.match.addListener(this.onChanged);
        }
    }
    stopTracking() {
        if (this.match) {
            this.match.removeListener(this.onChanged);
            this.match = undefined;
        }
    }
    get value() {
        this[$mobx].reportObserved();
        return this.window?.devicePixelRatio ?? 1;
    }
    constructor(window1){
        this.window = window1;
        this.onChanged = ()=>{
            this[$mobx].reportChanged();
            this.stopTracking();
            this.startTracking();
        };
        this[$mobx] = createAtom('DevicePixelRatio', ()=>this.startTracking(), ()=>this.stopTracking());
    }
}
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const monitor = new DevicePixelRatioMonitor(globalWindow);
export function useDevicePixelRatio() {
    return useSyncExternalStore(subscribeDevicePixelRatio, getClientDevicePixelRatioValue, getServerDevicePixelRatioValue);
}
export function getDevicePixelRatio() {
    return monitor.value;
}
const computedDevicePixelRatio = computed(getDevicePixelRatio);
const subscribeDevicePixelRatio = (callback)=>observe(computedDevicePixelRatio, callback);
const getClientDevicePixelRatioValue = ()=>computedDevicePixelRatio.get();
const getServerDevicePixelRatioValue = ()=>1;
