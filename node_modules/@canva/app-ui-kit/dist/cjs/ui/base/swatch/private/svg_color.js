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
    get Color () {
        return Color;
    },
    get ColorStripes () {
        return ColorStripes;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../base/preconditions');
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _id_generator = require('../../dom/id_generator/id_generator');
const _swatch_util = require("./swatch_util");
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
const Color = ({ fill, ...props })=>(0, _jsxruntime.jsx)(ColorStripes, {
        ...props,
        fills: [
            fill
        ]
    });
const ColorStripes = (0, _mobxreactlite.observer)(({ className, height, width, fills })=>{
    const id = _react.useMemo(()=>_id_generator.domIdGenerator.next(), []);
    const box = _react.useMemo(()=>({
            top: 0,
            left: 0,
            height,
            width
        }), [
        height,
        width
    ]);
    const rectsAndDef = _react.useMemo(()=>{
        const rects = [];
        const defs = [];
        for(let i = 0; i < fills.length; i++){
            const { Rect, Definition } = toSvgRectDefinitionPair({
                fill: fills[i],
                id: `${id}__${i}`,
                box: (0, _swatch_util.toVerticalStripeBox)(box, fills.length, i),
                shapeRendering: 'crispEdges'
            });
            Rect && rects.push(Rect);
            Definition && defs.push(Definition);
        }
        return {
            Defs: defs.length ? (0, _jsxruntime.jsx)("defs", {
                children: defs
            }) : null,
            Rects: rects
        };
    }, [
        id,
        box,
        fills
    ]);
    const { Rects, Defs } = rectsAndDef;
    return (0, _jsxruntime.jsxs)(Svg, {
        className: className,
        viewbox: box,
        children: [
            Defs,
            Rects
        ]
    });
});
function toSvgRectDefinitionPair({ fill, id, box, shapeRendering }) {
    if ((0, _swatch_util.isFillObject)(fill))
    return {
        Definition: (0, _jsxruntime.jsx)(SvgGradientDefinition, {
            id: id,
            box: box,
            gradient: fill
        }, id),
        Rect: (0, _jsxruntime.jsx)(SvgRect, {
            fill: `url(#${id})`,
            box: box,
            shapeRendering: shapeRendering
        }, id)
    };
    if (fill)
    return {
        Rect: (0, _jsxruntime.jsx)(SvgRect, {
            fill: fill,
            box: box,
            shapeRendering: shapeRendering
        }, fill)
    };
    return {};
}
const Svg = (0, _mobxreactlite.observer)(({ className, viewbox: { top, left, height, width }, children })=>(0, _jsxruntime.jsx)("svg", {
        className: className,
        role: "presentation",
        viewBox: [
            left,
            top,
            width,
            height
        ].map((n)=>(0, _swatch_util.normalizeValue)(n)).join(' '),
        preserveAspectRatio: "xMidYMid slice",
        children: children
    }));
const SvgRect = (0, _mobxreactlite.observer)(({ box: { top, left, height, width }, fill, shapeRendering })=>(0, _jsxruntime.jsx)("rect", {
        y: (0, _swatch_util.normalizeValue)(top),
        x: (0, _swatch_util.normalizeValue)(left),
        height: (0, _swatch_util.normalizeValue)(height),
        width: (0, _swatch_util.normalizeValue)(width),
        fill: fill,
        shapeRendering: shapeRendering
    }));
const SvgGradientDefinition = (0, _mobxreactlite.observer)(({ gradient, id, box })=>{
    const renderedStops = gradient.stops.map((stop, i)=>{
        const { color, transparency = 0, position } = stop;
        return (0, _jsxruntime.jsx)("stop", {
            stopColor: color,
            stopOpacity: (0, _swatch_util.normalizeValue)(1 - transparency),
            offset: (0, _swatch_util.normalizeValue)(position)
        }, i);
    });
    switch(gradient.type){
        case 'linear':
            {
                const { rotation } = gradient;
                const { start, end } = (0, _swatch_util.linearGradientLine)({
                    box,
                    rotation
                });
                return (0, _jsxruntime.jsx)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: id,
                    x1: (0, _swatch_util.normalizeValue)(start.x),
                    y1: (0, _swatch_util.normalizeValue)(start.y),
                    x2: (0, _swatch_util.normalizeValue)(end.x),
                    y2: (0, _swatch_util.normalizeValue)(end.y),
                    children: renderedStops
                });
            }
        case 'radial':
            {
                const center = {
                    top: gradient.center.top / 100,
                    left: gradient.center.left / 100
                };
                const radius = (0, _swatch_util.radialGradientRadius)({
                    box,
                    center
                });
                const centerX = box.left + box.width * center.left;
                const centerY = box.top + box.height * center.top;
                return (0, _jsxruntime.jsx)("radialGradient", {
                    id: id,
                    gradientUnits: "userSpaceOnUse",
                    r: (0, _swatch_util.normalizeValue)(radius),
                    cx: (0, _swatch_util.normalizeValue)(centerX),
                    cy: (0, _swatch_util.normalizeValue)(centerY),
                    fx: (0, _swatch_util.normalizeValue)(centerX),
                    fy: (0, _swatch_util.normalizeValue)(centerY),
                    children: renderedStops
                });
            }
        default:
            throw new _preconditions.UnreachableError(gradient);
    }
});
