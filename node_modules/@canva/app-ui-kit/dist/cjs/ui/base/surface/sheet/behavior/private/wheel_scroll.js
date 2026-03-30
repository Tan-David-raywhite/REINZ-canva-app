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
    get useWheelScroll () {
        return useWheelScroll;
    },
    get useWheelScrollIsolation () {
        return useWheelScrollIsolation;
    }
});
const _debounce = require('../../../../../../base/debounce');
const _react = _interop_require_wildcard(require("react"));
const _ref_effect = require('../../../internal/ref_effect');
const _isolate = require("./isolate");
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
const WHEEL_DEBOUNCE = 140;
function normalizeWheelDelta(deltaMode, delta) {
    const WHEEL_MULTIPLIERS = new Map([
        [
            WheelEvent.DOM_DELTA_LINE,
            40
        ],
        [
            WheelEvent.DOM_DELTA_PAGE,
            800
        ]
    ]);
    return delta * (WHEEL_MULTIPLIERS.get(deltaMode) ?? 1);
}
function useWheelScroll({ panControls }) {
    const wheelActive = _react.useRef(false);
    const endPan = panControls.end;
    const onWheelEnd = _react.useMemo(()=>{
        return (0, _debounce.debounce)(()=>{
            wheelActive.current = false;
            endPan();
        }, WHEEL_DEBOUNCE);
    }, [
        endPan
    ]);
    const onWheel = (0, _isolate.useStableIsolatableListener)((event)=>{
        if (!wheelActive.current) {
            wheelActive.current = true;
            panControls.start();
        }
        const delta = normalizeWheelDelta(event.deltaMode, event.deltaY);
        const allowScroll = panControls.update(delta);
        if (!allowScroll && event.cancelable) event.preventDefault();
        onWheelEnd();
    });
    const wheelRef = (0, _ref_effect.useRefEffect)((element)=>{
        if (!window.WheelEvent)
        return;
        element.addEventListener('wheel', onWheel);
        return ()=>{
            element.removeEventListener('wheel', onWheel);
        };
    });
    return {
        wheelRef
    };
}
function useWheelScrollIsolation() {
    return (0, _ref_effect.useRefEffect)((element)=>{
        element.addEventListener('wheel', _isolate.markAsIsolated);
        return ()=>element.removeEventListener('wheel', _isolate.markAsIsolated);
    });
}
