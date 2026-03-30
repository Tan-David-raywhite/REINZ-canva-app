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
    get getComponentAriaAttributesConsideringTooltip () {
        return getComponentAriaAttributesConsideringTooltip;
    },
    get withTooltip () {
        return withTooltip;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _tooltip = require('../../../tooltip/tooltip');
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
function getComponentAriaAttributesConsideringTooltip(ariaAttrsProps, tooltipProps) {
    const ariaAttrs = {
        ...ariaAttrsProps
    };
    if ((ariaAttrsProps.children == null || typeof ariaAttrsProps.children !== 'string') && ariaAttrsProps.ariaLabel == null && ariaAttrsProps.ariaLabelledBy == null)
    ariaAttrs.ariaLabel = tooltipProps.tooltipDescription != null ? `${tooltipProps.tooltipLabel}: ${tooltipProps.tooltipDescription}` : tooltipProps.tooltipLabel;
    else {
        const hasRedundantTooltip = typeof ariaAttrsProps.children === 'string' && ariaAttrsProps.children === tooltipProps.tooltipLabel || ariaAttrsProps.ariaLabel === tooltipProps.tooltipLabel;
        if (!hasRedundantTooltip && ariaAttrs.ariaDescribedBy == null) ariaAttrs.ariaDescribedBy = tooltipProps.tooltipId;
    }
    return ariaAttrs;
}
const withTooltip = (Component)=>{
    return ({ ref, ...props })=>{
        if (props.tooltipLabel == null) return (0, _jsxruntime.jsx)(Component, {
            ...props,
            ref: ref
        });
        return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
            label: props.tooltipLabel,
            description: props.tooltipDescription,
            shortcut: props.tooltipShortcut,
            disabled: props.tooltipDisabled,
            placement: props.tooltipPlacement,
            lineClamp: props.tooltipLineClamp,
            closeOnClick: props.tooltipCloseOnClick,
            children: (triggerProps)=>{
                const ariaAttributesConsideringTooltip = getComponentAriaAttributesConsideringTooltip(props, {
                    tooltipId: triggerProps.tooltipId,
                    tooltipLabel: props.tooltipLabel ?? '',
                    tooltipDescription: props.tooltipDescription
                });
                return (0, _jsxruntime.jsx)(InnerMergedTooltipEvents, {
                    componentEventProps: props,
                    tooltipTriggerProps: triggerProps,
                    children: (mergedEvents)=>{
                        return (0, _jsxruntime.jsx)(Component, {
                            ...props,
                            ...ariaAttributesConsideringTooltip,
                            ...mergedEvents,
                            ref: ref
                        });
                    }
                });
            }
        });
    };
};
const InnerMergedTooltipEvents = ({ componentEventProps, tooltipTriggerProps, children })=>{
    const { onMouseEnter: componentOnMouseEnter, onMouseLeave: componentOnMouseLeave, onMouseDown: componentOnMouseDown, onFocus: componentOnFocus, onBlur: componentOnBlur } = componentEventProps;
    const { onMouseEnter: tooltipTriggerOnMouseEnter, onMouseLeave: tooltipTriggerMouseLeave, onMouseDown: tooltipTriggerMouseDown, onFocus: tooltipTriggerFocus, onBlur: tooltipTriggerOnBlur } = tooltipTriggerProps;
    const onMouseEnter = _react.useCallback((event)=>{
        componentOnMouseEnter?.(event);
        tooltipTriggerOnMouseEnter?.();
    }, [
        componentOnMouseEnter,
        tooltipTriggerOnMouseEnter
    ]);
    const onMouseLeave = _react.useCallback((event)=>{
        componentOnMouseLeave?.(event);
        tooltipTriggerMouseLeave?.();
    }, [
        componentOnMouseLeave,
        tooltipTriggerMouseLeave
    ]);
    const onMouseDown = _react.useCallback((event)=>{
        componentOnMouseDown?.(event);
        tooltipTriggerMouseDown?.();
    }, [
        componentOnMouseDown,
        tooltipTriggerMouseDown
    ]);
    const onFocus = _react.useCallback((event)=>{
        componentOnFocus?.(event);
        tooltipTriggerFocus?.();
    }, [
        componentOnFocus,
        tooltipTriggerFocus
    ]);
    const onBlur = _react.useCallback((event)=>{
        componentOnBlur?.(event);
        tooltipTriggerOnBlur?.();
    }, [
        componentOnBlur,
        tooltipTriggerOnBlur
    ]);
    return _react.useMemo(()=>{
        return children({
            onMouseEnter,
            onMouseLeave,
            onMouseDown,
            onFocus,
            onBlur
        });
    }, [
        children,
        onMouseEnter,
        onMouseLeave,
        onMouseDown,
        onFocus,
        onBlur
    ]);
};
