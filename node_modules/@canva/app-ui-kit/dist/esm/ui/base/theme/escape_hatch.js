import { autorun, reaction } from 'mobx';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from './internal';
export function useThemeValues(ref, cssProperties, maybeStore) {
    const context = useContext(ThemeContext);
    const store = maybeStore ?? context.store;
    const [value, setValue] = useState();
    const callbackRef = useRef(undefined);
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
    const timeoutRef = useRef(undefined);
    useEffect(()=>reaction(()=>store.currentTheme, () => timeoutRef.current = window.setTimeout(()=>callbackRef.current?.()), {
            fireImmediately: true
        }), [
        store
    ]);
    useEffect(()=>()=>window.clearTimeout(timeoutRef.current), []);
    return value;
}
export function WithThemeValues({ properties, children }) {
    const ref = useRef(null);
    const values = useThemeValues(ref, properties);
    return children(ref, values);
}
export function useThemedMedia(media, maybeStore) {
    const context = useContext(ThemeContext);
    const store = maybeStore ?? context.store;
    const [theme, setTheme] = useState(store.currentTheme);
    useEffect(()=>autorun(()=>setTheme(store.currentTheme)), [
        store
    ]);
    if (theme == null) return undefined;
    const themedMediaEntries = Object.entries(media);
    return themedMediaEntries.reduce((themedMedia, [key, mediaOptions])=>{
        themedMedia[key] = mediaOptions?.[theme];
        return themedMedia;
    }, {});
}
export function WithThemedMedia({ media, children }) {
    const values = useThemedMedia(media);
    return children(values);
}
