import * as React from 'react';
export type AlphaSliderProps = {
    alpha?: number
    color?: string
    onChange?: (alpha: number) => void
    onChangeStart?: () => void
    onChangeComplete?: () => void
    ariaLabel?: string
    showHandlePreview?: 'touch-only' | 'always' | 'never'
};
export declare const AlphaSlider: ({ alpha: alphaProp, color: colorProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel, showHandlePreview, }: AlphaSliderProps) => React.JSX.Element;
