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
    get OptionalScrollWindow () {
        return OptionalScrollWindow;
    },
    get ScrollWindow () {
        return ScrollWindow;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _resizeobserverpolyfill = _interop_require_default(require("resize-observer-polyfill"));
const _provider = require('../../provider/provider');
const _utilities = require("./utilities");
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
function ScrollWindow(props) {
    const { layout, innerRef, doNotUseForceLTRForPageNavigator, children } = props;
    const direction = (0, _provider.useDirection)();
    const privateFields = _react.useRef({
        resizeObserver: null,
        scrollableEl: null,
        isRtl: doNotUseForceLTRForPageNavigator ? false : direction === 'RTL',
        scrollState: (0, _mobx.observable)({
            layout
        })
    });
    const dispatch = _react.useCallback(()=>{
        (0, _mobx.runInAction)(()=>{
            if (!privateFields.current.scrollableEl) {
                privateFields.current.scrollState.positions = undefined;
                return;
            }
            if (privateFields.current.scrollableEl.offsetParent == null)
                return;
            privateFields.current.scrollState.positions = (0, _utilities.calculateScrollStatePosition)(privateFields.current.scrollableEl, layout, privateFields.current.isRtl);
        });
    }, [
        layout
    ]);
    const scrollableRef = _react.useCallback((el)=>{
        if (privateFields.current.scrollableEl === el) return;
        if (!privateFields.current.resizeObserver) privateFields.current.resizeObserver = new _resizeobserverpolyfill.default(dispatch);
        innerRef?.(el);
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.unobserve(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.removeEventListener('scroll', dispatch);
        }
        privateFields.current.scrollableEl = el;
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.observe(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.addEventListener('scroll', dispatch, {
                passive: true
            });
        } else {
            privateFields.current.resizeObserver?.disconnect();
            privateFields.current.resizeObserver = null;
        }
        dispatch();
    }, [
        innerRef,
        dispatch
    ]);
    _react.useEffect(()=>{
        privateFields.current.isRtl = doNotUseForceLTRForPageNavigator ? false : direction === 'RTL';
    }, [
        doNotUseForceLTRForPageNavigator,
        direction
    ]);
    return children({
        scrollableRef,
        scrollState: privateFields.current.scrollState
    });
}
function OptionalScrollWindow(props) {
    const { enabled, innerRef, children } = props;
    if (enabled) return (0, _jsxruntime.jsx)(ScrollWindow, {
        ...props
    });
    return children({
        scrollableRef: innerRef
    });
}
