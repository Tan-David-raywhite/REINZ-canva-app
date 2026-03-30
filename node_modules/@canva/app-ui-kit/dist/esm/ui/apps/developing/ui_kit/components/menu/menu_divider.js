import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { MenuDivider as EaselMenuDivider } from '../../../../../base/menu/menu';
/** 
 * Menu dividers are supported within the {@link Menu} component, and have extra spacing for separation.
 */ export function MenuDivider(props) {
    return _jsx(EaselMenuDivider, {
        ...props
    });
}
