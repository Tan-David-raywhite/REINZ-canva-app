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
    get preferSameTab () {
        return preferSameTab;
    },
    get usePreferSameTab () {
        return usePreferSameTab;
    }
});
const _mobx = require("mobx");
const _react = require("react");
const _metrics = require('../metrics/metrics');
const _screen = require("./screen");
function usePreferSameTab() {
    return (0, _react.useSyncExternalStore)(subscribePreferSameTab, getClientPreferSameTab, getServerPreferSameTab);
}
function preferSameTab(screenSize = (0, _screen.getScreenSize)()) {
    const { width: screenWidth, height: screenHeight } = screenSize;
    return screenWidth > 0 && screenHeight > 0
     && (screenWidth < _metrics.smallBreakpoint || screenHeight < _metrics.smallBreakpoint);
}
const computedPreferSameTab = (0, _mobx.computed)(()=>{
    return preferSameTab(_screen.computedScreenSize.get());
});
const subscribePreferSameTab = (callback)=>(0, _mobx.observe)(computedPreferSameTab, callback);
const getClientPreferSameTab = ()=>computedPreferSameTab.get();
const getServerPreferSameTab = ()=>false;
