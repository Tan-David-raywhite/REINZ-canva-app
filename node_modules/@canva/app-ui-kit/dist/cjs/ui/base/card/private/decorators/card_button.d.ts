import * as React from 'react';
import type { ButtonVariant } from '../../../button/button';
import type { Icon } from '../../../icons/icons';
import type { PopoverProps } from '../../../surface/popover/popover';
import type { CardDecoratorProps } from './card_decorator';
export type CardButtonSize = 'small' | 'medium';
type Child = React.ReactElement<CardMenuButtonProps> | undefined | false | null;
type CardButtonGroupProps = {
    children?: Child | Child[]
    disabled?: boolean
    size?: CardButtonSize
    visibility?: CardDecoratorProps['visibility']
    transition?: CardDecoratorProps['transition']
    location: CardDecoratorProps['location']
};
export declare const getCardButtonLabel: (action: string, cardName?: string) => string;
export declare const CardButtonGroup: (props: CardButtonGroupProps) => React.JSX.Element;
type CardButtonProps = {
    icon: Icon
    ariaLabel: string
    onClick: () => void
    className?: string
    disabled?: boolean
    size?: CardButtonSize
    variant?: ButtonVariant
};
export declare const CardButton: React.ComponentType<CardButtonProps>;
type CardMenuButtonProps = {
    icon?: Icon
    ariaLabel?: string
    className?: string
    disabled?: boolean
    size?: CardButtonSize
    variant?: ButtonVariant
    Popover?: React.ComponentType<PopoverProps>
    popoverContent: React.ReactNode | ((arg: {
        togglePopover(): void;
    }) => React.ReactNode)
    onContextMenu?: React.MouseEventHandler
};
export declare const CardMenuButton: React.ComponentType<CardMenuButtonProps>;
type StatelessCardMenuButtonProps = CardMenuButtonProps & {
    isOpen: boolean
    togglePopover: () => void
};
export declare const StatelessCardMenuButton: (props: StatelessCardMenuButtonProps) => React.JSX.Element;
export {};
