import * as React from 'react';
export type EyeDropperButtonProps = {
    onStart: (request: React.MouseEvent<any>) => Promise<void>
    onBackButton?: () => void
    shape?: 'circle' | 'square'
};
export declare function EyeDropperButton(props: EyeDropperButtonProps): React.JSX.Element;
