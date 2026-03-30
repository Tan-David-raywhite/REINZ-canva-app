import * as React from 'react';
import type { AutoFocusOption } from '../../../form/base_input/base_input';
export type ColorCodeInputProps = {
    color?: string
    onChange?: (color: string) => void
    alpha?: number
    onAlphaChange?: (alpha: number) => void
    showAlpha?: boolean
    withSwatch?: boolean
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    autoFocus?: AutoFocusOption
};
export declare function ColorCodeInput(
 { color: colorProp, alpha: alphaProp, onChange: onChangeProp, onAlphaChange: onAlphaChangeProp, showAlpha, withSwatch, ariaLabel, ariaLabelledBy, ariaDescribedBy, autoFocus, }: ColorCodeInputProps
): React.JSX.Element;
