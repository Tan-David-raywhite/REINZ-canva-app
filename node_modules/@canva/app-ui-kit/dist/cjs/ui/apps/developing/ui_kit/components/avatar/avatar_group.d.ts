import * as React from 'react';
import type { AvatarProps } from './avatar';
export type AvatarItem = Omit<AvatarProps, 'onClick'> | 'placeholder';
/** 
 * The props for the `AvatarGroup` component.
 */
export type AvatarGroupProps = {
    /** 
         * The data for the avatars to render within the group.
         *
         * @remarks
         * Passing a string of `"placeholder"` into the array will render an `AvatarPlaceholder` component at the corresponding position.
         */
    avatars: AvatarItem[];
    /** 
         * A number to indicate additional avatars not shown in the avatar group.
         * If defined, an overflow avatar is rendered that displays the number.
         *
         * @remarks
         * For example, imagine using this component to display the avatars of users working on a
         * design project. There may be 10 users, but you only want to show 5 avatars at a time. You
         * could pass 5 avatars into the `avatars` prop and the number `5` into this prop. This will
         * display 5 avatars and a "+5" button. The button is also known as the overflow avatar.
         */
    overflowCount?: number;
    /** 
         * A callback that runs when an avatar is clicked, not including the overflow avatar.
         *
         * @remarks
         * If defined, provide a `buttonAriaLabel` for each avatar in the `avatars` array.
         */
    onClick?: (index: number) => void;
    /** 
         * A callback that runs when the the overflow avatar is clicked.
         *
         * @remarks
         * This callback is only used if `overflowCount` is set.
         */
    onOverflowClick?: () => void;
};
/** 
 * AvatarGroup visually represent multiple users, teams or brands
 */
export declare function AvatarGroup(props: AvatarGroupProps): React.JSX.Element;
