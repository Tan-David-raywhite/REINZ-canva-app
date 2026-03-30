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
    get WithThemeValues () {
        return WithThemeValues;
    },
    get WithThemedMedia () {
        return WithThemedMedia;
    },
    get useThemeValues () {
        return useThemeValues;
    },
    get useThemedMedia () {
        return useThemedMedia;
    }
});
const _mobx = require("mobx");
const _react = require("react");
const _internal = require("./internal");
function useThemeValues(ref, cssProperties, maybeStore) {
    const context = (0, _react.useContext)(_internal.ThemeContext);
    const store = maybeStore ?? context.store;
    const [value, setValue] = (0, _react.useState)();
    const callbackRef = (0, _react.useRef)(undefined);
    callbackRef.current = ()=>{
        const element = ref.current;
        if (element == null) return;
        const computedStyle = window.getComputedStyle(element);
        const cssPropertyEntries = Object.entries(cssProperties);
        setValue(cssPropertyEntries.reduce((acc, [key, cssProperty])=>{
            const value = computedStyle.getPropertyValue(cssProperty).trim();
            acc[key] = value === '' ? undefined : value;
            return acc;
        }, {}));
    };
    const timeoutRef = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>(0, _mobx.reaction)(()=>store.currentTheme, () => timeoutRef.current = window.setTimeout(()=>callbackRef.current?.()), {
            fireImmediately: true
        }), [
        store
    ]);
    (0, _react.useEffect)(()=>()=>window.clearTimeout(timeoutRef.current), []);
    return value;
}
function WithThemeValues({ properties, children }) {
    const ref = (0, _react.useRef)(null);
    const values = useThemeValues(ref, properties);
    return children(ref, values);
}
function useThemedMedia(media, maybeStore) {
    const context = (0, _react.useContext)(_internal.ThemeContext);
    const store = maybeStore ?? context.store;
    const [theme, setTheme] = (0, _react.useState)(store.currentTheme);
    (0, _react.useEffect)(()=>(0, _mobx.autorun)(()=>setTheme(store.currentTheme)), [
        store
    ]);
    if (theme == null) return undefined;
    const themedMediaEntries = Object.entries(media);
    return themedMediaEntries.reduce((themedMedia, [key, mediaOptions])=>{
        themedMedia[key] = mediaOptions?.[theme];
        return themedMedia;
    }, {});
}
function WithThemedMedia({ media, children }) {
    const values = useThemedMedia(media);
    return children(values);
}
