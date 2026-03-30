import { makeObservable } from '../../../base/make_observable/make_observable';
import { Preconditions, UnreachableError } from '../../../base/preconditions';
import classNames from 'classnames';
import { action, computed, observable } from 'mobx';
import * as React from 'react';
import preloadSelectors from './preload.css';
import styles from './theme.css';
export const stripGlobal = (className)=>className?.replace(/^\s*:global\(\.(.+?)\)\s*$/, '$1') ?? '';
let themeClasses;
let themedClass;
function getThemeClassMap() {
    if (themeClasses == null) themeClasses = new Map([
        [
            'light',
            stripGlobal(styles.themeLight)
        ],
        [
            'dark',
            stripGlobal(styles.themeDark)
        ]
    ]);
    return themeClasses;
}
function getThemedClass() {
    if (themedClass == null) themedClass = stripGlobal(styles.themed);
    return themedClass;
}
export function getThemeClasses(theme) {
    const themeClasses = getThemeClassMap();
    return [
        getThemedClass(),
        Preconditions.checkExists(themeClasses.get(theme))
    ];
}
export function getAllPreloadClasses() {
    return [
        getThemedClass(),
        ...getThemeClassMap().values(),
        stripGlobal(preloadSelectors.themePreloadModeClassic)
    ];
}
export class ThemeStore {
    static _makeObservable(instance) {
        makeObservable(instance, {
            parent: observable.ref,
            _appearance: observable.ref,
            themeMapping: observable.deep,
            setParent: action,
            setAppearance: action,
            appearance: computed,
            setThemeMapping: action,
            currentTheme: computed
        });
    }
    setParent(store) {
        this.parent = store;
    }
    setAppearance(appearance) {
        this._appearance = appearance;
    }
    get appearance() {
        return this._appearance ?? this.parent?.appearance;
    }
    setThemeMapping(themeMapping) {
        this.themeMapping = themeMapping;
    }
    get currentTheme() {
        const appearance = this.appearance;
        if (appearance == null)
            return undefined;
        return this.themeMapping[appearance] ?? this.parent?.currentTheme;
    }
    constructor(){
        this.parent = (ThemeStore._makeObservable(this), undefined);
        this.themeMapping = {};
    }
}
export class ThemeData {
    static _makeObservable(instance) {
        makeObservable(instance, {
            classNames: computed,
            className: computed,
            mode: computed
        });
    }
    get classNames() {
        const { currentTheme } = this.store;
        if (currentTheme == null) return [];
        return getThemeClasses(currentTheme);
    }
    get className() {
        const classes = this.classNames;
        if (classes.length === 0) return undefined;
        return classNames(classes);
    }
    get mode() {
        switch(this.store.appearance){
            case 'dark':
            case 'light':
                return 'modern';
            case 'classicDark':
            case 'classicLight':
                return 'classic';
            case undefined:
                return undefined;
            default:
                throw new UnreachableError(this.store.appearance);
        }
    }
    constructor(store){
        this.store = (ThemeData._makeObservable(this), undefined);
        this.store = store;
    }
}
export const rootThemeStore = new ThemeStore();
const rootThemeData = new ThemeData(rootThemeStore);
export const ThemeContext = React.createContext({
    store: rootThemeStore,
    data: rootThemeData
});
