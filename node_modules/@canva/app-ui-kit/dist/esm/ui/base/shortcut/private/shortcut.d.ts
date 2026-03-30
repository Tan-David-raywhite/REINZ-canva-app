import * as React from 'react';
import type { KeyCombination, KeyRange, Platform } from '../../key_combinations/key_combinations';
export type Size = 'small' | 'medium';
export type ShortcutProps = {
    combination: KeyCombination | KeyRange
    platform?: Platform
    compact?: boolean
    size?: Size
    className?: string
};
export declare const Shortcut: React.ComponentType<ShortcutProps>;
