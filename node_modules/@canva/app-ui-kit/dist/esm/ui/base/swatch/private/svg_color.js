import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UnreachableError } from '../../../../base/preconditions';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { domIdGenerator } from '../../dom/id_generator/id_generator';
import { isFillObject, linearGradientLine, normalizeValue, radialGradientRadius, toVerticalStripeBox } from './swatch_util';
export const Color = ({ fill, ...props })=>_jsx(ColorStripes, {
        ...props,
        fills: [
            fill
        ]
    });
export const ColorStripes = observer(({ className, height, width, fills })=>{
    const id = React.useMemo(()=>domIdGenerator.next(), []);
    const box = React.useMemo(()=>({
            top: 0,
            left: 0,
            height,
            width
        }), [
        height,
        width
    ]);
    const rectsAndDef = React.useMemo(()=>{
        const rects = [];
        const defs = [];
        for(let i = 0; i < fills.length; i++){
            const { Rect, Definition } = toSvgRectDefinitionPair({
                fill: fills[i],
                id: `${id}__${i}`,
                box: toVerticalStripeBox(box, fills.length, i),
                shapeRendering: 'crispEdges'
            });
            Rect && rects.push(Rect);
            Definition && defs.push(Definition);
        }
        return {
            Defs: defs.length ? _jsx("defs", {
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
    return _jsxs(Svg, {
        className: className,
        viewbox: box,
        children: [
            Defs,
            Rects
        ]
    });
});
function toSvgRectDefinitionPair({ fill, id, box, shapeRendering }) {
    if (isFillObject(fill))
    return {
        Definition: _jsx(SvgGradientDefinition, {
            id: id,
            box: box,
            gradient: fill
        }, id),
        Rect: _jsx(SvgRect, {
            fill: `url(#${id})`,
            box: box,
            shapeRendering: shapeRendering
        }, id)
    };
    if (fill)
    return {
        Rect: _jsx(SvgRect, {
            fill: fill,
            box: box,
            shapeRendering: shapeRendering
        }, fill)
    };
    return {};
}
const Svg = observer(({ className, viewbox: { top, left, height, width }, children })=>_jsx("svg", {
        className: className,
        role: "presentation",
        viewBox: [
            left,
            top,
            width,
            height
        ].map((n)=>normalizeValue(n)).join(' '),
        preserveAspectRatio: "xMidYMid slice",
        children: children
    }));
const SvgRect = observer(({ box: { top, left, height, width }, fill, shapeRendering })=>_jsx("rect", {
        y: normalizeValue(top),
        x: normalizeValue(left),
        height: normalizeValue(height),
        width: normalizeValue(width),
        fill: fill,
        shapeRendering: shapeRendering
    }));
const SvgGradientDefinition = observer(({ gradient, id, box })=>{
    const renderedStops = gradient.stops.map((stop, i)=>{
        const { color, transparency = 0, position } = stop;
        return _jsx("stop", {
            stopColor: color,
            stopOpacity: normalizeValue(1 - transparency),
            offset: normalizeValue(position)
        }, i);
    });
    switch(gradient.type){
        case 'linear':
            {
                const { rotation } = gradient;
                const { start, end } = linearGradientLine({
                    box,
                    rotation
                });
                return _jsx("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: id,
                    x1: normalizeValue(start.x),
                    y1: normalizeValue(start.y),
                    x2: normalizeValue(end.x),
                    y2: normalizeValue(end.y),
                    children: renderedStops
                });
            }
        case 'radial':
            {
                const center = {
                    top: gradient.center.top / 100,
                    left: gradient.center.left / 100
                };
                const radius = radialGradientRadius({
                    box,
                    center
                });
                const centerX = box.left + box.width * center.left;
                const centerY = box.top + box.height * center.top;
                return _jsx("radialGradient", {
                    id: id,
                    gradientUnits: "userSpaceOnUse",
                    r: normalizeValue(radius),
                    cx: normalizeValue(centerX),
                    cy: normalizeValue(centerY),
                    fx: normalizeValue(centerX),
                    fy: normalizeValue(centerY),
                    children: renderedStops
                });
            }
        default:
            throw new UnreachableError(gradient);
    }
});
