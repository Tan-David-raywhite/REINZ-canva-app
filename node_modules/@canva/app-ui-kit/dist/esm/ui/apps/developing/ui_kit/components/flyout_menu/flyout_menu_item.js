import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { FlyoutMenuItem as EaselFlyoutMenuItem } from '../../../../../base/flyout_menu/flyout_menu';
/** 
 * `FlyoutMenuItem` is a text-based choice or action shown to a user in a {@link FlyoutMenu}.
 * Should only be used as a child of {@link FlyoutMenu}
 */ export function FlyoutMenuItem(props) {
    return _jsx(EaselFlyoutMenuItem, {
        children: props.children,
        onClick: props.onClick,
        start: props.start,
        end: props.end,
        disabled: props.disabled
    });
}
