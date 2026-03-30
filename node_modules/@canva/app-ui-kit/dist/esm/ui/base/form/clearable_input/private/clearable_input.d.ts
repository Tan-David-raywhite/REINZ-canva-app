import * as React from 'react';
import type { TextInputProps } from '../../text_input/text_input';
import type { Icon as IconType } from '../../../icons/icons';
export type ClearableInputProps = Omit<TextInputProps, 'type' | 'ref'> & {
    ref?: React.Ref<ClearableInputRef>
    type?: 'search' | 'link' | 'location' | 'text'
    allowClear?: 'always' | 'never' | 'when-not-empty'
    focusOnClear?: boolean
    onClear?(): void
    showBackButton?: boolean
    BackButtonIcon?: IconType
    onBack?(): void
    blurOnEnterKeyDown?: boolean
};
export type ClearableInputRef = {
    blur: () => void
    select: () => void
    focus: () => void
};
export declare function ClearableInput(
 { type, allowClear, focusOnClear, onClear, showBackButton, BackButtonIcon, onBack, inputClassName, borderless, blurOnEnterKeyDown: blurOnEnterKeyDownProp, onKeyDown, start, end, ref, ...inputProps }: ClearableInputProps
): React.ReactNode;
