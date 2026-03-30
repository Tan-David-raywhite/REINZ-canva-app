"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIsomorphicLayoutEffect", {
    enumerable: true,
    get: function() {
        return useIsomorphicLayoutEffect;
    }
});
const _react = require("react");
const canUseDOM = ()=>typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
const useIsomorphicLayoutEffect = canUseDOM() ? _react.useLayoutEffect : _react.useEffect;
