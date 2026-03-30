import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Avatar as EaselAvatar } from '../../../../../base/avatar/avatar';
/** 
 * Avatar is a pictorial representation of a user or an entity.
 *
 * The avatar sources' order of precedence is as follows:
 * 1. `photo`: url passed will be used to render an image
 * 2. `name`: 2-char initials (or 1-char for single-worded name) will be rendered
 *
 * To make an Avatar interactive, you can pass `onClick` to the Avatar component.
 */ export function Avatar(props) {
    return _jsx(EaselAvatar, {
        size: "medium",
        shape: "circle",
        role: "img",
        photo: props.photo,
        name: props.name,
        onClick: props.onClick,
        backgroundSeed: props.backgroundSeed,
        backgroundColor: props.backgroundColor,
        buttonAriaLabel: props.buttonAriaLabel
    });
}
