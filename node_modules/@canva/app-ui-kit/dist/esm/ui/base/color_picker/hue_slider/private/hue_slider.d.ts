import * as React from 'react';
export type HueSliderProps = {
    hue?: number
    onChange?: (hue: number) => void
    onChangeStart?: () => void
    onChangeComplete?: () => void
    ariaLabel?: string
    showHandlePreview?: 'touch-only' | 'always' | 'never'
};
export declare function HueSlider(
 { hue: hueProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel, showHandlePreview, }: HueSliderProps
): React.JSX.Element;
