import * as React from 'react';
import type { Icon, IconSize, IconTone } from '../../icons/icons';
import type { SizingProps } from './thumbnail_container';
export type IconThumbnailProps = SizingProps & {
    Icon: Icon
    size?: IconSize
    tone?: IconTone
    background?: 'none' | 'secondary'
    border?: 'none' | 'low'
    padding?: 'none' | '1u' | '2u'
    borderRadius?: 'none' | 'elementSmall' | 'element' | 'elementRelaxed' | 'elementSoftest' | 'elementRound'
};
export declare function IconThumbnail(
 { tone, Icon, size, background, border, padding, borderRadius, aspectRatio, width, height, }: IconThumbnailProps
): React.JSX.Element;
