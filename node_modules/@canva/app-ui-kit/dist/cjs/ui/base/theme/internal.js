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
    get ThemeContext () {
        return ThemeContext;
    },
    get ThemeData () {
        return ThemeData;
    },
    get ThemeStore () {
        return ThemeStore;
    },
    get getAllPreloadClasses () {
        return getAllPreloadClasses;
    },
    get getThemeClasses () {
        return getThemeClasses;
    },
    get rootThemeStore () {
        return rootThemeStore;
    },
    get stripGlobal () {
        return stripGlobal;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _preconditions = require('../../../base/preconditions');
const _classnames = _interop_require_default(require("classnames"));
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _preloadcss = _interop_require_default(require("./preload.css"));
const _themecss = _interop_require_default(require("./theme.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const stripGlobal = (className)=>className?.replace(/^\s*:global\(\.(.+?)\)\s*$/, '$1') ?? '';
let themeClasses;
let themedClass;
function getThemeClassMap() {
    if (themeClasses == null) themeClasses = new Map([
        [
            'light',
            stripGlobal(_themecss.default.themeLight)
        ],
        [
            'dark',
            stripGlobal(_themecss.default.themeDark)
        ]
    ]);
    return themeClasses;
}
function getThemedClass() {
    if (themedClass == null) themedClass = stripGlobal(_themecss.default.themed);
    return themedClass;
}
function getThemeClasses(theme) {
    const themeClasses = getThemeClassMap();
    return [
        getThemedClass(),
        _preconditions.Preconditions.checkExists(themeClasses.get(theme))
    ];
}
function getAllPreloadClasses() {
    return [
        getThemedClass(),
        ...getThemeClassMap().values(),
        stripGlobal(_preloadcss.default.themePreloadModeClassic)
    ];
}
class ThemeStore {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            parent: _mobx.observable.ref,
            _appearance: _mobx.observable.ref,
            themeMapping: _mobx.observable.deep,
            setParent: _mobx.action,
            setAppearance: _mobx.action,
            appearance: _mobx.computed,
            setThemeMapping: _mobx.action,
            currentTheme: _mobx.computed
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
class ThemeData {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            classNames: _mobx.computed,
            className: _mobx.computed,
            mode: _mobx.computed
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
        return (0, _classnames.default)(classes);
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
                throw new _preconditions.UnreachableError(this.store.appearance);
        }
    }
    constructor(store){
        this.store = (ThemeData._makeObservable(this), undefined);
        this.store = store;
    }
}
const rootThemeStore = new ThemeStore();
const rootThemeData = new ThemeData(rootThemeStore);
const ThemeContext = _react.createContext({
    store: rootThemeStore,
    data: rootThemeData
});
