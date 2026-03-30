import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import styles, { customProperties } from './picture_avatar.css';
export const PictureAvatar = ({ borderColor, backgroundColor, photoSrc, ariaLabel, className, style, role, ...tooltipTriggerProps })=>{
    return _jsx("span", {
        className: classNames(className, {
            [styles.background]: backgroundColor,
            [styles.border]: borderColor,
            [styles.defaultBorder]: !borderColor
        }),
        style: {
            backgroundImage: `url(${photoSrc})`,
            [customProperties.backgroundColor]: backgroundColor,
            [customProperties.borderColor]: borderColor,
            ...style
        },
        role: role,
        "aria-label": role === 'img' ? ariaLabel : undefined,
        ...tooltipTriggerProps
    });
};
