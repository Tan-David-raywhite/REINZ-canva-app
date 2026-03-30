import { computed, observe } from 'mobx';
import { useSyncExternalStore } from 'react';
import { smallBreakpoint } from '../metrics/metrics';
import { computedScreenSize, getScreenSize } from './screen';
export function usePreferSameTab() {
    return useSyncExternalStore(subscribePreferSameTab, getClientPreferSameTab, getServerPreferSameTab);
}
export function preferSameTab(screenSize = getScreenSize()) {
    const { width: screenWidth, height: screenHeight } = screenSize;
    return screenWidth > 0 && screenHeight > 0
     && (screenWidth < smallBreakpoint || screenHeight < smallBreakpoint);
}
const computedPreferSameTab = computed(()=>{
    return preferSameTab(computedScreenSize.get());
});
const subscribePreferSameTab = (callback)=>observe(computedPreferSameTab, callback);
const getClientPreferSameTab = ()=>computedPreferSameTab.get();
const getServerPreferSameTab = ()=>false;
