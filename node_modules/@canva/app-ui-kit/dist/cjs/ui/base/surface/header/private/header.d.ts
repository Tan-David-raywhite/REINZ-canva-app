import * as React from 'react';
import type { ButtonProps } from '../../../button/button';
import type { Icon } from '../../../icons/icons';
import type { Space } from '../../../metrics/metrics';
export type SurfaceHeaderProps = {
    title?: string | React.ReactNode
    titleId?: string
    description?: string | React.ReactNode
    descriptionId?: string
    alignText?: 'start' | 'center'
    start?: React.ReactNode
    end?: React.ReactNode | 'none'
    padding?: Space
    paddingX?: Space
    paddingY?: Space
};
type SurfaceHeaderContextType = Pick<SurfaceHeaderProps, 'alignText' | 'end'>;
export declare const SurfaceHeaderContextProvider: ({ children, end, alignText, }: {
    children: React.ReactNode
} & SurfaceHeaderContextType) => React.ReactElement;
export declare const SurfaceHeader: ({ title, titleId, description, descriptionId, alignText, start, end, padding, paddingX, paddingY, }: SurfaceHeaderProps) => React.JSX.Element;
export declare const SurfaceHeaderTitle: ({ children, id, alignment, }: {
    children: string
    alignment?: "start" | "center"
    id?: string
}) => React.JSX.Element;
export declare const SurfaceHeaderDescription: ({ children, alignment, id, }: {
    children: string
    alignment?: "start" | "center"
    id?: string
}) => React.JSX.Element;
type SurfaceHeaderIconButtonProps = Omit<ButtonProps, 'variant' | 'icon' | 'ariaLabel' | 'size' | 'children' | 'tooltipLabel'> & {
    icon: Icon
} & ({
    tooltipLabel: string
} | {
    ariaLabel: string
});
export declare const SurfaceHeaderIconButton: (props: SurfaceHeaderIconButtonProps) => React.JSX.Element;
type PredefinedIconButtonProps = Omit<ButtonProps, 'variant' | 'icon' | 'size' | 'children'>;
export declare const SurfaceHeaderBackButton: ({ ariaLabel, ...props }: PredefinedIconButtonProps) => React.JSX.Element;
export declare const SurfaceHeaderCloseButton: ({ ariaLabel, ...props }: PredefinedIconButtonProps) => React.JSX.Element;
type SurfaceHeaderTextButtonProps = Omit<ButtonProps, 'variant' | 'icon' | 'ariaLabel' | 'size'>;
export declare const SurfaceHeaderTextButton: (props: SurfaceHeaderTextButtonProps) => React.JSX.Element;
export {};
