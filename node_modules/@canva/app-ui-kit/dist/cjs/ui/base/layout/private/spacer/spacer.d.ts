import * as React from 'react';
import type { Space } from '../../../metrics/metrics';
import type { RequiredResponsiveValue } from '../../../responsive/responsive';
export type SpacerSize = Exclude<Space, 'none'>;
export type SpacerProps = {
    size: RequiredResponsiveValue<SpacerSize>
    direction?: 'both' | 'horizontal' | 'vertical'
};
export declare const Spacer: ({ size, direction }: SpacerProps) => React.JSX.Element;
