"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get DevicePixelRatioMonitor () {
        return DevicePixelRatioMonitor;
    },
    get getDevicePixelRatio () {
        return getDevicePixelRatio;
    },
    get useDevicePixelRatio () {
        return useDevicePixelRatio;
    }
});
const _mobx = require("mobx");
const _react = require("react");
class DevicePixelRatioMonitor {
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
        this[_mobx.$mobx].reportObserved();
        return this.window?.devicePixelRatio ?? 1;
    }
    constructor(window1){
        this.window = window1;
        this.onChanged = ()=>{
            this[_mobx.$mobx].reportChanged();
            this.stopTracking();
            this.startTracking();
        };
        this[_mobx.$mobx] = (0, _mobx.createAtom)('DevicePixelRatio', ()=>this.startTracking(), ()=>this.stopTracking());
    }
}
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const monitor = new DevicePixelRatioMonitor(globalWindow);
function useDevicePixelRatio() {
    return (0, _react.useSyncExternalStore)(subscribeDevicePixelRatio, getClientDevicePixelRatioValue, getServerDevicePixelRatioValue);
}
function getDevicePixelRatio() {
    return monitor.value;
}
const computedDevicePixelRatio = (0, _mobx.computed)(getDevicePixelRatio);
const subscribeDevicePixelRatio = (callback)=>(0, _mobx.observe)(computedDevicePixelRatio, callback);
const getClientDevicePixelRatioValue = ()=>computedDevicePixelRatio.get();
const getServerDevicePixelRatioValue = ()=>1;
