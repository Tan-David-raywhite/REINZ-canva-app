import * as React from 'react';
import type { CommonProps } from '../../../box/common_props/common_props';
export declare const widths: readonly ["medium", "large"];
export type ContainerWidth = (typeof widths)[number];
export declare const heights: readonly ["full", "unset"];
export type ContainerHeight = (typeof heights)[number];
export type ContainerProps = {
    ref?: React.Ref<HTMLElement>
    children?: React.ReactNode
    width: ContainerWidth
    height?: ContainerHeight
} & CommonProps;
export declare function Container(
 { children, width, height, tagName: TagName, ref, ...rest }: ContainerProps
): React.ReactNode;
