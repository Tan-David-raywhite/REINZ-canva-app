import * as React from 'react';
import type { BarSnapBehavior } from './bar_snap_behavior';
export type SharedSliderProps = {
    id?: string
    min: number
    max: number
    step?: number | 'any'
    snap?: number
    origin?: number
    disabled?: boolean
    trackColor?: string
    fillColor?: string
} & SharedSliderA11yProps & SharedSliderEventHandlerProps;
type SharedSliderA11yProps = {
    ariaLabelledBy?: string
    ariaLabel?: string
    ariaDescribedBy?: string
    ariaValueText?: string
};
type SharedSliderEventHandlerProps = {
    onBarResize?: (opts: {
        width: number;
        start: number;
    }) => void
    onDragStart?: () => void
    onChangeComplete?: (previousValue: number, newValue: number) => void
};
export type BaseSliderProps = SharedSliderProps & {
    value: number
    onChange: (value: number) => void
    blurOnDragEnd?: boolean
    snapBehavior?: BarSnapBehavior
    onDragEnd?: () => void
    track?: (props: TrackProps) => React.ReactNode
    fill?: (props: FillProps) => React.ReactNode
    handle?: (props: HandleProps) => React.ReactNode
};
type BaseSliderState = {
    active: boolean
    focused: boolean
    handleHovering: boolean
    trackHovering: boolean
    width: number
    leftBound: number
};
export declare const BaseSlider: React.ComponentType<BaseSliderProps>;
export type TrackProps = {
    color?: string
} & Pick<BaseSliderProps, 'min' | 'max' | 'snap'>;
export type FillProps = {
    trackWidth: number
    startFill: number
    endFill: number
    color: string | undefined
} & Pick<BaseSliderProps, 'disabled'>;
export type HandleProps = BaseSliderState & Pick<BaseSliderProps, 'disabled'>;
export {};
