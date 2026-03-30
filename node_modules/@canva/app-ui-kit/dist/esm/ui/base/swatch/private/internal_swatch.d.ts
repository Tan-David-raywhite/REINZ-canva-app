import * as React from 'react';
import type { FocusHandle } from '../../handle/handle';
import type { HtmlEncodedCssList } from '../../html/encode';
import type { SwatchProps } from './swatch';
export type Shape = 'circle' | 'square';
export type Size = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large';
export type StaticSwatchHandle = FocusHandle;
export type ClickableSwatchHandle = FocusHandle;
export type DeletableSwatchHandle = FocusHandle;
export declare function getBorderRadiusStyles(shape: Shape, size: Size): HtmlEncodedCssList | undefined;
type StaticSwatchProps = {
    ref?: React.Ref<FocusHandle>
    className: string
    children: React.ReactNode
    ariaLabel?: string
    ariaDescribedBy?: string
    ariaLabelledBy?: string
    id?: string
    isRoot: boolean
};
export declare function StaticSwatch(
 { className, children, ariaLabel, ariaDescribedBy, ariaLabelledBy, id, isRoot, ref, }: StaticSwatchProps
): React.ReactNode;
type ClickableSwatchProps = Pick<SwatchProps, 'size' | 'shape' | 'onClick' | 'active' | 'selected' | 'pressed' | 'disabled' | 'disclosure' | 'role' | 'ref' | 'tabIndex' | 'ariaLabel' | 'stretch' | 'aspectRatio' | 'ariaHasPopup' | 'ariaControls' | 'tooltipLabel' | 'tooltipDescription' | 'disableTooltip' | 'id'> & {
    children: React.ReactNode
    isRoot: boolean;
};
export declare const ClickableSwatch: React.ComponentType<ClickableSwatchProps>;
type DeletableSwatchProps = Pick<SwatchProps, 'onDelete' | 'stretch' | 'aspectRatio' | 'deleteButtonVisibility' | 'disableTooltip' | 'ref'> & {
    children: React.ReactNode
    isRoot: boolean
};
export declare const DeletableSwatch: React.ComponentType<DeletableSwatchProps>;
export {};
