import * as React from 'react';
import type { TypographySize, TypographyWeight } from '../../../typography/typography';
export type LabelMarker = 'optional' | 'required' | 'none';
export type LabelTextProps = {
    id?: string
    className?: string
    disabled?: boolean
    children?: any
};
export declare const RadioLabelText: (props: LabelTextProps) => React.JSX.Element;
export declare const CheckboxLabelText: (props: LabelTextProps) => React.JSX.Element;
export declare const LabelText: (props: LabelTextProps) => React.JSX.Element;
export declare const LabelMediumText: (props: LabelTextProps) => React.JSX.Element;
export type LabelSize = Extract<TypographySize, 'small' | 'medium'>;
export type LabelProps = {
    children?: React.ReactNode
    disabled?: boolean
    htmlFor?: string
    id?: string
    variant?: TypographyWeight
    size?: LabelSize
    stopClickPropagation?: boolean
    marker?: LabelMarker
};
export declare const Label: ({ children, disabled, htmlFor, id, variant, size, stopClickPropagation, marker, }: LabelProps) => React.JSX.Element | null;
