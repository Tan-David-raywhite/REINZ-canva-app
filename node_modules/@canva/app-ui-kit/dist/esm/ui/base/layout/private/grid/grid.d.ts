import * as React from 'react';
import type { CommonProps } from '../../../box/common_props/common_props';
import type { Space } from '../../../metrics/metrics';
import type { RequiredResponsiveValue, ResponsiveValue } from '../../../responsive/responsive';
export type GridColumn = number;
export declare const rowSizes: readonly ["auto", "equal"];
export type GridRowSize = (typeof rowSizes)[number];
export declare const aligns: readonly ["stretch", "start", "center", "end"];
export type GridAlign = (typeof aligns)[number];
export type GridProps = {
    ref?: React.Ref<HTMLElement>
    columns: RequiredResponsiveValue<GridColumn>
    rowSize?: ResponsiveValue<GridRowSize>
    spacing?: ResponsiveValue<Space>
    spacingX?: ResponsiveValue<Space>
    spacingY?: ResponsiveValue<Space>
    alignY?: ResponsiveValue<GridAlign>
    alignX?: ResponsiveValue<GridAlign>
} & CommonProps;
export declare function Grid(
 { children, spacing, spacingX, spacingY, columns, rowSize, tagName: TagName, alignY, alignX, ref, ...rest }: React.PropsWithChildren<GridProps>
): React.ReactNode;
