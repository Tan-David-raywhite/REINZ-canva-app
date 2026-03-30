import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { dangerouslyGetHTMLElement } from '../../handle/handle';
import { useDirection } from '../../provider/provider';
import { makeKeyTrigger } from './key_combination';
import styles from './key_combination_handler.css';
import { KeyListener } from './key_listener';
export function useKeyCombinationHandler(keyMap, { handleInputs }) {
    const [ref, setRef] = React.useState(null);
    const direction = useDirection();
    React.useEffect(()=>{
        const el = dangerouslyGetHTMLElement(ref);
        if (!el) return;
        const keyListener = new KeyListener(el, {
            ignoreInput: !handleInputs
        });
        keyMap.forEach(([keyCombination, handlers, options])=>{
            const trigger = makeKeyTrigger(keyCombination, direction);
            trigger.ignoreKeyboardLayout = options?.ignoreKeyboardLayout;
            if (typeof handlers === 'function') keyListener.addListener('keydown', trigger, handlers);
            else {
                handlers.keydown && keyListener.addListener('keydown', trigger, handlers.keydown);
                handlers.keyup && keyListener.addListener('keyup', trigger, handlers.keyup);
                handlers.keypress && keyListener.addListener('keypress', trigger, handlers.keypress);
            }
        });
        return ()=>{
            keyListener.reset();
        };
    }, [
        direction,
        handleInputs,
        keyMap,
        ref
    ]);
    return {
        ref: setRef,
        element: ref
    };
}
export function WithKeyCombinationHandler(props) {
    const { map, handleInputs, children } = props;
    const { ref } = useKeyCombinationHandler(map, {
        handleInputs
    });
    return children({
        ref
    });
}
export function KeyCombinationHandler(props) {
    const { children, map, handleInputs } = props;
    const { ref } = useKeyCombinationHandler(map, {
        handleInputs
    });
    return (_jsx("div", {
            className: styles.shortcuts,
            ref: ref,
            tabIndex: -1,
            children: children
        }));
}
