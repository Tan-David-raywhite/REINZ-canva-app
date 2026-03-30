import * as React from 'react';
import { HsvColor } from '../hsv_color/hsv_color';
export type ColorPickerChangeSource = 'hex' | 'satVal' | 'hue' | 'alpha' | undefined;
type ColorPickerControls<TSource extends ColorPickerChangeSource = ColorPickerChangeSource> = {
    setColor?: (color: Partial<HsvColor>, source?: TSource) => void
    onChangeStart?: () => void
    onChangeComplete?: () => void
};
export declare function ColorPickerHueProvider(
 { hue, children, }: {
     hue: number
     children: React.ReactNode
 }
): React.JSX.Element;
export declare function ColorPickerSaturationProvider(
 { saturation, children, }: React.PropsWithChildren<{
     saturation: number
 }>
): React.JSX.Element;
export declare function ColorPickerValueProvider(
 { value, children, }: React.PropsWithChildren<{
     value: number
 }>
): React.JSX.Element;
export declare function ColorPickerAlphaProvider(
 { alpha, children, }: React.PropsWithChildren<{
     alpha?: number
 }>
): React.JSX.Element;
export declare function ColorPickerControlsProvider<TSource extends ColorPickerChangeSource = ColorPickerChangeSource>(
 { setColor, onChangeStart, onChangeComplete, children, }: React.PropsWithChildren<ColorPickerControls<TSource>>
): React.JSX.Element;
export declare function useColorPickerHue(): number | undefined;
export declare function useColorPickerSaturation(): number | undefined;
export declare function useColorPickerValue(): number | undefined;
export declare function useColorPickerAlpha(): number | undefined;
export declare function useColorPickerColor(): HsvColor | undefined;
export declare function useColorPickerHex(): string | undefined;
export declare function useColorPickerControls(): ColorPickerControls<ColorPickerChangeSource> | undefined;
export {};
