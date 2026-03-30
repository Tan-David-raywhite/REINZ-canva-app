import * as React from 'react';
import type { FontSizeAdjust, FontStackMode } from './typography';
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | number;
type FontLoadResult = 'loaded' | 'failed';
type FontLoadStatus = 'loading' | FontLoadResult;
export declare function useScaledFallbackFontStyles(
 { componentType, fontWeight: fontWeightNameOrNumber, textContent, }: {
     componentType: 'title' | 'none'
     fontWeight: FontWeight
     textContent: React.ReactNode
 }
): {
    fontStackMode: FontStackMode;
    fontSizeAdjust?: FontSizeAdjust;
} | undefined;
declare function useFontLoadStatuses(
 { fontStack, text, fontSize, fontWeight, }: {
     fontStack: FontFamily[]
     text: string
     fontSize: number
     fontWeight: number
 }
): Map<FontFamily, FontLoadStatus> | undefined
declare class FontFamily {
    readonly postscriptName: string;
    readonly sourceType: 'web' | 'local';
    readonly charAspectRatios: Map<string, {
        regular: number;
        bold: number;
    }>;
    static get titleFontStack(): FontFamily[];
    static get vietnameseFontStack(): FontFamily[];
    constructor(postscriptName: string, sourceType: 'web' | 'local', charAspectRatios: Map<string, {
        regular: number;
        bold: number;
    }>);
    charAspectRatio(char: string, fontWeight: number): number | undefined;
    aspectRatioOfChar0(fontWeight: number): number;
    cssFontQuery(
     { fontSize, fontWeight }: {
         fontSize: number;
         fontWeight: number;
     }
    ): string;
    static readonly canvaSansDisplay: FontFamily;
    static readonly arial: FontFamily;
}
export declare const storybookOnly: {
    useFontLoadStatuses: typeof useFontLoadStatuses;
    FontFamily: typeof FontFamily;
};
export {};
