import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { FlyoutMenuDivider as EaselFlyoutMenuDivider } from '../../../../../base/flyout_menu/flyout_menu';
/** 
 * `FlyoutMenuDivider` is supported within the {@link FlyoutMenu} component, and has extra spacing for separation.
 * Should only be used as a child of {@link FlyoutMenu}
 */ export function FlyoutMenuDivider(props) {
    return _jsx(EaselFlyoutMenuDivider, {
        children: props.children
    });
}
