import * as React from 'react';
/** 
 * The props for the `Avatar` component.
 */
export type AvatarProps = {
    /** 
         * The URL of the image to display within the avatar.
         *
         * @remarks
         * The image must be one of the following formats:
         *
         * - GIF (.gif)
         * - JPEG (.jpg or .jpeg)
         * - PNG (.png)
         * - SVG (.svg)
         *
         * The URL must be an HTTPS URL or a base64-encoded data URL.
         */
    photo?: string;
    /** 
         * The name of the entity that the avatar represents, such as the name of a person.
         *
         * @remarks
         * If `photo` isn't defined, the initials of this name are displayed within the avatar.
         * If `buttonAriaLabel` isn't defined, this name is read aloud by screen readers.
         */
    name: string;
    /** 
         * A seed value that's used to generate a stable randomized color for the avatar's background.
         *
         * @remarks
         * This color is only used if `photo` and `backgroundColor` are not defined.
         */
    backgroundSeed?: string;
    /** 
         * The background color of the avatar.
         *
         *  @remarks
         * The color must be in one of the following formats:
         *
         * - #AAA
         * - AAA
         *  - #AAAAAA
         *  - AAAAAA
         *  - rgb(255, 255, 255)
         *
         *  This color is only used if `photo` is not defined. */
    backgroundColor?: string;
    /** 
         * A callback that runs when the avatar is clicked.
         *
         * @remarks
         * If this callback is defined, use `buttonAriaLabel` to indicate what happens when the avatar is clicked.
         */
    onClick?: () => void;
    buttonAriaLabel?: string
};
/** 
 * Avatar is a pictorial representation of a user or an entity.
 *
 * The avatar sources' order of precedence is as follows:
 * 1. `photo`: url passed will be used to render an image
 * 2. `name`: 2-char initials (or 1-char for single-worded name) will be rendered
 *
 * To make an Avatar interactive, you can pass `onClick` to the Avatar component.
 */
export declare function Avatar(props: AvatarProps): React.JSX.Element;
