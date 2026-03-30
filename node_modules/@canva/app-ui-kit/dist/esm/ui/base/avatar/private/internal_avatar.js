import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
import 'react';
import { doNotRecordClassName } from '../../interaction_recorder/do_not_record';
import { AcronymAvatar } from './acronym_avatar';
import defaultUserPhotoSrc from './avatar_default.file.svg';
import styles from './internal_avatar.css';
import { PictureAvatar } from './picture_avatar';
export const InternalAvatar = ({ name, ariaRole, ariaLabel, backgroundSeed, backgroundColor, borderColor, photo, className, style, shape = 'circle', ...tooltipTriggerProps })=>{
    const avatarClassName = classnames(styles.avatar, doNotRecordClassName, className, {
        [styles.square]: shape === 'square'
    });
    const role = ariaRole || 'presentation';
    if (photo) return _jsx(PictureAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        backgroundColor: getBackgroundColor('photo', backgroundColor),
        photoSrc: photo,
        ariaLabel: ariaLabel,
        role: role,
        ...tooltipTriggerProps
    });
    else if (name) return _jsx(AcronymAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        name: name,
        shape: shape,
        backgroundSeed: backgroundSeed,
        backgroundColor: getBackgroundColor('named', backgroundColor),
        role: role,
        ariaLabel: ariaLabel,
        ...tooltipTriggerProps
    });
    else return _jsx(PictureAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        photoSrc: defaultUserPhotoSrc,
        ariaLabel: ariaLabel,
        role: role,
        ...tooltipTriggerProps
    });
};
function isAvatarColorMap(value) {
    return typeof value === 'object' && value != null;
}
function getBackgroundColor(type, backgroundColor) {
    if (typeof backgroundColor === 'string') return type === 'named' ? backgroundColor : undefined;
    if (isAvatarColorMap(backgroundColor)) {
        if (type === 'photo')
            return backgroundColor.photo;
        else
            return backgroundColor.named;
    }
    return undefined;
}
