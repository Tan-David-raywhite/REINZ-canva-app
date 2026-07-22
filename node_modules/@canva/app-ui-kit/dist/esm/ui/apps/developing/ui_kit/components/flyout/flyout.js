import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import 'react';
import { Divider } from '../../../../../base/divider/divider';
import { SurfaceHeader } from '../../../../../base/surface/header/header';
import { AdaptivePopover as EaselFlyout } from '../../../../../base/surface/popover/popover';
/** 
 * `Flyout` provides a mechanism for rendering content in a "floating" surface that
 * is triggered by content in the primary document flow.
 *
 * Use `Flyout` when you need a flexible container that can hold any content.
 * This component requires you to manage the open/close state and specify the size,
 * making it ideal for custom implementations where you need more control over the behavior and appearance.
 *
 * If you only require a simple dropdown menu, try {@link FlyoutMenu} instead.
 */ export function Flyout(props) {
    const header = props.title ? _jsxs(_Fragment, {
        children: [
            _jsx(SurfaceHeader, {
                title: props.title,
                description: props.description,
                start: typeof props.headerStart === 'function' ? props.headerStart() : props.headerStart,
                end: typeof props.headerEnd === 'function' ? props.headerEnd() : props.headerEnd
            }),
            _jsx(Divider, {})
        ]
    }) : undefined;
    return _jsx(EaselFlyout, {
        header: header,
        open: props.open,
        onRequestClose: props.onRequestClose,
        onCloseComplete: props.onCloseComplete,
        placement: props.placement,
        width: props.width ?? '32u',
        trigger: props.trigger,
        footer: props.footer,
        children: props.children
    });
}
