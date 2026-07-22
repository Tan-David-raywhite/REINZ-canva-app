import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from '../../../../../base/divider/divider';
import { SurfaceBackground } from '../../../../../base/surface/background/background';
import { SurfaceHeader as EaselSurfaceHeader, SurfaceHeaderBackButton as EaselSurfaceHeaderBackButton } from '../../../../../base/surface/header/header';
import styles from './surface_header.css';
/** 
 * Display a header with a title, description, and start and end decorators such as back and close buttons.
 * @example
 * ```tsx
 * <SurfaceHeader
 *   title="Title"
 *   description="Description"
 *   divider={false}
 *   start={{ ariaLabel: 'Go back', onClick: () => {...} },
 *   end={ <Button variant="tertiary" icon={() => <MoreHorizontalIcon />} /> }
 * />
 * ```
 */ export function SurfaceHeader(props) {
    const legacyPadding = '2u';
    const header = _jsxs("div", {
        className: styles.legacy,
        children: [
            _jsx(EaselSurfaceHeader, {
                title: props.title,
                description: props.description,
                start: props.start && _jsx(EaselSurfaceHeaderBackButton, {
                    ariaLabel: props.start.ariaLabel,
                    onClick: props.start.onClick
                }),
                end: props.end,
                padding: legacyPadding
            }),
            props.divider !== false && _jsx(Divider, {})
        ]
    });
    return props.background === 'none' ? header : _jsx(SurfaceBackground, {
        children: header
    });
}
