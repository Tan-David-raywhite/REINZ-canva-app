import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { AvatarGroup as EaselAvatarGroup } from '../../../../../base/avatar/avatar';
/** 
 * AvatarGroup visually represent multiple users, teams or brands
 */ export function AvatarGroup(props) {
    return _jsx(EaselAvatarGroup, {
        size: "medium",
        role: "list",
        avatars: props.avatars,
        onClick: props.onClick,
        onOverflowClick: props.onOverflowClick,
        overflowCount: props.overflowCount
    });
}
