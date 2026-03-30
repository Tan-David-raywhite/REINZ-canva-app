import { useCallback, useEffect, useMemo } from 'react';
import { visuallyHiddenClass } from '../../screen_reader_content/screen_reader_content';
import { updateLiveRegionContent } from './announcer_utils';
const FALLBACK_ASSERTIVE_ID = 'canva-a11y-fallback-assertive';
const FALLBACK_POLITE_ID = 'canva-a11y-fallback-polite';
function createLiveRegion(ariaLive, id, document) {
    const element = document.createElement('div');
    element.id = id;
    element.setAttribute('aria-live', ariaLive);
    element.setAttribute('aria-atomic', 'true');
    element.setAttribute('data-announcer-region', ariaLive);
    element.className = visuallyHiddenClass;
    return element;
}
function ensureFallbackRegions(document) {
    let assertiveRegion = null;
    let politeRegion = null;
    assertiveRegion = document.getElementById(FALLBACK_ASSERTIVE_ID);
    if (!assertiveRegion) {
        assertiveRegion = createLiveRegion('assertive', FALLBACK_ASSERTIVE_ID, document);
        document.body.prepend(assertiveRegion);
    }
    politeRegion = document.getElementById(FALLBACK_POLITE_ID);
    if (!politeRegion) {
        politeRegion = createLiveRegion('polite', FALLBACK_POLITE_ID, document);
        document.body.prepend(politeRegion);
    }
    return {
        assertiveRegion,
        politeRegion
    };
}
export function removeFallbackRegions() {
    const document = typeof window !== 'undefined' ? window.document : undefined;
    if (!document) return;
    const assertiveRegion = document.getElementById?.(FALLBACK_ASSERTIVE_ID);
    assertiveRegion?.remove();
    const politeRegion = document.getElementById?.(FALLBACK_POLITE_ID);
    politeRegion?.remove();
}
async function announceFallback(message, document, priority = 'medium') {
    if (!message) return;
    const { assertiveRegion, politeRegion } = ensureFallbackRegions(document);
    if (assertiveRegion && (priority === 'critical' || priority === 'high')) await updateLiveRegionContent(assertiveRegion, message);
    else if (politeRegion) await updateLiveRegionContent(politeRegion, message);
}
function deferFallbackAnnouncement(message, document, priority) {
    let announced = false;
    return ()=>{
        if (announced) return;
        announced = true;
        announceFallback(message, document, priority);
    };
}
const NO_OP_CONTROLLER = {
    announce: ()=>{},
    deferAnnouncement: ()=>()=>{}
};
export function useFallbackAnnouncer(shouldUseFallback = true) {
    const globalWindow = typeof window !== 'undefined' ? window : undefined;
    useEffect(()=>{
        if (shouldUseFallback && globalWindow?.document) ensureFallbackRegions(globalWindow.document);
    }, [
        shouldUseFallback,
        globalWindow
    ]);
    const announce = useCallback((message, priority = 'medium')=>{
        if (shouldUseFallback && globalWindow?.document) announceFallback(message, globalWindow.document, priority);
    }, [
        shouldUseFallback,
        globalWindow
    ]);
    const deferAnnouncement = useCallback((message, priority = 'medium')=>{
        if (shouldUseFallback && globalWindow?.document)
            return deferFallbackAnnouncement(message, globalWindow.document, priority);
        else
            return ()=>{};
    }, [
        shouldUseFallback,
        globalWindow
    ]);
    return useMemo(()=>{
        return shouldUseFallback ? {
            announce,
            deferAnnouncement
        } : NO_OP_CONTROLLER;
    }, [
        shouldUseFallback,
        announce,
        deferAnnouncement
    ]);
}
