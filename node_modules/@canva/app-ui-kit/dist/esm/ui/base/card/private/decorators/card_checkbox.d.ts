import * as React from 'react';
import type { CardDecoratorProps } from './card_decorator';
type CardCheckboxProps = {
    onSelect?: () => void
    label: string
    selected: boolean
    disabled?: boolean
};
export declare const CardCheckbox: (props: CardCheckboxProps) => React.JSX.Element;
type CardCheckboxDecoratorProps = CardCheckboxProps & {
    location: CardDecoratorProps['location']
    visibility?: CardDecoratorProps['visibility']
    transition?: CardDecoratorProps['transition']
};
export declare const CardCheckboxDecorator: ({ location, transition, visibility, ...checkboxProps }: CardCheckboxDecoratorProps) => React.JSX.Element;
export {};
