import * as React from 'react';
import type { AnchorProps, ButtonProps } from './internal_button';
type NeutralButtonVariant = 'primary' | 'secondary' | 'tertiary';
type VariantProp = {
    variant: NeutralButtonVariant
};
export type NeutralButtonProps = ButtonProps & VariantProp;
export type NeutralAnchorProps = AnchorProps & VariantProp;
export declare function NeutralButton(props: NeutralButtonProps): React.ReactNode;
export declare function NeutralButtonLink(props: NeutralAnchorProps): React.ReactNode;
export {};
