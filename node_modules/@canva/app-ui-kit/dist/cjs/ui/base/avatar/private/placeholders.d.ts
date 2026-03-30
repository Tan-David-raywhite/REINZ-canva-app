import * as React from 'react';
import type { AvatarSize } from './avatar_size';
import type { AvatarShape } from './internal_avatar';
export type AvatarPlaceholderProps = {
    size?: AvatarSize
    index?: number
    shape?: AvatarShape
};
export declare const AvatarPlaceholder: ({ size, index, shape, }: AvatarPlaceholderProps) => React.JSX.Element;
