import { useStableFunction } from '../../../../base/react/stable_function';
import * as React from 'react';
import { accessModeState } from '../access_mode_state/access_mode_state';
import { command, option, shift, useKeyCombinationHandler } from '../../key_combinations/key_combinations';
export function useKeyboardNavigation(size, options = {}) {
    const { onChange, ...opts } = options;
    const [index, setIndex] = React.useState(()=>-1);
    const sizeRef = React.useRef(size);
    const indexRef = React.useRef(index);
    const onChangeRef = React.useRef(onChange);
    sizeRef.current = size;
    indexRef.current = index;
    onChangeRef.current = onChange;
    const moveTo = React.useCallback((index = -1)=>{
        if (indexRef.current !== index) {
            setIndex(indexRef.current = index);
            onChangeRef.current?.(indexRef.current);
        }
    }, []);
    const moveToFirst = React.useCallback(()=>moveTo(0), [
        moveTo
    ]);
    const moveToLast = React.useCallback(()=>moveTo(sizeRef.current - 1), [
        moveTo
    ]);
    React.useEffect(()=>{
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
export function useStatelessKeyboardNavigation(size, index, options = {}) {
    const { direction = 'vertical', mode = 'default', handleInputs = false, extraNavigation = true, onChange, onPrev, onNext, onFirst, onLast, onSelect, onExit } = options;
    const getIndex = typeof index === 'function' ? index : ()=>index;
    const onPrevKey = useStableFunction((e)=>{
        e.preventDefault();
        if (e.isComposing)
            return;
        const index = getIndex();
        const newIndex = mode === 'cycle' ? (index - 1 + size) % size : Math.max(0, index - 1);
        onPrev?.(e, index);
        if (newIndex !== index && newIndex === 0) onFirst?.(e, index);
        if (newIndex !== index) onChange?.(newIndex);
        accessModeState.setAccessMode('keyboard');
    });
    const onNextKey = useStableFunction((e)=>{
        e.preventDefault();
        if (e.isComposing)
            return;
        const index = getIndex();
        const newIndex = mode === 'cycle' ? (index + 1) % size : Math.min(size - 1, index + 1);
        onNext?.(e, index);
        if (newIndex !== index && newIndex === size - 1) onLast?.(e, index);
        if (newIndex !== index) onChange?.(newIndex);
        accessModeState.setAccessMode('keyboard');
    });
    const onFirstKey = useStableFunction((e)=>{
        e.preventDefault();
        const index = getIndex();
        onFirst?.(e, index);
        if (index !== 0) onChange?.(0);
        accessModeState.setAccessMode('keyboard');
    });
    const onLastKey = useStableFunction((e)=>{
        e.preventDefault();
        const index = getIndex();
        onLast?.(e, index);
        if (index !== size - 1) onChange?.(size - 1);
        accessModeState.setAccessMode('keyboard');
    });
    const onSpaceKey = useStableFunction((e)=>{
        onSelect?.(e, getIndex());
    });
    const onSelectWithEnter = useStableFunction((e)=>{
        if (e.keyCode === 229)
            return;
        onSelect?.(e, getIndex());
    });
    const onEscOrTabKey = useStableFunction((e)=>{
        if (e.isComposing)
            return;
        onExit?.(e, getIndex());
    });
    const keyCombinationMap = React.useMemo(()=>{
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
                shift('Tab'),
                onEscOrTabKey
            ]
        ];
        if (extraNavigation) map.push([
            'Home',
            onFirstKey
        ], [
            option(prevKey),
            onFirstKey
        ], [
            command(prevKey),
            onFirstKey
        ], [
            'End',
            onLastKey
        ], [
            option(nextKey),
            onLastKey
        ], [
            command(nextKey),
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
    const { ref } = useKeyCombinationHandler(keyCombinationMap, {
        handleInputs
    });
    return {
        ref
    };
}
