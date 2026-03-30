import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Sheet, useTypicalSheetAdaptation } from '../../sheet/sheet';
import { Popover } from './popover';
export function AdaptivePopover(props) {
    return useTypicalSheetAdaptation() ? _jsx(Sheet, {
        ...props
    }) : _jsx(Popover, {
        ...props
    });
}
