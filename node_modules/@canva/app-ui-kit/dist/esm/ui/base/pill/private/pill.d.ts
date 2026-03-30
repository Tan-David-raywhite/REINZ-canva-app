import * as React from 'react';
import type { ButtonHandle } from '../../button/button';
import type { BasicHTMLHandle } from '../../handle/handle';
import type { TooltipProps } from '../../tooltip/tooltip';
export declare const pillSizes: readonly ["tiny", "xsmall", "small", "medium", "large"];
export type PillSize = (typeof pillSizes)[number];
export type PillRole = 'button' | 'switch' | 'combobox';
export type PillMaxWidth = '25u' | '100%';
export type PillHandle = ButtonHandle;
export type PillProps = {
    text: string
    size?: PillSize
    shape?: 'round' | 'rectangle'
    active?: boolean
    selected?: boolean
    pressed?: boolean
    disabled?: boolean
    maxWidth?: PillMaxWidth
    ref?: React.RefObject<PillHandle | null>
    start?: React.ReactNode | (() => React.ReactNode)
    end?: React.ReactNode | (() => React.ReactNode)
    id?: string
} & PillEventHandlerProps & PillA11yProps & PillTooltipProps;
type PillEventHandlerProps = {
    onRemoveClick?(): void
    onClick?(): void
};
type PillA11yProps = {
    role?: PillRole
    disclosure?: boolean
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    ariaControls?: string
    ariaHasPopup?: 'listbox'
    ariaActiveDescendant?: string
    ariaInvalid?: boolean
};
type PillTooltipProps = {
    tooltipLabel?: TooltipProps['label']
    tooltipDescription?: TooltipProps['description']
    tooltipDisabled?: TooltipProps['disabled']
    tooltipPlacement?: TooltipProps['placement']
    tooltipLineClamp?: TooltipProps['lineClamp']
};
export declare const Pill: React.ComponentType<React.PropsWithoutRef<PillProps> & React.RefAttributes<BasicHTMLHandle>>;
export {};
