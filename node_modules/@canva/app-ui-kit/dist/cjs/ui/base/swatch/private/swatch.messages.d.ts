export declare const SwatchMessages: {
    cmykInfo: (colorCmykValue: string) => string
    colorTitleWithCmykInfo: (colorRgbValue: string, colorCmykInfo: string) => string
    colorSemiTransparentLabel: (colors: string) => string
    colorTransparentLabel: () => string
    colorLinearGradientLabel: (rotation: number, colors: string) => string
    colorCircularRadialGradientLabel: (position: string, colors: string) => string
    colorWithTransparencyLabel: (color: string, transparency: string) => string
    colorRangeLabel: () => string
    invalidColor: () => string
    deleteTooltip: () => string
    addColor: () => string
};
