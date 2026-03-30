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
    get KeyCombinationHandler () {
        return KeyCombinationHandler;
    },
    get WithKeyCombinationHandler () {
        return WithKeyCombinationHandler;
    },
    get useKeyCombinationHandler () {
        return useKeyCombinationHandler;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _handle = require('../../handle/handle');
const _provider = require('../../provider/provider');
const _key_combination = require("./key_combination");
const _key_combination_handlercss = _interop_require_default(require("./key_combination_handler.css"));
const _key_listener = require("./key_listener");
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
function useKeyCombinationHandler(keyMap, { handleInputs }) {
    const [ref, setRef] = _react.useState(null);
    const direction = (0, _provider.useDirection)();
    _react.useEffect(()=>{
        const el = (0, _handle.dangerouslyGetHTMLElement)(ref);
        if (!el) return;
        const keyListener = new _key_listener.KeyListener(el, {
            ignoreInput: !handleInputs
        });
        keyMap.forEach(([keyCombination, handlers, options])=>{
            const trigger = (0, _key_combination.makeKeyTrigger)(keyCombination, direction);
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
function WithKeyCombinationHandler(props) {
    const { map, handleInputs, children } = props;
    const { ref } = useKeyCombinationHandler(map, {
        handleInputs
    });
    return children({
        ref
    });
}
function KeyCombinationHandler(props) {
    const { children, map, handleInputs } = props;
    const { ref } = useKeyCombinationHandler(map, {
        handleInputs
    });
    return ((0, _jsxruntime.jsx)("div", {
            className: _key_combination_handlercss.default.shortcuts,
            ref: ref,
            tabIndex: -1,
            children: children
        }));
}
