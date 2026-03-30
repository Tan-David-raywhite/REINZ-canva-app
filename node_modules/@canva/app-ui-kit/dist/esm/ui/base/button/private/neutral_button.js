import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { InternalAnchor, InternalButton } from './internal_button';
export function NeutralButton(props) {
    return _jsx(InternalButton, {
        ...props,
        variant: `${props.variant}Neutral`
    });
}
export function NeutralButtonLink(props) {
    return _jsx(InternalAnchor, {
        ...props,
        variant: `${props.variant}Neutral`
    });
}
