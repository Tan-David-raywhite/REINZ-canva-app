import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Swatch as EaselSwatch } from '../../../../../base/swatch/swatch';
/** 
 * The appearance of a swatch.
 * If a swatch uses the `"outline"` variant, it's rendered as a white box and outlined with the value of the `fill` property.
 */ export const variants = [
    'solid',
    'outline'
];
/** 
 * A selectable square that displays one or more colors.
 */ export function Swatch(props) {
    return _jsx(EaselSwatch, {
        fill: props.fill,
        tooltipLabel: props.tooltipLabel,
        variant: props.variant || 'solid',
        onClick: props.onClick,
        onDelete: props.onDelete,
        active: props.active,
        size: "small",
        disabled: props.disabled
    });
}
