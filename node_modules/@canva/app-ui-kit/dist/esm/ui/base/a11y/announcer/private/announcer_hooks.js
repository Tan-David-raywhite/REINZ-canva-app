import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';
import { useFallbackAnnouncer } from './announcer_fallback';
import { announcerInstanceStore } from './announcer_instance_store';
export function useAnnouncer() {
    const announcer = useSyncExternalStore(announcerInstanceStore.subscribe, announcerInstanceStore.getSnapshot, announcerInstanceStore.getServerSnapshot);
    const shouldUseFallback = !announcer;
    const fallbackAnnouncer = useFallbackAnnouncer(shouldUseFallback);
    return announcer ?? fallbackAnnouncer;
}
export function useAnnounceOnce(message, options = {}) {
    const { priority = 'medium', shouldReset } = options;
    const announcer = useAnnouncer();
    const hasAnnounced = useRef(false);
    useEffect(()=>{
        if (shouldReset) hasAnnounced.current = false;
    }, [
        shouldReset
    ]);
    return useCallback(()=>{
        if (!hasAnnounced.current) {
            hasAnnounced.current = true;
            announcer.announce(message, priority);
        }
    }, [
        announcer,
        message,
        priority
    ]);
}
export function useAnnounceOnUpdate(message, dependency, options = {}) {
    const { priority = 'medium', debounceMs } = options;
    const announcer = useAnnouncer();
    const isFirstRender = useRef(true);
    const timeoutRef = useRef(undefined);
    useEffect(()=>{
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (debounceMs) {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(()=>{
                announcer.announce(message, priority);
            }, debounceMs);
        } else
        announcer.announce(message, priority);
        return ()=>{
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [
        dependency
    ]);
}
export function useAnnounceOnMount(message, options = {}) {
    const { priority = 'medium' } = options;
    const isFirstRender = useRef(true);
    const announce = useAnnounceOnce(message, {
        priority
    });
    useEffect(()=>{
        if (isFirstRender.current) {
            announce();
            isFirstRender.current = false;
        }
    }, [
        announce
    ]);
}
export function useAnnounceWhen(message, condition, options = {}) {
    const { priority = 'medium', skipInitialRender } = options;
    const prevConditionRef = useRef(condition);
    const isFirstRender = useRef(true);
    const shouldReset = !condition;
    const announce = useAnnounceOnce(message, {
        priority,
        shouldReset
    });
    useEffect(()=>{
        if (isFirstRender.current && condition && !skipInitialRender)
            announce();
        if (isFirstRender.current)
            isFirstRender.current = false;
        if (condition && !prevConditionRef.current)
            announce();
        prevConditionRef.current = condition;
    }, [
        condition
    ]);
}
