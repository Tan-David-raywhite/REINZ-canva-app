import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Pill as EaselPill } from '../../../../../base/pill/pill';
/** 
 * Pills show selected entities, and suggest or filter content.
 *
 * Use pills for:
 * - Presenting available filters in a view
 * - Making contextual suggestions for searching and navigating content
 */ export function Pill(props) {
    return _jsx(EaselPill, {
        ...props,
        maxWidth: props.maxWidth,
        size: props.size || 'medium',
        tooltipLabel: typeof props.showTooltip === 'object' ? props.showTooltip?.label ?? props.text : props.showTooltip === true ? props.text : undefined,
        tooltipPlacement: typeof props.showTooltip === 'object' ? props.showTooltip?.placement : undefined,
        tooltipDisabled: typeof props.showTooltip === 'object' ? props.showTooltip?.disabled : undefined
    });
}
