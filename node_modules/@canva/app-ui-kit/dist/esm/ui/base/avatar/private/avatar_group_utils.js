import { jsx as _jsx } from "react/jsx-runtime";
import classnames from 'classnames';
import * as React from 'react';
import { useIsHoveringInput } from '../../a11y/pointer_input_state/pointer_input_state';
import { BaseButton } from '../../button/base_button/base_button';
import { MoreHorizontalIcon } from '../../icons/more_horizontal/icon';
import { NumberAbbreviationPresenter } from '../../number_abbreviation/number_abbreviation_presenter';
import { Tooltip } from '../../tooltip/tooltip';
import avatarStyles from './avatar.css';
import styles from './avatar_group.css';
import { AvatarGroupMessages } from './avatar_group.messages';
import { useAvatarSize, useAvatarSizeStyle } from './avatar_size';
import sizedAvatarStyles from './avatar_size.css';
import internalAvatarStyles from './internal_avatar.css';
export const OverflowCountUnknown = Symbol('OverflowCountUnknown');
export function OverflowAvatar(
    { count, size = 'medium', role = 'img', onClick, active, pressed, disclosure, ariaHasPopup, id, ariaOwns, tooltipLabel, ariaLabel, ref }
) {
    const hoverSupported = useIsHoveringInput();
    let label;
    if (tooltipLabel) label = tooltipLabel;
    else if (typeof count === 'number') label = AvatarGroupMessages.more(count);
    else label = AvatarGroupMessages.unknownMore();
    const avatarSize = useAvatarSize(size);
    const sizeStyle = useAvatarSizeStyle(size);
    const abbreviationPresenter = React.useMemo(()=>new NumberAbbreviationPresenter('en-US', {
            maximumSignificantDigits: 2
        }), []);
    const formattedCount = `+${abbreviationPresenter.abbreviateNumber(typeof count === 'number' ? count : 0)}`;
    const wrapWithContainer = (_children)=>{
        return _jsx("li", {
            className: classnames(styles.avatarGroupItem, {
                [styles.overflowAvatarSmall]: avatarSize ? parseFloat(avatarSize) < 3.2 : false,
                [styles.overflowAvatarAboveLarge]: avatarSize ? parseFloat(avatarSize) >= 6.4 : false,
                [styles.overflowAvatarThreeChars]: formattedCount.length === 3,
                [styles.overflowAvatarFourChars]: formattedCount.length === 4,
                [styles.overflowAvatarFiveChars]: formattedCount.length === 5
            }),
            style: sizeStyle,
            children: _children
        });
    };
    const children = _jsx("span", {
        className: classnames(internalAvatarStyles.avatar, sizedAvatarStyles.internalSizedContainer, styles.overflowAvatar),
        role: role,
        "aria-label": ariaLabel ?? label,
        children: count === OverflowCountUnknown ? _jsx(MoreHorizontalIcon, {}) : formattedCount
    });
    if (onClick) return wrapWithContainer(_jsx(BaseButton, {
        onClick: onClick,
        className: classnames(avatarStyles.avatarButton, {
            [styles.hoverSupported]: hoverSupported
        }),
        display: "block",
        borderRadius: "elementRound",
        position: "relative",
        pressed: pressed ?? active,
        disclosure: disclosure,
        ariaHasPopup: ariaHasPopup,
        id: id,
        ref: ref,
        ariaOwns: ariaOwns,
        ariaLabel: ariaLabel ?? label,
        tooltipLabel: label,
        children: children
    }));
    if (label && role !== 'presentation') return wrapWithContainer(_jsx(Tooltip, {
        label: label,
        children: ({ tooltipId, ...rest })=>_jsx("div", {
                className: styles.overflowAvatarContainer,
                ...rest,
                children: children
            })
    }));
    return wrapWithContainer(children);
}
