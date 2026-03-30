export type GradientStop = {
    color: string
    transparency?: number
    position: number
};
export type FillObject = {
    type: 'linear';
    stops: GradientStop[];
    rotation: number
} | {
    type: 'radial';
    stops: GradientStop[];
    center: {
        top: number;
        left: number;
    }
};
export type Fill = readonly (string | undefined | FillObject)[] | 'circularSpectrum' | 'linearSpectrum';
export type FillBox = {
    top: number;
    left: number;
    height: number;
    width: number;
};
export declare function isFillObject(color: unknown): color is FillObject;
export declare const toStripePosition: (index: number, totalStripes: number) => string;
export declare const toStripeWidth: (width: number, listSize: number) => string;
export declare const getValidGradientString: (color: string) => string;
export declare const normalizeValue: (v: number) => string;
export declare const generateSwatchLabel: ({ areAllColorsTransparent, colors, rgbToCmyk, fill, isAtleastOneColorTransparent, areNoColorsApplied, }: {
    areAllColorsTransparent?: boolean;
    colors?: Exclude<Fill, "circularSpectrum" | "linearSpectrum">;
    rgbToCmyk?: ReadonlyMap<string, string>;
    fill: Fill;
    isAtleastOneColorTransparent?: boolean;
    areNoColorsApplied?: boolean;
}) => string;
export declare const getSwatchName: (colors?: Exclude<Fill, "circularSpectrum" | "linearSpectrum">, colorNames?: ReadonlyMap<string | FillObject, string>) => string | undefined;
export declare function useContrastingColors(colors: Fill, shouldContrastColor: boolean): 'circularSpectrum' | (string | FillObject | undefined)[];
export declare function linearGradientLine(
 { box: { top, left, height, width }, rotation, }: {
     box: FillBox;
     rotation: number;
 }
): {
    length: number;
    center: {
        x: number;
        y: number;
    };
    start: {
        x: number;
        y: number;
    };
    end: {
        x: number;
        y: number;
    };
};
export declare function radialGradientRadius(
 { box, center, }: {
     box: FillBox;
     center: {
         top: number;
         left: number;
     };
 }
): number;
export declare function toVerticalStripeBox(container: FillBox, numStripes: number, index: number): FillBox;
export declare function fixPrecisionError(p: number): number;
