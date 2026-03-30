import * as React from 'react';
import type { CommonProps } from '../../../box/common_props/common_props';
import type { Space } from '../../../metrics/metrics';
import type { ResponsiveValue } from '../../../responsive/responsive';
export declare const aligns: readonly ["start", "center", "end", "stretch"];
export type RowsAlign = (typeof aligns)[number];
export type RowsProps = {
    ref?: React.Ref<HTMLElement>
    spacing: ResponsiveValue<Space>
    align?: ResponsiveValue<RowsAlign>
} & CommonProps;
export declare function Rows(
 { children, spacing, align, tagName: TagName, ref, ...rest }: React.PropsWithChildren<RowsProps>
): React.ReactNode;
