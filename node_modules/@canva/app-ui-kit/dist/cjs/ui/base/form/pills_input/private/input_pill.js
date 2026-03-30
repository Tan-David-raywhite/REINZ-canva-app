"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InputPill", {
    enumerable: true,
    get: function() {
        return InputPill;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _button = require('../../../button/button');
const _icon = require('../../../icons/x/icon');
const _tooltip = require('../../../tooltip/tooltip');
const _truncated = require('../../../typography/truncated/truncated');
const _typography = require('../../../typography/typography');
const _input_pillcss = _interop_require_default(require("./input_pill.css"));
const _input_pillmessages = require("./input_pill.messages");
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
function resolveDecorator(decorator, className) {
    const content = typeof decorator === 'function' ? decorator() : decorator;
    return content && (0, _jsxruntime.jsx)("span", {
        className: className,
        children: content
    });
}
function InputPill({ text, tone, disabled, maxWidth = '25u', start, onRemoveClick, ref }) {
    const { ref: isTruncatedRef, isTruncated } = (0, _truncated.useIsTruncated)(text);
    const className = (0, _classnames.default)({
        [_input_pillcss.default.pill]: true,
        [_input_pillcss.default.disabled]: disabled,
        [_input_pillcss.default.maxWidth25U]: maxWidth === '25u',
        [_input_pillcss.default.warn]: tone === 'warn',
        [_input_pillcss.default.critical]: tone === 'critical'
    });
    const startContent = resolveDecorator(start, _input_pillcss.default.start);
    const content = (0, _jsxruntime.jsx)(_typography.Text, {
        ref: isTruncatedRef,
        tagName: "span",
        className: _input_pillcss.default.text,
        tone: _typography.InheritColor,
        size: "medium",
        lineClamp: 1,
        children: text
    });
    const onRemoveCallback = _react.useCallback((e)=>{
        e.stopPropagation();
        onRemoveClick?.();
    }, [
        onRemoveClick
    ]);
    const pill = (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            startContent,
            content,
            onRemoveClick != null && (0, _jsxruntime.jsx)(_button.Button, {
                ref: ref,
                onClick: disabled ? undefined : onRemoveCallback,
                size: "tiny",
                variant: "tertiary",
                className: _input_pillcss.default.removeButton,
                icon: _icon.XIcon,
                iconSize: "small",
                ariaLabel: _input_pillmessages.InputPillMessages.remove(text),
                disabled: disabled
            })
        ]
    });
    if (isTruncated) return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: text,
        children: ({ tooltipId, ...triggerProps })=>(0, _jsxruntime.jsx)("span", {
                className: className,
                "aria-describedby": isTruncated ? tooltipId : undefined,
                ...triggerProps,
                children: pill
            })
    });
    return (0, _jsxruntime.jsx)("span", {
        className: className,
        children: pill
    });
}
