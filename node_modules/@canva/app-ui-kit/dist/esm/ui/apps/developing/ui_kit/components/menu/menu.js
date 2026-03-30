import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Menu as EaselMenu } from '../../../../../base/menu/menu';
export function Menu(props) {
    return _jsx(EaselMenu, {
        role: "list",
        ...props
    });
}
