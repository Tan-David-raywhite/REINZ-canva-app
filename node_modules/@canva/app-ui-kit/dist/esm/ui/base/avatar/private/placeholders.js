import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Placeholder } from '../../placeholder/placeholder';
import { useAvatarSizeStyle } from './avatar_size';
import avatarSizeStyles from './avatar_size.css';
export const AvatarPlaceholder = ({ size = 'medium', index, shape = 'circle' })=>{
    const sizeStyle = useAvatarSizeStyle(size);
    return _jsx("div", {
        className: avatarSizeStyles.sizedContainer,
        style: sizeStyle,
        children: _jsx(Placeholder, {
            shape: shape,
            index: index
        })
    });
};
