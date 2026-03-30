import type { AriaAttributes } from 'react';
type TypographyAriaProps = {
    ariaHidden?: boolean
    ariaLabel?: string
    ariaLive?: 'assertive' | 'off' | 'polite'
};
export type TextAriaProps = Omit<TypographyAriaProps, 'ariaLabel'>;
export type TitleAriaProps = TypographyAriaProps;
export declare function getTypographyAriaAttributes(props: TypographyAriaProps): AriaAttributes;
export {};
