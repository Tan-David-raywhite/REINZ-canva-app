import * as React from 'react';
import type { UnitSpace as Space } from '../metrics/metrics';
export declare const backgroundTones: readonly ["feedbackOverlay", "neutral", "neutralSubtle", "elevationSurfaceSunken", "elevationSurface", "elevationSurfaceRaised", "elevationSurfaceFloating"];
/** 
 * The border of a box.
 */
export declare const borders: readonly ["none", "control", "controlCritical", "ui"];
/** 
 * The border radius of a box.
 */
export declare const borderRadiuses: readonly ["none", "standard", "large"];
/** 
 * The size of a box.
 */
export declare const sizes: readonly ["unset", "full"];
/** 
 * The display of a box.
 */
export declare const displays: readonly ["block", "none", "flex", "inline-flex"];
/** 
 * The flex-direction css property of a box.
 */
export declare const flexDirections: readonly ["row", "column"];
/** 
 * The flex-wrap css property of a box.
 */
export declare const flexWraps: readonly ["noWrap", "wrap"];
/** 
 * The justify-content css property of a box.
 */
export declare const justifyContents: readonly ["normal", "center", "start", "end", "spaceBetween"];
/** 
 * The align-items css property of a box.
 */
export declare const alignItems: readonly ["stretch", "center", "start", "end"];
type DeprecatedBackground = 'contrast' | 'neutralLow' | 'canvas' | 'tabdock' | 'page' | 'surface';
/** 
 * The background of a box.
 */
export type Background = (typeof backgroundTones)[number] | DeprecatedBackground;
type DeprecatedBorder = 'standard' | 'critical' | 'low';
/** 
 * The border of a box.
 */
export type Border = (typeof borders)[number] | DeprecatedBorder;
/** 
 * The border radius of a box.
 */
export type BorderRadius = (typeof borderRadiuses)[number];
/** 
 * The display of a box.
 */
export type Display = (typeof displays)[number];
/** 
 * The flex-direction css property of a box.
 */
export type FlexDirection = (typeof flexDirections)[number];
/** 
 * The flex-wrap css property of a box.
 */
export type FlexWrap = (typeof flexWraps)[number];
/** 
 * The justify-content css property of a box.
 */
export type JustifyContent = (typeof justifyContents)[number];
/** 
 * The align-items css property of a box.
 */
export type AlignItems = (typeof alignItems)[number];
/** 
 * The size of a box.
 */
export type Size = (typeof sizes)[number];
/** 
 * The props for a `Box` component.
 */
export type BoxProps = {
    /** 
         * The display of the box.
         *
         * @remarks Set to 'none' for conditional hiding.
         *
         * @defaultValue "block"
         */
    display?: Display;
    /** 
         * The flex direction of the box.
         *
         * @remarks To be used when `display` property is set to `flex`.
         *
         * @defaultValue "row"
         */
    flexDirection?: FlexDirection;
    /** 
         * The flex wrap of the box.
         *
         * @remarks To be used when `display` property is set to `flex`.
         *
         * @defaultValue "noWrap"
         */
    flexWrap?: FlexWrap;
    /** 
         * The justify-content css property of the box.
         *
         * @remarks
         * To be used when `display` property is set to `flex` to control the alignment of items on the main axis.
         *
         * @defaultValue "normal"
         */
    justifyContent?: JustifyContent;
    /** 
         * The align-items css property of the box.
         *
         * @remarks
         * To be used when `display` property is set to `flex` to control the alignment of items on the cross axis.
         *
         * @defaultValue "stretch"
         */
    alignItems?: AlignItems;
    /** 
         * The background of the box. This prop restricts the text color that descendant typography components can inherit.
         */
    background?: Background;
    /** 
         * A border that's applied to all edges of the box.
         * @defaultValue "none"
         */
    border?: Border;
    /** 
         * The curvature of the box's corners.
         * @defaultValue "none"
         */
    borderRadius?: BorderRadius;
    /** 
         * The padding for all edges of the box, in units.
         * @defaultValue "0"
         */
    padding?: Space;
    /** 
         * The padding for the horizontal edges of the box, in units.
         * @defaultValue "0"
         */
    paddingX?: Space;
    /** 
         * The padding for the vertical edges of the box, in units.
         * @defaultValue "0"
         */
    paddingY?: Space;
    /** 
         * The padding for the top edge of the box, in units.
         * @defaultValue "0"
         */
    paddingTop?: Space;
    /** 
         * The padding for the bottom edge of the box, in units.
         * @defaultValue "0"
         */
    paddingBottom?: Space;
    /** 
         * The padding for the starting edge of the box, in units.
         * @defaultValue "0"
         */
    paddingStart?: Space;
    /** 
         * The padding for the ending edge of the box, in units.
         * @defaultValue "0"
         */
    paddingEnd?: Space;
    /** 
         * The width of the box. If `"full"`, the box fills the available width.
         * @defaultValue "unset"
         */
    width?: Size;
    /** 
         * The height of the box. If `"full"`, the box fills the available height.
         * @defaultValue "unset"
         */
    height?: Size;
    /** 
         * The content of the box.
         */
    children?: React.ReactNode;
    /** 
         * A className for the underlying `HTMLDivElement`.
         */
    className?: string;
    /** 
         * An ID for the underlying `HTMLDivElement`.
         */
    id?: string;
};
/** 
 * An `HTMLDivElement` with a restricted set of props that adhere to Canva's design system.
 */
export declare function Box(props: BoxProps): React.JSX.Element;
export {};
