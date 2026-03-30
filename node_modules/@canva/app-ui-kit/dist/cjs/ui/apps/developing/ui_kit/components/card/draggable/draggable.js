"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Draggable", {
    enumerable: true,
    get: function() {
        return Draggable;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _draggablecss = _interop_require_default(require("./draggable.css"));
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
const createDragStart = (cardRef, setDragging, onDragStart, loading)=>{
    return (event)=>{
        if (onDragStart === undefined || loading === true) return;
        if (cardRef.current) {
            const card = cardRef.current.getBoundingClientRect();
            const x = event.clientX - card.x;
            const y = event.clientY - card.y;
            event.dataTransfer.setDragImage(cardRef.current, x, y);
        }
        setTimeout(()=>setDragging(true), 0);
        onDragStart(event);
    };
};
const Draggable = ({ onDragStart, loading, children })=>{
    const [dragging, setDragging] = _react.useState(false);
    const cardRef = _react.useRef(null);
    const dragStart = createDragStart(cardRef, setDragging, onDragStart, loading);
    const onDragEnd = ()=>setDragging(false);
    return (0, _jsxruntime.jsx)("div", {
        ref: cardRef,
        className: (0, _classnames.default)({
            [_draggablecss.default.dragging]: dragging
        }),
        children: children({
            onDragStart: dragStart,
            loading,
            onDragEnd
        })
    });
};
