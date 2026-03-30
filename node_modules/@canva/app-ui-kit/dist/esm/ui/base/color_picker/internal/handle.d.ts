import * as React from 'react';
export type HandleProps = {
    color: string
    active?: boolean
    focused?: boolean
    preview?: boolean
    className?: string
    style?: React.CSSProperties
};
export declare function Handle({ color, active, focused, preview, className, style, }: HandleProps): React.ReactNode;
