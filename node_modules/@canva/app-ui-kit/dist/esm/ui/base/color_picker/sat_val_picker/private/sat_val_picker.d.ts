import * as React from 'react';
import { HsvColor } from '../../hsv_color/hsv_color';
import type { DraggableProps } from '../../../draggable/draggable_view';
export type SalValPickerProps = {
    color?: HsvColor
    onChange?: (color: HsvColor) => void
    onChangeStart?: () => void
    onChangeComplete?: () => void
    Draggable?: React.ComponentType<DraggableProps>
    showHandlePreview?: 'touch-only' | 'always' | 'never'
};
export declare function SatValPicker(
 { color: colorProp, Draggable, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, showHandlePreview, }: SalValPickerProps
): React.JSX.Element;
export declare function mouseToHandleCoords(pickerRect: DomRect, { clientX, clientY }: MouseCoords): HandleCoordsFromCorner;
type DomRect = {
    left: number;
    top: number;
    width: number;
    height: number;
};
type HandleCoordsFromCorner = {
    leftPercent: number;
    topPercent: number;
};
type MouseCoords = {
    clientX: number;
    clientY: number;
};
export {};
