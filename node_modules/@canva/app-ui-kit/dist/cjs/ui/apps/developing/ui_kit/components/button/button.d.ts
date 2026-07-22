import * as React from 'react';
import type { IconElement } from '../../icons/icons';
/** 
 * The click event for a button.
 */
export type TouchOrMouseEvent<T> = React.SyntheticEvent & Partial<Omit<React.MouseEvent<T>, 'nativeEvent'>> & Partial<Omit<React.TouchEvent<T>, 'nativeEvent'>>;
/** 
 * The appearance of a button, indicating its priority.
 */
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'contrast';
/** 
 * This size of the button.
 */
export type ButtonSize = 'small' | 'medium';
/** 
 * The position of the icon within the button.
 */
export type IconPosition = 'start' | 'end';
/**
 * 
 * The alignment of button content.
 */
export type Alignment = 'start' | 'center' | 'end';
/** 
 * The base props for the `Button` component.
 */
type BaseButtonProps = {
    /** 
         * A label that describes what the button does.
         * This must be supplied if the button doesn't have any text content (i.e. an icon-only button).
         */
    ariaLabel?: string;
    /** 
         * A human readable label that appears in a tooltip when the user's cursor hovers over the button.
         */
    tooltipLabel?: string;
    /** 
         * A human readable label for the button.
         */
    children?: string;
    /** 
         * If `true`, the user can't interact with the button.
         * @defaultValue false
         */
    disabled?: boolean;
    /** 
         * If `true`, the Button will show selected styles.
         * Use to mark an effect being applied.
         * Do not use if the button cannot be unselected.
         * @defaultValue false
         */
    selected?: boolean;
    /** 
         * The icon to render inside the button.
         * This must be one of the icons provided by the App UI Kit.
         */
    icon?: () => IconElement;
    /** 
         * The position of the icon within the button.
         * @defaultValue 'start'
         */
    iconPosition?: IconPosition;
    /** 
         * The alignment of button content.
         * @defaultValue `center`
         */
    alignment?: Alignment;
    /** 
         * The type of button.
         * @defaultValue "button"
         */
    type?: 'submit' | 'button' | 'reset';
    /** 
         * If `true`, the button is rendered in a loading state.
         */
    loading?: boolean;
    /** 
         * A callback that runs when the button is clicked.
         * @param event - The click event for the button.
         */
    onClick?: (event: TouchOrMouseEvent<any>) => void;
    /** 
         * If `true`, the button expands to fill the width of its container.
         * If the button is a child of a `Rows` component, it automatically expands to fill the width of its container and this prop has no effect.
         * @defaultValue false
         */
    stretch?: boolean;
};
/** 
 * `BaseButtonProps` plus optional `pressed` for variants that support pressed styling.
 */
type BaseButtonPropsWithPressed = BaseButtonProps & {
    /** 
         * If `true`, the button is rendered in a pressed state.
         */
    pressed?: boolean;
};
/** 
 * `Button` with a text label only (no icon).
 */
export type ButtonWithLabelOnly = {
    /** 
         * A human readable label for the button.
         */
    children: string;
    icon?: never;
};
/** 
 * `Button` with an icon only (no text label; `ariaLabel` is required).
 */
export type ButtonWithIconOnly = {
    children?: never;
    icon: () => IconElement;
};
/** 
 * `Button` with both a text label and an icon.
 */
export type ButtonWithIconAndLabel = {
    /** 
         * A human readable label for the button.
         */
    children: string;
    icon: () => IconElement;
};
/** 
 * Medium `Button` when `variant` is `primary` (`pressed` is not a valid prop).
 */
type ButtonMediumPrimaryProps = BaseButtonProps & {
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: 'primary';
    /** 
         * The size of the `Button`.
         * @defaultValue 'medium'
         */
    size?: 'medium';
};
/** 
 * Medium `Button` for variants that support `pressed` styling.
 */
type ButtonMediumNonPrimaryProps = BaseButtonPropsWithPressed & {
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: 'secondary' | 'tertiary' | 'contrast';
    /** 
         * The size of the `Button`.
         * @defaultValue 'medium'
         */
    size?: 'medium';
};
type ButtonIndeterminateVariantProps = BaseButtonPropsWithPressed & {
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: Variant;
    /** 
         * The size of the `Button`.
         * @defaultValue 'medium'
         */
    size?: 'medium';
};
type ButtonSmallSecondaryProps = BaseButtonPropsWithPressed & {
    /** 
         * The size of the `Button`.
         */
    size: 'small';
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: 'secondary';
} & (ButtonWithLabelOnly | ButtonWithIconAndLabel);
type ButtonSmallTertiaryProps = BaseButtonPropsWithPressed & {
    /** 
         * The size of the `Button`.
         */
    size: 'small';
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: 'tertiary';
} & (ButtonWithLabelOnly | ButtonWithIconOnly | ButtonWithIconAndLabel);
type ButtonSmallContrastProps = BaseButtonPropsWithPressed & {
    /** 
         * The size of the `Button`.
         */
    size: 'small';
    /** 
         * The appearance of the button, indicating its priority.
         */
    variant: 'contrast';
} & ButtonWithIconOnly;
type ButtonMediumProps = ButtonMediumPrimaryProps | ButtonMediumNonPrimaryProps;
type ButtonSmallProps = ButtonSmallSecondaryProps | ButtonSmallTertiaryProps | ButtonSmallContrastProps;
/** 
 * The props for the `Button` component.
 */
export type ButtonProps = ButtonMediumProps | ButtonSmallProps | ButtonIndeterminateVariantProps;
/** 
 * Triggers an action, such as the submission of a form.
 */
export declare function Button(props: ButtonMediumProps): React.JSX.Element;
export declare function Button(props: ButtonSmallProps): React.JSX.Element;
export declare function Button(props: ButtonIndeterminateVariantProps): React.JSX.Element;
export {};
