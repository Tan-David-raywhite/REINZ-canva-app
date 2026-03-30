import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { LinkButton as EaselLinkButton } from '../../../../../base/link/link';
/** 
 * Links to an external web page.
 */ export function Link(props) {
    return _jsx(EaselLinkButton, {
        children: props.children,
        draggable: false,
        withOpenInNewIcon: true,
        target: "_blank",
        href: props.href,
        rel: "noopener noreferrer",
        id: props.id,
        ariaLabel: props.ariaLabel,
        tooltipLabel: props.tooltipLabel,
        disabled: props.disabled,
        variant: "regular",
        onClick: props.requestOpenExternalUrl
    });
}
/** 
 * A button that looks like a link but triggers in-app actions instead of navigation.
 */ export function LinkButton(props) {
    return _jsx(EaselLinkButton, {
        children: props.children,
        draggable: false,
        withOpenInNewIcon: false,
        id: props.id,
        ariaLabel: props.ariaLabel,
        tooltipLabel: props.tooltipLabel,
        disabled: props.disabled,
        variant: props.variant ?? 'regular',
        onClick: props.onClick
    });
}
