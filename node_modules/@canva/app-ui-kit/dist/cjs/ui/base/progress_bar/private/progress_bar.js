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
    get ProgressBar () {
        return ProgressBar;
    },
    get tones () {
        return tones;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _use_isomorphic_layout_effect = require('../../../../base/react/use_isomorphic_layout_effect');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _resizeobserverpolyfill = _interop_require_default(require("resize-observer-polyfill"));
const _box = require('../../box/box');
const _color = require('../../tokens/color');
const _color1 = require('../../tokens/primitive/color');
const _typography = require('../../typography/typography');
const _progress_barcss = _interop_require_wildcard(require("./progress_bar.css"));
const _progress_bar_indicator = require("./progress_bar_indicator");
const _progress_bar_indicatorcss = _interop_require_default(require("./progress_bar_indicator.css"));
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
const tones = [
    'expressive',
    'critical',
    'contrast',
    'success',
    'hint'
];
const toneFillColor = {
    ['expressive']: _progress_bar_indicatorcss.default.expressiveFill,
    ['critical']: _color.colorFeedbackCriticalBg,
    ['contrast']: _color1.colorWhiteA10,
    ['success']: _color.colorFeedbackPositiveBg,
    ['hint']: _color.colorFeedbackHintBg
};
const toneTrackColor = {
    ['expressive']: _color.colorUiNeutralBg,
    ['critical']: _color.colorUiNeutralBg,
    ['contrast']: _color1.colorBlackA07,
    ['success']: _color.colorUiNeutralBg,
    ['hint']: _color.colorUiNeutralBg
};
const ProgressBar = (props)=>{
    const { label, description, value, trackThickness, tone = 'expressive', trackRadius = 'round', end, onProgressAnimationEnd, disableBubbles, disableAnimations, ariaLabel, ariaLabelledBy, ariaDescribedBy } = props;
    const labelId = _react.useId();
    const descriptionId = _react.useId();
    const resolvedAriaLabelledBy = ariaLabelledBy ?? (label == null ? undefined : labelId);
    const resolvedAriaLabel = resolvedAriaLabelledBy == null ? ariaLabel : undefined;
    const resolvedAriaDescribedBy = ariaDescribedBy ?? (description == null ? undefined : descriptionId);
    const labelElement = label != null ? (0, _jsxruntime.jsx)("div", {
        id: labelId,
        children: typeof label === 'string' ? (0, _jsxruntime.jsx)(_typography.Text, {
            tagName: "span",
            size: "medium",
            weight: "bold",
            children: label
        }) : label
    }) : null;
    const descriptionElement = description != null ? (0, _jsxruntime.jsx)("div", {
        id: descriptionId,
        children: typeof description === 'string' ? (0, _jsxruntime.jsx)(_typography.Text, {
            tagName: "span",
            size: "small",
            children: description
        }) : description
    }) : null;
    const indicator = (0, _jsxruntime.jsx)(_progress_bar_indicator.ProgressBarIndicator, {
        value: value,
        trackThickness: trackThickness,
        trackRadius: trackRadius,
        trackColor: toneTrackColor[tone],
        fillColor: toneFillColor[tone],
        onProgressAnimationEnd: onProgressAnimationEnd,
        disableBubbles: disableBubbles,
        disableAnimations: disableAnimations,
        ariaLabel: resolvedAriaLabel,
        ariaLabelledBy: resolvedAriaLabelledBy,
        ariaDescribedBy: resolvedAriaDescribedBy
    });
    const hasLabelOrDescriptionOrEnd = label !== undefined || description !== undefined || end !== undefined;
    const { endMeasureRef, endColumnWidthPx } = useMeasuredEndWidth(end);
    if (!hasLabelOrDescriptionOrEnd) return indicator;
    return (0, _jsxruntime.jsxs)(_box.Box, {
        className: (0, _classnames.default)(_progress_barcss.default.container, end != null && _progress_barcss.default.withEnd),
        customProperties: {
            [_progress_barcss.customProperties.progressBarEndColumnWidth]: `${endColumnWidthPx}px`
        },
        children: [
            labelElement ? (0, _jsxruntime.jsx)(_box.Box, {
                className: _progress_barcss.default.labelCell,
                paddingBottom: "0.5u",
                children: labelElement
            }) : null,
            (0, _jsxruntime.jsx)("div", {
                className: _progress_barcss.default.indicatorCell,
                children: indicator
            }),
            end != null ? (0, _jsxruntime.jsx)("div", {
                className: _progress_barcss.default.endCell,
                children: (0, _jsxruntime.jsx)("div", {
                    ref: endMeasureRef,
                    className: _progress_barcss.default.endSlot,
                    children: end
                })
            }) : null,
            descriptionElement ? (0, _jsxruntime.jsx)(_box.Box, {
                className: _progress_barcss.default.descriptionCell,
                paddingTop: "0.5u",
                children: descriptionElement
            }) : null
        ]
    });
};
const useMeasuredEndWidth = (end)=>{
    const endMeasureRef = _react.useRef(null);
    const [endColumnWidthPx, setEndColumnWidthPx] = _react.useState(0);
    (0, _use_isomorphic_layout_effect.useIsomorphicLayoutEffect)(()=>{
        if (end == null) {
            setEndColumnWidthPx(0);
            return;
        }
        const el = endMeasureRef.current;
        if (el == null) return;
        const update = ()=>{
            setEndColumnWidthPx(el.getBoundingClientRect().width);
        };
        update();
        const observer = new _resizeobserverpolyfill.default(update);
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        end
    ]);
    return {
        endMeasureRef,
        endColumnWidthPx
    };
};
