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
    get useKeyboardNavigation () {
        return useKeyboardNavigation;
    },
    get useStatelessKeyboardNavigation () {
        return useStatelessKeyboardNavigation;
    }
});
const _stable_function = require('../../../../base/react/stable_function');
const _react = _interop_require_wildcard(require("react"));
const _access_mode_state = require('../access_mode_state/access_mode_state');
const _key_combinations = require('../../key_combinations/key_combinations');
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
function useKeyboardNavigation(size, options = {}) {
    const { onChange, ...opts } = options;
    const [index, setIndex] = _react.useState(()=>-1);
    const sizeRef = _react.useRef(size);
    const indexRef = _react.useRef(index);
    const onChangeRef = _react.useRef(onChange);
    sizeRef.current = size;
    indexRef.current = index;
    onChangeRef.current = onChange;
    const moveTo = _react.useCallback((index = -1)=>{
        if (indexRef.current !== index) {
            setIndex(indexRef.current = index);
            onChangeRef.current?.(indexRef.current);
        }
    }, []);
    const moveToFirst = _react.useCallback(()=>moveTo(0), [
        moveTo
    ]);
    const moveToLast = _react.useCallback(()=>moveTo(sizeRef.current - 1), [
        moveTo
    ]);
    _react.useEffect(()=>{
        moveTo(size != null ? Math.min(indexRef.current, size - 1) : -1);
    }, [
        size,
        moveTo
    ]);
    const { ref } = useStatelessKeyboardNavigation(size, ()=>indexRef.current, {
        ...opts,
        onChange: moveTo
    });
    return {
        ref,
        index,
        moveTo,
        moveToFirst,
        moveToLast
    };
}
function useStatelessKeyboardNavigation(size, index, options = {}) {
    const { direction = 'vertical', mode = 'default', handleInputs = false, extraNavigation = true, onChange, onPrev, onNext, onFirst, onLast, onSelect, onExit } = options;
    const getIndex = typeof index === 'function' ? index : ()=>index;
    const onPrevKey = (0, _stable_function.useStableFunction)((e)=>{
        e.preventDefault();
        if (e.isComposing)
            return;
        const index = getIndex();
        const newIndex = mode === 'cycle' ? (index - 1 + size) % size : Math.max(0, index - 1);
        onPrev?.(e, index);
        if (newIndex !== index && newIndex === 0) onFirst?.(e, index);
        if (newIndex !== index) onChange?.(newIndex);
        _access_mode_state.accessModeState.setAccessMode('keyboard');
    });
    const onNextKey = (0, _stable_function.useStableFunction)((e)=>{
        e.preventDefault();
        if (e.isComposing)
            return;
        const index = getIndex();
        const newIndex = mode === 'cycle' ? (index + 1) % size : Math.min(size - 1, index + 1);
        onNext?.(e, index);
        if (newIndex !== index && newIndex === size - 1) onLast?.(e, index);
        if (newIndex !== index) onChange?.(newIndex);
        _access_mode_state.accessModeState.setAccessMode('keyboard');
    });
    const onFirstKey = (0, _stable_function.useStableFunction)((e)=>{
        e.preventDefault();
        const index = getIndex();
        onFirst?.(e, index);
        if (index !== 0) onChange?.(0);
        _access_mode_state.accessModeState.setAccessMode('keyboard');
    });
    const onLastKey = (0, _stable_function.useStableFunction)((e)=>{
        e.preventDefault();
        const index = getIndex();
        onLast?.(e, index);
        if (index !== size - 1) onChange?.(size - 1);
        _access_mode_state.accessModeState.setAccessMode('keyboard');
    });
    const onSpaceKey = (0, _stable_function.useStableFunction)((e)=>{
        onSelect?.(e, getIndex());
    });
    const onSelectWithEnter = (0, _stable_function.useStableFunction)((e)=>{
        if (e.keyCode === 229)
            return;
        onSelect?.(e, getIndex());
    });
    const onEscOrTabKey = (0, _stable_function.useStableFunction)((e)=>{
        if (e.isComposing)
            return;
        onExit?.(e, getIndex());
    });
    const keyCombinationMap = _react.useMemo(()=>{
        const prevKey = direction === 'vertical' ? 'ArrowUp' : 'previous';
        const nextKey = direction === 'vertical' ? 'ArrowDown' : 'next';
        const map = [
            [
                prevKey,
                onPrevKey
            ],
            [
                nextKey,
                onNextKey
            ],
            [
                ' ',
                onSpaceKey
            ],
            [
                'Enter',
                onSelectWithEnter
            ],
            [
                'Escape',
                onEscOrTabKey
            ],
            [
                'Tab',
                onEscOrTabKey
            ],
            [
                (0, _key_combinations.shift)('Tab'),
                onEscOrTabKey
            ]
        ];
        if (extraNavigation) map.push([
            'Home',
            onFirstKey
        ], [
            (0, _key_combinations.option)(prevKey),
            onFirstKey
        ], [
            (0, _key_combinations.command)(prevKey),
            onFirstKey
        ], [
            'End',
            onLastKey
        ], [
            (0, _key_combinations.option)(nextKey),
            onLastKey
        ], [
            (0, _key_combinations.command)(nextKey),
            onLastKey
        ]);
        return map;
    }, [
        direction,
        extraNavigation,
        onPrevKey,
        onNextKey,
        onFirstKey,
        onLastKey,
        onSelectWithEnter,
        onSpaceKey,
        onEscOrTabKey
    ]);
    const { ref } = (0, _key_combinations.useKeyCombinationHandler)(keyCombinationMap, {
        handleInputs
    });
    return {
        ref
    };
}
