import * as React from 'react';
import type { CommonProps } from '../../../box/common_props/common_props';
import type { Space } from '../../../metrics/metrics';
import type { ResponsiveValue } from '../../../responsive/responsive';
type BleedOptions = {
    x: ResponsiveValue<Space>
    y: ResponsiveValue<Space>
    start: ResponsiveValue<Space>
    end: ResponsiveValue<Space>
    top: ResponsiveValue<Space>
    bottom: ResponsiveValue<Space>
    all: ResponsiveValue<Space>
};
type Directions = keyof BleedOptions;
type OneDirectionOrMore = {
    [D in Directions]-?: Required<Pick<BleedOptions, D>> & Partial<Omit<BleedOptions, D>>;
}[Directions];
export type BleedProps = {
    ref?: React.Ref<HTMLElement>
    children: React.ReactNode
    tagName?: 'div' | 'span'
} & OneDirectionOrMore & Omit<CommonProps, 'tagName'>;
export declare function Bleed(
 { all, x, y, top, bottom, start, end, tagName: TagName, children, ref, ...rest }: BleedProps
): React.ReactNode;
export {};
