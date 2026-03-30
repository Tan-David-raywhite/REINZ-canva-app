import * as React from 'react';
import type { AvatarProps } from './avatar';
import { OverflowCountUnknown } from './avatar_group_utils';
export type AvatarGroupItem = Omit<AvatarProps, 'size' | 'onClick' | 'role'> | 'placeholder';
export type AvatarGroupProps = {
    avatars: AvatarGroupItem[]
    direction?: 'inherit' | 'reverse'
    size?: AvatarProps['size']
    overflowCount?: number | typeof OverflowCountUnknown
    onClick?: (index: number) => void
    overflowTooltip?: string
    overflowAriaLabel?: string
    onOverflowClick?: () => void
    role?: 'list' | 'presentation'
};
export declare const AvatarGroup: ({ avatars, size, direction, onClick, overflowCount, overflowTooltip, overflowAriaLabel, onOverflowClick, role: roleProp, }: AvatarGroupProps) => React.JSX.Element;
