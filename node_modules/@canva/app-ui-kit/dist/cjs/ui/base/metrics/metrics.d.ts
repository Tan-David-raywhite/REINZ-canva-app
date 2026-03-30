export declare const baseUnit: number;
export declare const enum Breakpoint {
 DEFAULT = 0,
 SMALL = 1,
 MEDIUM = 2,
 LARGE = 3,
 XLARGE = 4
}
export declare const smallBreakpoint: number;
export declare const mediumBreakpoint: number;
export declare const largeBreakpoint: number;
export declare const xLargeBreakpoint: number;
export declare const breakpointFromScreenWidth: (width: number) => Breakpoint;
export declare const aboveSmall: (breakpoint: Breakpoint) => boolean;
export declare const belowSmall: (breakpoint: Breakpoint) => boolean;
export declare const aboveMedium: (breakpoint: Breakpoint) => boolean;
export declare const belowMedium: (breakpoint: Breakpoint) => boolean;
export declare const aboveLarge: (breakpoint: Breakpoint) => boolean;
export declare const belowLarge: (breakpoint: Breakpoint) => boolean;
export declare const aboveXLarge: (breakpoint: Breakpoint) => boolean;
export declare const belowXLarge: (breakpoint: Breakpoint) => boolean;
export declare const unitSpaces: readonly ["0", "0.25u", "0.5u", "1u", "1.5u", "2u", "3u", "4u", "6u", "8u", "12u"];
export type UnitSpace = (typeof unitSpaces)[number];
export type Space = UnitSpace;
export declare const getSpaceValue: (space: Space) => string;
export type UnitSize = '0' | '1u' | '2u' | '3u' | '4u' | '5u' | '6u' | '7u' | '8u' | '9u' | '10u' | '12u' | '15u' | '16u' | '20u';
export declare const unitSizeToNumber: (unitSize: UnitSize) => number;
export declare const resolveUnitOrNumberSize: (size?: number | UnitSize) => number | undefined;
export declare const DEFAULT_ROOT_FONT_SIZE = 10;
export declare const useBaseUnitInRem: () => number;
export declare const getRootFontSize: () => number;
export declare const useTextZoomBaseUnit: (currentRootFontSize?: number) => number;
