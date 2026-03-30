import * as React from 'react';
import type { ButtonHandle, ButtonProps } from '../../button/button';
import type { AvatarProps } from './avatar';
export declare const OverflowCountUnknown: unique symbol;
export type OverflowAvatarHandle = ButtonHandle;
export type OverflowAvatarProps = {
    ref?: React.Ref<OverflowAvatarHandle>
    count: number | typeof OverflowCountUnknown
    size: AvatarProps['size']
    role?: AvatarProps['role']
    onClick?: AvatarProps['onClick']
    active?: ButtonProps['active']
    pressed?: ButtonProps['pressed']
    disclosure?: ButtonProps['disclosure']
    ariaHasPopup?: ButtonProps['ariaHasPopup']
    id?: ButtonProps['id']
    ariaOwns?: ButtonProps['ariaOwns']
    tooltipLabel?: ButtonProps['tooltipLabel']
    ariaLabel?: ButtonProps['ariaLabel']
};
export declare function OverflowAvatar(
 { count, size, role, onClick, active, pressed, disclosure, ariaHasPopup, id, ariaOwns, tooltipLabel, ariaLabel, ref, }: OverflowAvatarProps
): React.ReactNode;
