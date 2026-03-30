import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { Tooltip } from '../../../tooltip/tooltip';
export function getComponentAriaAttributesConsideringTooltip(ariaAttrsProps, tooltipProps) {
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
export const withTooltip = (Component)=>{
    return ({ ref, ...props })=>{
        if (props.tooltipLabel == null) return _jsx(Component, {
            ...props,
            ref: ref
        });
        return _jsx(Tooltip, {
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
                return _jsx(InnerMergedTooltipEvents, {
                    componentEventProps: props,
                    tooltipTriggerProps: triggerProps,
                    children: (mergedEvents)=>{
                        return _jsx(Component, {
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
    const onMouseEnter = React.useCallback((event)=>{
        componentOnMouseEnter?.(event);
        tooltipTriggerOnMouseEnter?.();
    }, [
        componentOnMouseEnter,
        tooltipTriggerOnMouseEnter
    ]);
    const onMouseLeave = React.useCallback((event)=>{
        componentOnMouseLeave?.(event);
        tooltipTriggerMouseLeave?.();
    }, [
        componentOnMouseLeave,
        tooltipTriggerMouseLeave
    ]);
    const onMouseDown = React.useCallback((event)=>{
        componentOnMouseDown?.(event);
        tooltipTriggerMouseDown?.();
    }, [
        componentOnMouseDown,
        tooltipTriggerMouseDown
    ]);
    const onFocus = React.useCallback((event)=>{
        componentOnFocus?.(event);
        tooltipTriggerFocus?.();
    }, [
        componentOnFocus,
        tooltipTriggerFocus
    ]);
    const onBlur = React.useCallback((event)=>{
        componentOnBlur?.(event);
        tooltipTriggerOnBlur?.();
    }, [
        componentOnBlur,
        tooltipTriggerOnBlur
    ]);
    return React.useMemo(()=>{
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
