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
    get useAnnounceOnMount () {
        return useAnnounceOnMount;
    },
    get useAnnounceOnUpdate () {
        return useAnnounceOnUpdate;
    },
    get useAnnounceOnce () {
        return useAnnounceOnce;
    },
    get useAnnounceWhen () {
        return useAnnounceWhen;
    },
    get useAnnouncer () {
        return useAnnouncer;
    }
});
const _react = require("react");
const _announcer_fallback = require("./announcer_fallback");
const _announcer_instance_store = require("./announcer_instance_store");
function useAnnouncer() {
    const announcer = (0, _react.useSyncExternalStore)(_announcer_instance_store.announcerInstanceStore.subscribe, _announcer_instance_store.announcerInstanceStore.getSnapshot, _announcer_instance_store.announcerInstanceStore.getServerSnapshot);
    const shouldUseFallback = !announcer;
    const fallbackAnnouncer = (0, _announcer_fallback.useFallbackAnnouncer)(shouldUseFallback);
    return announcer ?? fallbackAnnouncer;
}
function useAnnounceOnce(message, options = {}) {
    const { priority = 'medium', shouldReset } = options;
    const announcer = useAnnouncer();
    const hasAnnounced = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (shouldReset) hasAnnounced.current = false;
    }, [
        shouldReset
    ]);
    return (0, _react.useCallback)(()=>{
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
function useAnnounceOnUpdate(message, dependency, options = {}) {
    const { priority = 'medium', debounceMs } = options;
    const announcer = useAnnouncer();
    const isFirstRender = (0, _react.useRef)(true);
    const timeoutRef = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
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
function useAnnounceOnMount(message, options = {}) {
    const { priority = 'medium' } = options;
    const isFirstRender = (0, _react.useRef)(true);
    const announce = useAnnounceOnce(message, {
        priority
    });
    (0, _react.useEffect)(()=>{
        if (isFirstRender.current) {
            announce();
            isFirstRender.current = false;
        }
    }, [
        announce
    ]);
}
function useAnnounceWhen(message, condition, options = {}) {
    const { priority = 'medium', skipInitialRender } = options;
    const prevConditionRef = (0, _react.useRef)(condition);
    const isFirstRender = (0, _react.useRef)(true);
    const shouldReset = !condition;
    const announce = useAnnounceOnce(message, {
        priority,
        shouldReset
    });
    (0, _react.useEffect)(()=>{
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
