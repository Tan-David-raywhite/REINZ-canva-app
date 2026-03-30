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
    get useSheetControls () {
        return useSheetControls;
    },
    get useSheetDrag () {
        return useSheetDrag;
    },
    get useSheetScroll () {
        return useSheetScroll;
    },
    get useSheetScrollIsolation () {
        return useSheetScrollIsolation;
    }
});
const _preconditions = require('../../../../../../base/preconditions');
const _compose_refs = require('../../../../../../base/react/compose_refs');
const _react = _interop_require_wildcard(require("react"));
const _drag = require("./drag");
const _resize = require("./resize");
const _scroll_pan = require("./scroll_pan");
const _snap_points = require("./snap_points");
const _touch_scroll = require("./touch_scroll");
const _wheel_scroll = require("./wheel_scroll");
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
function useSheetControls({ snapPoints, snapPointIndex, setSnapPointIndex, getScrollHeight, setOffset }) {
    const { snapPointControls } = (0, _snap_points.useResolvedSnapPoints)({
        snapPoints,
        getScrollHeight
    });
    const { resizing, resizeControls } = (0, _resize.useResize)({
        snapPointControls,
        snapPointIndex,
        setSnapPointIndex,
        setOffset
    });
    return {
        resizing,
        controls: {
            resizeControls,
            snapPointControls,
            snapPoints,
            snapPointIndex
        }
    };
}
function useSheetDrag({ controls }) {
    return (0, _drag.useDrag)({
        resizeControls: controls.resizeControls
    });
}
function useSheetScroll({ controls, scrollToResizeBelow }) {
    const maxPanIndex = scrollToResizeBelow && controls.snapPoints.findIndex((snapPoint)=>snapPoint.type === scrollToResizeBelow.type && snapPoint.height === scrollToResizeBelow.height);
    _preconditions.Preconditions.checkArgument(maxPanIndex !== -1);
    const scrollPanRef = _react.useRef(null);
    const { panControls } = (0, _scroll_pan.useScrollPan)({
        resizeControls: controls.resizeControls,
        snapPointControls: controls.snapPointControls,
        isContentScrolled: ()=>scrollPanRef.current?.scrollTop !== 0,
        snapPointIndex: controls.snapPointIndex,
        maxPanIndex
    });
    const { wheelRef } = (0, _wheel_scroll.useWheelScroll)({
        panControls
    });
    const { touchScrollRef } = (0, _touch_scroll.useTouchScroll)({
        panControls
    });
    return {
        contentRef: (0, _compose_refs.composeRefs)(scrollPanRef, wheelRef, touchScrollRef)
    };
}
function useSheetScrollIsolation() {
    return (0, _compose_refs.composeRefs)((0, _wheel_scroll.useWheelScrollIsolation)(), (0, _touch_scroll.useTouchScrollIsolation)());
}
