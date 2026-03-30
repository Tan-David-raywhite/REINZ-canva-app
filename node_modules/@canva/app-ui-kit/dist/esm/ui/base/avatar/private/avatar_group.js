import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { elevationSurfaceBg } from '../../tokens/elevation';
import { Avatar } from './avatar';
import styles from './avatar_group.css';
import { OverflowAvatar, OverflowCountUnknown } from './avatar_group_utils';
import { useAvatarSizeStyle } from './avatar_size';
import { AvatarPlaceholder } from './placeholders';
export const AvatarGroup = ({ avatars, size = 'medium', direction = 'inherit', onClick, overflowCount = 0, overflowTooltip, overflowAriaLabel, onOverflowClick, role: roleProp = 'list' })=>{
    const role = onClick || onOverflowClick || overflowTooltip ? 'list' : roleProp;
    const avatarItems = React.useMemo(()=>{
        const items = direction === 'reverse' ? [
            ...avatars
        ].reverse() : avatars;
        return items.map((avatarItemProp, index)=>{
            if (avatarItemProp === 'placeholder') return _jsx(AvatarPlaceholder, {
                size: size,
                index: index
            }, index);
            return _jsx(Avatar, {
                photo: avatarItemProp.photo,
                backgroundSeed: avatarItemProp.backgroundSeed,
                backgroundColor: avatarItemProp.backgroundColor,
                borderColor: avatarItemProp.borderColor ?? elevationSurfaceBg,
                name: avatarItemProp.name ?? '',
                shape: avatarItemProp.shape,
                tooltipLabel: avatarItemProp.tooltipLabel,
                tooltipDescription: avatarItemProp.tooltipDescription,
                href: avatarItemProp.href,
                target: avatarItemProp.target,
                role: role === 'presentation' ? 'presentation' : 'img',
                size: size,
                showOverlay: avatarItemProp.showOverlay,
                overlayContent: avatarItemProp.overlayContent,
                onClick: onClick ? ()=>onClick?.(index) : undefined,
                buttonAriaLabel: avatarItemProp.buttonAriaLabel,
                buttonAriaLabelledBy: avatarItemProp.buttonAriaLabelledBy,
                buttonAriaDescribedBy: avatarItemProp.buttonAriaDescribedBy
            }, `${avatarItemProp.name}_${index}`);
        });
    }, [
        avatars,
        role,
        size,
        onClick,
        direction
    ]);
    const overflowAvatar = _jsx(OverflowAvatar, {
        tooltipLabel: overflowTooltip,
        ariaLabel: overflowAriaLabel,
        count: overflowCount,
        size: size,
        onClick: onOverflowClick,
        role: role === 'presentation' ? 'presentation' : 'img'
    });
    const sizeStyle = useAvatarSizeStyle(size);
    const showOverflow = overflowCount === OverflowCountUnknown || overflowCount > 0;
    return _jsxs("ul", {
        role: role,
        className: styles.avatarGroup,
        children: [
            direction === 'reverse' && showOverflow && overflowAvatar,
            avatarItems.map((item, index)=>_jsx("li", {
                    className: styles.avatarGroupItem,
                    style: {
                        zIndex: direction === 'reverse' ? index : avatars.length - index,
                        ...sizeStyle
                    },
                    children: item
                }, index)),
            direction === 'inherit' && showOverflow && overflowAvatar
        ]
    });
};
