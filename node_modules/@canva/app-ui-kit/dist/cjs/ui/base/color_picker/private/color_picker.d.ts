import * as React from 'react';
import type { AutoFocusOption } from '../../form/base_input/base_input';
export type ColorPickerChangeSource = 'hex' | 'satVal' | 'hue' | 'alpha' | undefined;
export type ColorPickerProps<TSource extends ColorPickerChangeSource = ColorPickerChangeSource> = {
    color?: string
    alpha?: number
    body?: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    autoFocusHexInput?: AutoFocusOption
    showHandlePreview?: 'touch-only' | 'always' | 'never'
} & ColorPickerEventHandlers<TSource>;
type ColorPickerEventHandlers<TSource extends ColorPickerChangeSource = ColorPickerChangeSource> = {
    onChangeStart?: () => void
    onChangeComplete?: () => void
    onChange?: (color: string, source: TSource, alpha?: number) => void
    onStartEyedropper?: (event: React.MouseEvent<any>) => Promise<void>
    onEyedropperBackButton?: () => void
    onDeleteColor?: () => void
};
export declare function ColorPicker<TSource extends ColorPickerChangeSource = ColorPickerChangeSource>(
 { color, alpha, onChange, onChangeStart, onChangeComplete, onStartEyedropper, onEyedropperBackButton, onDeleteColor, body, header, footer, autoFocusHexInput, showHandlePreview, }: ColorPickerProps<TSource>
): React.JSX.Element;
export type BaseColorPickerProps<TSource extends ColorPickerChangeSource = ColorPickerChangeSource> = {
    color?: string
    alpha?: number
    onChange?: (color: string, source: TSource, alpha?: number) => void
    onChangeStart?: () => void
    onChangeComplete?: () => void
    children: React.ReactNode
};
export declare function BaseColorPicker<TSource extends ColorPickerChangeSource = ColorPickerChangeSource>(
 { color: colorProp, alpha: alphaProp, onChange: onChangeProp, onChangeStart, onChangeComplete, children, }: BaseColorPickerProps<TSource>
): React.JSX.Element;
export {};
